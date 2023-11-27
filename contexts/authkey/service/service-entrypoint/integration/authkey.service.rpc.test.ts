import type { PromiseClient }          from '@connectrpc/connect'
import type { MikroOrmModuleOptions }  from '@mikro-orm/nestjs'
import type { INestMicroservice }      from '@nestjs/common'
import type { StartedTestContainer }   from 'testcontainers'

import { randomBytes }                 from 'node:crypto'

import { MikroORM }                    from '@mikro-orm/core'
import { MikroOrmModule }              from '@mikro-orm/nestjs'
import { PostgreSqlDriver }            from '@mikro-orm/postgresql'
import { ConnectRpcServer }            from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }              from '@monstrs/nestjs-connectrpc'
import { MikroORMConfigModule }        from '@monstrs/nestjs-mikro-orm-config'
import { MikroORMConfig }              from '@monstrs/nestjs-mikro-orm-config'
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
import { AuthKeyType } from '@chats-system/authkey-rpc/connect'
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
            AuthKeyInfrastructureModule.register(),
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
            authKeyId: faker.number.bigInt({ min: 1 }),
            authKey: randomBytes(256),
          }

          const { authKey } = await client.createAuthKey(request)

          expect(authKey?.authKeyId).toBe(request.authKeyId)
          expect(authKey?.authKeyType).toBe(AuthKeyType.UNKNOWN)
          expect(Buffer.from(authKey!.authKey).toString('hex')).toBe(
            request.authKey.toString('hex')
          )
        })

        it('check create perm type', async () => {
          const request = {
            authKeyId: faker.number.bigInt({ min: 1 }),
            authKeyType: AuthKeyType.PERM,
            authKey: randomBytes(256),
          }

          const { authKey } = await client.createAuthKey(request)

          expect(authKey?.authKeyId).toBe(request.authKeyId)
          expect(authKey?.permAuthKeyId).toBe(request.authKeyId)
          expect(authKey?.authKeyType).toBe(request.authKeyType)
        })

        it('check create temp type', async () => {
          const request = {
            authKeyId: faker.number.bigInt({ min: 1 }),
            authKeyType: AuthKeyType.TEMP,
            authKey: randomBytes(256),
          }

          const { authKey } = await client.createAuthKey(request)

          expect(authKey?.authKeyId).toBe(request.authKeyId)
          expect(authKey?.tempAuthKeyId).toBe(request.authKeyId)
          expect(authKey?.authKeyType).toBe(request.authKeyType)
        })

        it('check create media temp type', async () => {
          const request = {
            authKeyId: faker.number.bigInt({ min: 1 }),
            authKeyType: AuthKeyType.MEDIA_TEMP,
            authKey: randomBytes(256),
          }

          const { authKey } = await client.createAuthKey(request)

          expect(authKey?.authKeyId).toBe(request.authKeyId)
          expect(authKey?.mediaTempAuthKeyId).toBe(request.authKeyId)
          expect(authKey?.authKeyType).toBe(request.authKeyType)
        })
      })
    })
  })
})
