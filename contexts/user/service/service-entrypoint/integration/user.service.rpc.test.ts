import type { PromiseClient }         from '@connectrpc/connect'
import type { MikroOrmModuleOptions } from '@mikro-orm/nestjs'
import type { INestMicroservice }     from '@nestjs/common'
import type { StartedTestContainer }  from 'testcontainers'

import { MikroORM }                   from '@mikro-orm/core'
import { MikroOrmModule }             from '@mikro-orm/nestjs'
import { PostgreSqlDriver }           from '@mikro-orm/postgresql'
import { ConnectRpcServer }           from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }             from '@monstrs/nestjs-connectrpc'
import { MikroORMConfigModule }       from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMConfig }             from '@monstrs/nestjs-mikro-orm-config'
import { Test }                       from '@nestjs/testing'
import { createPromiseClient }        from '@connectrpc/connect'
import { createGrpcTransport }        from '@connectrpc/connect-node'
import { faker }                      from '@faker-js/faker'
import { describe }                   from '@jest/globals'
import { afterAll }                   from '@jest/globals'
import { beforeAll }                  from '@jest/globals'
import { expect }                     from '@jest/globals'
import { it }                         from '@jest/globals'
import { GenericContainer }           from 'testcontainers'
import { Wait }                       from 'testcontainers'
import getPort                        from 'get-port'

import { UserInfrastructureModule }   from '@chats-system/user-infrastructure-module'
import { UserService }                from '@chats-system/user-rpc/connect'
import { entities }                   from '@chats-system/user-infrastructure-module'
import { migrations }                 from '@chats-system/user-infrastructure-module'

describe('user', () => {
  describe('service', () => {
    describe('rpc', () => {
      let postgres: StartedTestContainer
      let service: INestMicroservice
      let client: PromiseClient<typeof UserService>

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
            UserInfrastructureModule.register(),
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
          UserService,
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

      describe('create user', () => {
        it('check create', async () => {
          const request = {
            secretKeyId: faker.number.bigInt({ min: 1 }),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            phone: faker.phone.number(),
          }

          const { user } = await client.createUser(request)

          expect(user?.secretKeyId).toBe(request.secretKeyId)
          expect(user?.firstName).toBe(request.firstName)
          expect(user?.lastName).toBe(request.lastName)
          expect(user?.phone).toBe(request.phone)
        })
      })

      describe('get user', () => {
        it('check get user', async () => {
          const request = {
            secretKeyId: faker.number.bigInt({ min: 1 }),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            phone: faker.phone.number(),
          }

          const response = await client.createUser(request)

          const { user } = await client.getUser({ userId: response.user!.id })

          expect(user?.secretKeyId).toBe(request.secretKeyId)
          expect(user?.firstName).toBe(request.firstName)
          expect(user?.lastName).toBe(request.lastName)
          expect(user?.phone).toBe(request.phone)
        })
      })
    })
  })
})