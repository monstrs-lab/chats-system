import type { User }                   from '@chats-system/users-client-module'
import type { INestApplication }       from '@nestjs/common'
import type { INestMicroservice }      from '@nestjs/common'
import type { StartedTestContainer }   from 'testcontainers'

import { MikroORM }                    from '@mikro-orm/core'
import { Migrator }                    from '@mikro-orm/migrations'
import { MikroOrmModule }              from '@mikro-orm/nestjs'
import { PostgreSqlDriver }            from '@mikro-orm/postgresql'
import { ConnectRpcServer }            from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }              from '@monstrs/nestjs-connectrpc'
import { RedisModule }                 from '@monstrs/nestjs-redis'
import { CqrsModule }                  from '@nestjs/cqrs'
import { Test }                        from '@nestjs/testing'
import { faker }                       from '@faker-js/faker'
import { describe }                    from '@jest/globals'
import { afterAll }                    from '@jest/globals'
import { beforeAll }                   from '@jest/globals'
import { expect }                      from '@jest/globals'
import { it }                          from '@jest/globals'
import { GenericContainer }            from 'testcontainers'
import { Wait }                        from 'testcontainers'
import getPort                         from 'get-port'

import * as Transport                  from '@chats-system/transport'
import { AuthKeyClientModule }         from '@chats-system/authkey-client-module'
import { ChatsSystemClient }           from '@chats-system/client'
import { IdGenClientModule }           from '@chats-system/idgen-client-module'
import { MessagesClientModule }        from '@chats-system/messages-client-module'
import { RedisStreamsIoAdapter }       from '@chats-system/redis-streams-io-adapter'
import { UsersClient }                 from '@chats-system/users-client-module'
import { UsersClientModule }           from '@chats-system/users-client-module'

import { StandaloneServiceCoreModule } from '../src/module/index.js'
import { entities }                    from '../src/entities/index.js'
import { migrations }                  from '../src/migrations/index.js'

describe('standalone', () => {
  let redis: StartedTestContainer
  let postgres: StartedTestContainer
  let service: INestMicroservice
  let app: INestApplication
  let user1: User
  let user2: User
  let client1: ChatsSystemClient
  let client2: ChatsSystemClient

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
        CqrsModule.forRoot(),
        IdGenClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        AuthKeyClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        UsersClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        MessagesClientModule.register({
          baseUrl: `http://localhost:${servicePort}`,
          idleConnectionTimeoutMs: 1000,
        }),
        RedisModule.register(
          {
            port: redis.getMappedPort(6379),
          },
          true
        ),
        MikroOrmModule.forRoot({
          driver: PostgreSqlDriver,
          port: postgres.getMappedPort(5432),
          dbName: 'db',
          user: 'postgres',
          password: 'password',
          entities: Object.values(entities),
          forceUndefined: true,
          migrations: {
            disableForeignKeys: false,
            migrationsList: Object.keys(migrations).map((name: string) => ({
              class: migrations[name as keyof typeof migrations],
              name,
            })),
          },
          extensions: [Migrator],
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

    app.useWebSocketAdapter(new RedisStreamsIoAdapter(app))

    await app.listen(appPort)
    await service.listen()

    const { user: u1 } = await testingModule.get(UsersClient).createUser({
      externalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    })

    const { user: u2 } = await testingModule.get(UsersClient).createUser({
      externalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    })

    user1 = u1!
    user2 = u2!

    client1 = new ChatsSystemClient(`ws://localhost:${appPort}`, {
      io: {
        extraHeaders: {
          'x-user': user1!.externalId,
        },
      },
    })

    client2 = new ChatsSystemClient(`ws://localhost:${appPort}`, {
      io: {
        extraHeaders: {
          'x-user': user2!.externalId,
        },
      },
    })
  })

  afterAll(async () => {
    await service.close()
    await app.close()
    await postgres.stop()
    await redis.stop()
  })

  it('check connect client', async () => {
    await client1.connect()
    await client2.connect()

    expect(client1.isConnected()).toBe(true)
    expect(client2.isConnected()).toBe(true)
  })

  it('check ping', async () => {
    const onPong = new Promise((resolve) => {
      client1.on(Transport.Pong, (message: Transport.Pong) => {
        resolve(message)
      })
    })

    await client1.send(
      new Transport.Ping({
        pingId: 0n,
      })
    )

    await client2.send(
      new Transport.Ping({
        pingId: 0n,
      })
    )

    await expect(onPong).resolves.toEqual(
      expect.objectContaining({
        pingId: 0n,
      })
    )
  })

  it('check send message', async () => {
    const onSentMessage = new Promise((resolve) => {
      client1.on(Transport.Updates, (message: Transport.Updates) => {
        resolve(message)
      })
    })

    const onUpdateMessageId = new Promise((resolve) => {
      client1.on(Transport.Updates, (message: Transport.Updates) => {
        resolve(message)
      })
    })

    const onUpdateNewMessage = new Promise((resolve) => {
      client2.on(Transport.Updates, (message: Transport.Updates) => {
        resolve(message)
      })
    })

    const randomId = faker.number.bigInt()
    const message = faker.word.sample()

    await client1.send(
      new Transport.SendMessage({
        peer: new Transport.InputPeerUser({
          userId: user2.id,
        }),
        message,
        randomId,
      })
    )

    await expect(onSentMessage).resolves.toBeDefined()

    await expect(onUpdateMessageId).resolves.toEqual(
      expect.objectContaining({
        updates: expect.arrayContaining([
          expect.objectContaining({
            randomId,
          }),
        ]),
      })
    )

    await expect(onUpdateNewMessage).resolves.toEqual(
      expect.objectContaining({
        updates: expect.arrayContaining([
          expect.objectContaining({
            message: expect.objectContaining({
              message,
              id: 1n,
              out: false,
              fromId: expect.objectContaining({
                userId: user1.id,
              }),
              peerId: expect.objectContaining({
                userId: user1.id,
              }),
            }),
          }),
        ]),
      })
    )
  })
})
