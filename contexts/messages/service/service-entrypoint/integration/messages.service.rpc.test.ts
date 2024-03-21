import type { INestMicroservice }       from '@nestjs/common'
import type { StartedTestContainer }    from 'testcontainers'

import { MikroORM }                     from '@mikro-orm/core'
import { Migrator }                     from '@mikro-orm/migrations'
import { MikroOrmModule }               from '@mikro-orm/nestjs'
import { PostgreSqlDriver }             from '@mikro-orm/postgresql'
import { ConnectRpcServer }             from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }               from '@monstrs/nestjs-connectrpc'
import { CqrsModule }                   from '@nestjs/cqrs'
import { Test }                         from '@nestjs/testing'
import { faker }                        from '@faker-js/faker'
import { describe }                     from '@jest/globals'
import { afterAll }                     from '@jest/globals'
import { afterEach }                    from '@jest/globals'
import { beforeAll }                    from '@jest/globals'
import { expect }                       from '@jest/globals'
import { it }                           from '@jest/globals'
import { jest }                         from '@jest/globals'
import { GenericContainer }             from 'testcontainers'
import { Wait }                         from 'testcontainers'
import getPort                          from 'get-port'

import { IdGenClientModule }            from '@chats-system/idgen-client-module'
import { IdGenClient }                  from '@chats-system/idgen-client-module'
import { MessagesClientModule }         from '@chats-system/messages-client-module'
import { PeerType }                     from '@chats-system/messages-client-module'
import { MessagesClient }               from '@chats-system/messages-client-module'
import { MessagesInfrastructureModule } from '@chats-system/messages-infrastructure-module'
import { entities }                     from '@chats-system/messages-infrastructure-module'
import { migrations }                   from '@chats-system/messages-infrastructure-module'

describe('messages', () => {
  describe('service', () => {
    describe('rpc', () => {
      let postgres: StartedTestContainer
      let service: INestMicroservice
      let idGenClient: IdGenClient
      let client: MessagesClient

      beforeAll(async () => {
        postgres = await new GenericContainer('bitnami/postgresql')
          .withWaitStrategy(Wait.forLogMessage('database system is ready to accept connections'))
          .withEnvironment({
            POSTGRESQL_PASSWORD: 'password',
            POSTGRESQL_DATABASE: 'db',
          })
          .withExposedPorts(5432)
          .start()

        const port = await getPort()

        const testingModule = await Test.createTestingModule({
          imports: [
            CqrsModule.forRoot(),
            MessagesInfrastructureModule.register(),
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
            IdGenClientModule.register({
              baseUrl: `http://localhost:${port}`,
              idleConnectionTimeoutMs: 1000,
            }),
            MessagesClientModule.register({
              baseUrl: `http://localhost:${port}`,
              idleConnectionTimeoutMs: 1000,
            }),
            MessagesClientModule.attach(),
          ],
        }).compile()

        await testingModule.get(MikroORM).getMigrator().up()

        service = testingModule.createNestMicroservice({
          strategy: new ConnectRpcServer({
            protocol: ServerProtocol.HTTP2_INSECURE,
            port,
          }),
        })

        await service.listen()

        idGenClient = testingModule.get(IdGenClient)
        client = testingModule.get(MessagesClient)
      })

      afterAll(async () => {
        await service.close()
        await postgres.stop()
      })

      afterEach(async () => {
        jest.clearAllMocks()
      })

      it('check send message', async () => {
        jest
          .spyOn(idGenClient, 'getRandomId')
          .mockImplementation(async () => Promise.resolve(faker.number.bigInt()))

        jest
          .spyOn(idGenClient, 'getNextMessageBoxId')
          .mockImplementation(async () => Promise.resolve(1n))

        await expect(
          client.sendMessage({
            randomId: faker.number.bigInt(),
            fromId: faker.number.bigInt(),
            peerType: PeerType.USER,
            peerId: faker.number.bigInt(),
            message: faker.word.sample(),
          })
        ).resolves.toBeTruthy()
      })
    })
  })
})
