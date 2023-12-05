import type { MikroOrmModuleOptions }   from '@mikro-orm/nestjs'
import type { INestMicroservice }       from '@nestjs/common'
import type { StartedTestContainer }    from 'testcontainers'

import { MikroORM }                     from '@mikro-orm/core'
import { MikroOrmModule }               from '@mikro-orm/nestjs'
import { PostgreSqlDriver }             from '@mikro-orm/postgresql'
import { ConnectRpcServer }             from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }               from '@monstrs/nestjs-connectrpc'
import { MikroORMConfigModule }         from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMConfig }               from '@monstrs/nestjs-mikro-orm-config'
import { Test }                         from '@nestjs/testing'
import { faker }                        from '@faker-js/faker'
import { describe }                     from '@jest/globals'
import { afterAll }                     from '@jest/globals'
import { beforeAll }                    from '@jest/globals'
import { expect }                       from '@jest/globals'
import { it }                           from '@jest/globals'
import { GenericContainer }             from 'testcontainers'
import { Wait }                         from 'testcontainers'
import getPort                          from 'get-port'

import { IdGenClient }                  from '@chats-system/idgen-client-module'
import { IdGenTestingClient }           from '@chats-system/idgen-client-module'
import { IdGenClientModule }            from '@chats-system/idgen-client-module'
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
            IdGenClientModule.register(),
            MessagesClientModule.register({
              baseUrl: `http://localhost:${port}`,
              idleConnectionTimeoutMs: 1000,
            }),
            MessagesClientModule.attach(),
            MessagesInfrastructureModule.register(),
            MikroOrmModule.forRootAsync({
              imports: [
                MikroORMConfigModule.register({
                  driver: PostgreSqlDriver,
                  port: postgres.getMappedPort(5432),
                  migrationsList: migrations,
                  entities,
                }),
              ],
              useFactory: async (mikroORMConfig: MikroORMConfig): Promise<MikroOrmModuleOptions> =>
                mikroORMConfig.createMikroOrmOptions(),
              inject: [MikroORMConfig],
            }),
          ],
        })
          .overrideProvider(IdGenClient)
          .useClass(IdGenTestingClient)
          .compile()

        await testingModule.get(MikroORM).getMigrator().up()

        service = testingModule.createNestMicroservice({
          strategy: new ConnectRpcServer({
            protocol: ServerProtocol.HTTP2_INSECURE,
            port,
          }),
        })

        await service.listen()

        client = testingModule.get(MessagesClient)
      })

      afterAll(async () => {
        await service.close()
        await postgres.stop()
      })

      describe('send messages', () => {
        it('check create outbox message', async () => {
          const request = {
            userId: faker.number.bigInt({ min: 1 }),
            peer: {
              peerType: PeerType.USER,
              peerId: faker.number.bigInt({ min: 1 }),
            },
            message: faker.word.sample(),
          }

          const { outboxMessage } = await client.sendMessage(request)

          expect(outboxMessage?.messageId).toBe(1)
          expect(outboxMessage?.from?.peerId).toBe(request.userId)
          expect(outboxMessage?.peer?.peerId).toBe(request.peer.peerId)
          expect(outboxMessage?.message).toBe(request.message)
        })

        it('check create inbox message', async () => {
          const request = {
            userId: faker.number.bigInt({ min: 1 }),
            peer: {
              peerType: PeerType.USER,
              peerId: faker.number.bigInt({ min: 1 }),
            },
            message: faker.word.sample(),
          }

          const { inboxMessage } = await client.sendMessage(request)

          expect(inboxMessage?.messageId).toBe(1)
          expect(inboxMessage?.from?.peerId).toBe(request.peer.peerId)
          expect(inboxMessage?.peer?.peerId).toBe(request.userId)
          expect(inboxMessage?.message).toBe(request.message)
        })

        it('check create message updates', async () => {
          const request = {
            userId: faker.number.bigInt({ min: 1 }),
            peer: {
              peerType: PeerType.USER,
              peerId: faker.number.bigInt({ min: 1 }),
            },
            message: faker.word.sample(),
          }

          const { pts, ptsCount } = await client.sendMessage(request)

          expect(pts).toBe(1)
          expect(ptsCount).toBe(1)
        })

        it('check create outbox dialog', async () => {
          const { outboxMessage } = await client.sendMessage({
            userId: faker.number.bigInt({ min: 1 }),
            peer: {
              peerType: PeerType.USER,
              peerId: faker.number.bigInt({ min: 1 }),
            },
            message: faker.word.sample(),
          })

          const {
            dialogs: [dialog],
          } = await client.getUserDialogs({
            userId: outboxMessage?.from?.peerId,
          })

          expect(dialog.topMessage).toBe(1)
          expect(dialog.readInboxMaxId).toBe(0)
          expect(dialog.readOutboxMaxId).toBe(0)
          expect(dialog.unreadCount).toBe(0)
          expect(dialog.userId).toBe(outboxMessage?.from?.peerId)
          expect(dialog.peer?.peerId).toBe(outboxMessage?.peer?.peerId)
        })

        it('check create inbox dialog', async () => {
          const { inboxMessage, outboxMessage } = await client.sendMessage({
            userId: faker.number.bigInt({ min: 1 }),
            peer: {
              peerType: PeerType.USER,
              peerId: faker.number.bigInt({ min: 1 }),
            },
            message: faker.word.sample(),
          })

          const {
            dialogs: [dialog],
          } = await client.getUserDialogs({
            userId: inboxMessage?.from?.peerId,
          })

          expect(dialog.topMessage).toBe(1)
          expect(dialog.readInboxMaxId).toBe(0)
          expect(dialog.readOutboxMaxId).toBe(0)
          expect(dialog.unreadCount).toBe(1)
          expect(dialog.userId).toBe(inboxMessage?.from?.peerId)
          expect(dialog.peer?.peerId).toBe(outboxMessage?.from?.peerId)
        })

        it('check update outbox dialog', async () => {
          const { outboxMessage } = await client.sendMessage({
            userId: faker.number.bigInt({ min: 1 }),
            peer: {
              peerType: PeerType.USER,
              peerId: faker.number.bigInt({ min: 1 }),
            },
            message: faker.word.sample(),
          })

          await client.sendMessage({
            userId: outboxMessage?.from?.peerId,
            peer: {
              peerType: PeerType.USER,
              peerId: outboxMessage?.peer?.peerId,
            },
            message: faker.word.sample(),
          })

          const {
            dialogs: [dialog],
          } = await client.getUserDialogs({
            userId: outboxMessage?.from?.peerId,
          })

          expect(dialog.topMessage).toBe(2)
          expect(dialog.readInboxMaxId).toBe(0)
          expect(dialog.readOutboxMaxId).toBe(0)
          expect(dialog.unreadCount).toBe(0)
          expect(dialog.userId).toBe(outboxMessage?.from?.peerId)
          expect(dialog.peer?.peerId).toBe(outboxMessage?.peer?.peerId)
        })

        it('check update inbox dialog', async () => {
          const { inboxMessage, outboxMessage } = await client.sendMessage({
            userId: faker.number.bigInt({ min: 1 }),
            peer: {
              peerType: PeerType.USER,
              peerId: faker.number.bigInt({ min: 1 }),
            },
            message: faker.word.sample(),
          })

          await client.sendMessage({
            userId: outboxMessage?.from?.peerId,
            peer: {
              peerType: PeerType.USER,
              peerId: outboxMessage?.peer?.peerId,
            },
            message: faker.word.sample(),
          })

          const {
            dialogs: [dialog],
          } = await client.getUserDialogs({
            userId: inboxMessage?.from?.peerId,
          })

          expect(dialog.topMessage).toBe(2)
          expect(dialog.readInboxMaxId).toBe(0)
          expect(dialog.readOutboxMaxId).toBe(0)
          expect(dialog.unreadCount).toBe(2)
          expect(dialog.userId).toBe(inboxMessage?.from?.peerId)
        })
      })
    })
  })
})
