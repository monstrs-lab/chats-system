import type { INestMicroservice }    from '@nestjs/common'
import type { StartedTestContainer } from 'testcontainers'

import { MikroORM }                  from '@mikro-orm/core'
import { Migrator }                  from '@mikro-orm/migrations'
import { MikroOrmModule }            from '@mikro-orm/nestjs'
import { PostgreSqlDriver }          from '@mikro-orm/postgresql'
import { ConnectRpcServer }          from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }            from '@monstrs/nestjs-connectrpc'
import { CqrsModule }                from '@nestjs/cqrs'
import { Test }                      from '@nestjs/testing'
import { faker }                     from '@faker-js/faker'
import { describe }                  from '@jest/globals'
import { afterAll }                  from '@jest/globals'
import { beforeAll }                 from '@jest/globals'
import { expect }                    from '@jest/globals'
import { it }                        from '@jest/globals'
import { GenericContainer }          from 'testcontainers'
import { Wait }                      from 'testcontainers'
import getPort                       from 'get-port'

import { UsersClientModule }         from '@chats-system/users-client-module'
import { UsersClient }               from '@chats-system/users-client-module'
import { UsersInfrastructureModule } from '@chats-system/users-infrastructure-module'
import { entities }                  from '@chats-system/users-infrastructure-module'
import { migrations }                from '@chats-system/users-infrastructure-module'

describe('users', () => {
  describe('service', () => {
    describe('rpc', () => {
      let postgres: StartedTestContainer
      let service: INestMicroservice
      let client: UsersClient

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
            UsersInfrastructureModule.register(),
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
            UsersClientModule.register({
              baseUrl: `http://localhost:${port}`,
              idleConnectionTimeoutMs: 1000,
            }),
            UsersClientModule.attach(),
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

        client = testingModule.get(UsersClient)
      })

      afterAll(async () => {
        await service.close()
        await postgres.stop()
      })

      it('check create user', async () => {
        const request = {
          externalId: faker.string.uuid(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
        }

        const { user } = await client.createUser(request)

        expect(user?.id).toBeDefined()
        expect(user?.externalId).toBe(request.externalId)
        expect(user?.firstName).toBe(request.firstName)
        expect(user?.lastName).toBe(request.lastName)
      })
    })
  })
})
