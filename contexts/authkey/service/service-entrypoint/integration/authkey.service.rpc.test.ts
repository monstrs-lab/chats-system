import type { PromiseClient }          from '@connectrpc/connect'
import type { INestMicroservice }      from '@nestjs/common'
import type { StartedTestContainer }   from 'testcontainers'

import { randomBytes }                 from 'node:crypto'

import { MikroORM }                    from '@mikro-orm/core'
import { Migrator }                    from '@mikro-orm/migrations'
import { MikroOrmModule }              from '@mikro-orm/nestjs'
import { PostgreSqlDriver }            from '@mikro-orm/postgresql'
import { ConnectRpcServer }            from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }              from '@monstrs/nestjs-connectrpc'
import { CqrsModule }                  from '@nestjs/cqrs'
import { Test }                        from '@nestjs/testing'
import { createPromiseClient }         from '@connectrpc/connect'
import { createGrpcTransport }         from '@connectrpc/connect-node'
import { faker }                       from '@faker-js/faker'
import { describe }                    from '@jest/globals'
import { afterAll }                    from '@jest/globals'
import { beforeAll }                   from '@jest/globals'
import { expect }                      from '@jest/globals'
import { it }                          from '@jest/globals'
import { GenericContainer }            from 'testcontainers'
import { Wait }                        from 'testcontainers'
import getPort                         from 'get-port'

import { AuthKeyInfrastructureModule } from '@chats-system/authkey-infrastructure-module'
import { AuthKeyService }              from '@chats-system/authkey-rpc/connect'
import { entities }                    from '@chats-system/authkey-infrastructure-module'
import { migrations }                  from '@chats-system/authkey-infrastructure-module'

describe('authkey', () => {
  describe('service', () => {
    describe('rpc', () => {
      let postgres: StartedTestContainer
      let service: INestMicroservice
      let client: PromiseClient<typeof AuthKeyService>

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
            AuthKeyInfrastructureModule.register(),
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

        client = createPromiseClient(
          AuthKeyService,
          createGrpcTransport({
            httpVersion: '2',
            baseUrl: `http://localhost:${port}`,
            idleConnectionTimeoutMs: 1000,
          })
        )
      })

      afterAll(async () => {
        await service.close()
        await postgres.stop()
      })

      describe('create auth key', () => {
        it('check create', async () => {
          const request = {
            id: faker.number.bigInt({ min: 1 }),
            key: randomBytes(256),
          }

          const { authKey } = await client.createAuthKey(request)

          expect(authKey?.id).toBe(request.id)
          expect(Buffer.from(authKey!.key).toString('hex')).toBe(request.key.toString('hex'))
        })
      })

      describe('create auth key user', () => {
        it('check create', async () => {
          const request = {
            authKeyId: faker.number.bigInt({ min: 1 }),
            userId: faker.number.bigInt({ min: 1 }),
          }

          const { authKeyUser } = await client.createAuthKeyUser(request)

          expect(authKeyUser?.id).toBeDefined()
          expect(authKeyUser?.authKeyId).toBe(request.authKeyId)
          expect(authKeyUser?.userId).toBe(request.userId)
        })
      })
    })
  })
})
