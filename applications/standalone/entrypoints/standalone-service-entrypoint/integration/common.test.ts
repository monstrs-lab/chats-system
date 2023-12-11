import type { User }                   from '@chats-system/user-client-module'
import type { MikroOrmModuleOptions }  from '@mikro-orm/nestjs'
import type { INestApplication }       from '@nestjs/common'
import type { INestMicroservice }      from '@nestjs/common'
import type { StartedTestContainer }   from 'testcontainers'

import { MikroORM }                    from '@mikro-orm/core'
import { MikroOrmModule }              from '@mikro-orm/nestjs'
import { PostgreSqlDriver }            from '@mikro-orm/postgresql'
import { ConnectRpcServer }            from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }              from '@monstrs/nestjs-connectrpc'
import { MikroORMConfigModule }        from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMConfig }              from '@monstrs/nestjs-mikro-orm-config'
import { RedisModule }                 from '@monstrs/nestjs-redis'
import { WsAdapter }                   from '@nestjs/platform-ws'
import { Test }                        from '@nestjs/testing'
import { faker }                       from '@faker-js/faker'
import { afterEach }                   from '@jest/globals'
import { beforeEach }                  from '@jest/globals'
import { describe }                    from '@jest/globals'
import { afterAll }                    from '@jest/globals'
import { beforeAll }                   from '@jest/globals'
import { expect }                      from '@jest/globals'
import { it }                          from '@jest/globals'
import { GenericContainer }            from 'testcontainers'
import { Wait }                        from 'testcontainers'
import { randomBytes }                 from 'crypto'
import { setTimeout }                  from 'timers/promises'
import getPort                         from 'get-port'

import { AuthKeyClient }               from '@chats-system/authkey-client-module'
import { AuthKeyClientModule }         from '@chats-system/authkey-client-module'
import { Client }                      from '@chats-system/client'
import { GatewayClientModule }         from '@chats-system/gateway-client-module'
import { IdGenClientModule }           from '@chats-system/idgen-client-module'
import { MessagesClientModule }        from '@chats-system/messages-client-module'
import { SessionClientModule }         from '@chats-system/session-client-module'
import { UpdatesClientModule }         from '@chats-system/updates-client-module'
import { UserClient }                  from '@chats-system/user-client-module'
import { UserClientModule }            from '@chats-system/user-client-module'
import TL                              from '@chats-system/tl'

import { StandaloneServiceCoreModule } from '../src/module/index.js'
import { entities }                    from '../src/entities/index.js'
import { migrations }                  from '../src/migrations/index.js'

describe('standalone', () => {
  let redis: StartedTestContainer
  let postgres: StartedTestContainer
  let service: INestMicroservice
  let app: INestApplication
  let authKeyClient: AuthKeyClient
  let userClient: UserClient

  beforeAll(async () => {
    postgres = await new GenericContainer('bitnami/postgresql')
      .withWaitStrategy(Wait.forLogMessage('database system is ready to accept connections'))
      .withEnvironment({
        POSTGRESQL_PASSWORD: 'password',
        POSTGRESQL_DATABASE: 'db',
      })
      .withExposedPorts(5432)
      .start()

    redis = await new GenericContainer('bitnami/redis')
      .withWaitStrategy(Wait.forLogMessage('Ready to accept connections'))
      .withEnvironment({
        REDIS_PASSWORD: 'password',
      })
      .withExposedPorts(6379)
      .start()

    const servicePort = await getPort()
    const appPort = await getPort()

    const testingModule = await Test.createTestingModule({
      imports: [
        IdGenClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        AuthKeyClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        SessionClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        GatewayClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        UserClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        UpdatesClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        MessagesClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        AuthKeyClientModule.attach(),
        UserClientModule.attach(),
        RedisModule.register({}, true),
        MikroOrmModule.forRootAsync({
          imports: [
            MikroORMConfigModule.register({
              driver: PostgreSqlDriver,
              migrationsTableName: 'mikro_orm_migrations_standalone',
              migrationsList: migrations,
              entities,
            }),
          ],
          useFactory: async (mikroORMConfig: MikroORMConfig): Promise<MikroOrmModuleOptions> =>
            mikroORMConfig.createMikroOrmOptions(),
          inject: [MikroORMConfig],
        }),
        StandaloneServiceCoreModule.register(),
      ],
    }).compile()

    await testingModule.get(MikroORM).getMigrator().up()

    app = testingModule.createNestApplication()
    service = testingModule.createNestMicroservice({
      strategy: new ConnectRpcServer({
        protocol: ServerProtocol.HTTP2_INSECURE,
        port: servicePort,
      }),
    })

    app.useWebSocketAdapter(new WsAdapter(app))

    await app.listen(appPort)
    await service.listen()

    authKeyClient = testingModule.get(AuthKeyClient)
    userClient = testingModule.get(UserClient)
  })

  afterAll(async () => {
    await service.close()
    await app.close()
    await postgres.stop()
    await redis.stop()
  })

  describe('auth key', () => {
    let client: Client

    beforeEach(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      client = new Client(`ws://localhost:${app.getHttpServer().address().port}`)

      await client.start()
      await setTimeout(100)
    })

    afterEach(async () => {
      await client.stop()
      await setTimeout(100)
    })

    it('check invalid auth key', async () => {
      await expect(client.invoke(new TL.updates.GetState())).resolves.toEqual(
        expect.objectContaining({
          errorCode: 401,
          errorMessage: 'AUTH_KEY_INVALID',
        })
      )
    })

    it('check bind user auth key', async () => {
      const authKey = await client.getAuthKey()

      const { user } = await userClient.createUser({
        secretKeyId: authKey!.authKeyId,
        phone: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      })

      await authKeyClient.createAuthKeyUser({
        authKeyId: authKey!.authKeyId,
        userId: user!.id,
      })

      await expect(client.invoke(new TL.updates.GetState())).resolves.toEqual(
        expect.objectContaining({
          pts: 1,
          qts: 0,
          seq: 0,
        })
      )
    })
  })

  describe('messages', () => {
    let client1: Client
    let client2: Client

    let user1: User
    let user2: User

    beforeEach(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      client1 = new Client(`ws://localhost:${app.getHttpServer().address().port}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      client2 = new Client(`ws://localhost:${app.getHttpServer().address().port}`)

      await client1.start()
      await client2.start()
      await setTimeout(100)

      const { user: u1 } = await userClient.createUser({
        secretKeyId: (await client1.getAuthKey())!.authKeyId,
        phone: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      })

      const { user: u2 } = await userClient.createUser({
        secretKeyId: (await client2.getAuthKey())!.authKeyId,
        phone: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      })

      user1 = u1!
      user2 = u2!

      await authKeyClient.createAuthKeyUser({
        authKeyId: (await client1.getAuthKey())!.authKeyId,
        userId: user1.id,
      })

      await authKeyClient.createAuthKeyUser({
        authKeyId: (await client2.getAuthKey())!.authKeyId,
        userId: user2.id,
      })
    })

    afterEach(async () => {
      await client1.stop()
      await client2.stop()
      await setTimeout(100)
    })

    it('check send message', async () => {
      const randomId = randomBytes(8).readBigInt64LE(0)

      const result = await client1.invoke(
        new TL.messages.SendMessage({
          peer: new TL.InputPeerUser({
            userId: user2.id,
            accessHash: user2.accessHash!,
          }),
          message: faker.word.sample(),
          randomId,
        })
      )

      expect(result).toEqual(
        expect.objectContaining({
          updates: expect.arrayContaining([
            expect.objectContaining({
              id: 1,
              randomId,
            }),
          ]),
        })
      )
    })

    it('check get sended message updates', async () => {
      const randomId = randomBytes(8).readBigInt64LE(0)
      let update: TL.TypeUpdate

      client2.addUpdateHandler((u) => {
        update = u
      })

      await client2.invoke(new TL.updates.GetState())

      await client1.invoke(
        new TL.messages.SendMessage({
          peer: new TL.InputPeerUser({
            userId: user2.id,
            accessHash: user2.accessHash!,
          }),
          message: faker.word.sample(),
          randomId,
        })
      )

      expect(update!).toBeDefined()
    })
  })
})
