import type { INestMicroservice }    from '@nestjs/common'
import type { StartedTestContainer } from 'testcontainers'

import { ConnectRpcServer }          from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }            from '@monstrs/nestjs-connectrpc'
import { RedisModule }               from '@monstrs/nestjs-redis'
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

import { IdGenClientModule }         from '@chats-system/idgen-client-module'
import { IdGenClient }               from '@chats-system/idgen-client-module'
import { IdGenInfrastructureModule } from '@chats-system/idgen-infrastructure-module'

describe('idgen', () => {
  describe('service', () => {
    describe('rpc', () => {
      let redis: StartedTestContainer
      let service: INestMicroservice
      let client: IdGenClient

      beforeAll(async () => {
        redis = await new GenericContainer('bitnami/redis')
          .withWaitStrategy(Wait.forLogMessage('Ready to accept connections'))
          .withEnvironment({
            REDIS_PASSWORD: 'password',
          })
          .withExposedPorts(6379)
          .start()

        const port = await getPort()

        const testingModule = await Test.createTestingModule({
          imports: [
            IdGenClientModule.register({
              baseUrl: `http://localhost:${port}`,
              idleConnectionTimeoutMs: 1000,
            }),
            IdGenClientModule.attach(),
            IdGenInfrastructureModule.register(),
            RedisModule.register(
              {
                port: redis.getMappedPort(6379),
              },
              true
            ),
          ],
          exports: [RedisModule],
        }).compile()

        service = testingModule.createNestMicroservice({
          strategy: new ConnectRpcServer({
            protocol: ServerProtocol.HTTP2_INSECURE,
            port,
          }),
        })

        await service.listen()

        client = testingModule.get(IdGenClient)
      })

      afterAll(async () => {
        await service.close()
        await redis.stop()
      })

      describe('current sequence', () => {
        it('get current sequence id', async () => {
          await expect(client.loadCurrentSequenceId(faker.string.uuid())).resolves.toBe(0n)
        })

        it('set current sequence id', async () => {
          const key = faker.string.uuid()

          await expect(client.setCurrentSequenceId(key, 5n)).resolves.toBe(true)
          await expect(client.loadCurrentSequenceId(key)).resolves.toBe(5n)
        })

        it('get current sequence ids', async () => {
          const key1 = faker.string.uuid()
          const key2 = faker.string.uuid()

          await client.setCurrentSequenceId(key1, 1n)
          await client.setCurrentSequenceId(key2, 2n)

          await expect(
            Promise.all([
              client.loadCurrentSequenceId(key2),
              client.loadCurrentSequenceId(key1),
              client.loadCurrentSequenceId(key2),
            ])
          ).resolves.toEqual([2n, 1n, 2n])
        })
      })

      describe('next sequence', () => {
        it('get next sequence id', async () => {
          await expect(client.loadNextSequenceId(faker.string.uuid())).resolves.toBe(1n)
        })

        it('set next sequence id', async () => {
          const key = faker.string.uuid()

          await expect(client.setCurrentSequenceId(key, 5n)).resolves.toBe(true)
          await expect(client.loadNextSequenceId(key)).resolves.toBe(6n)
        })

        it('get current sequence ids', async () => {
          const key1 = faker.string.uuid()
          const key2 = faker.string.uuid()

          await client.setCurrentSequenceId(key1, 1n)
          await client.setCurrentSequenceId(key2, 2n)

          await expect(
            Promise.all([
              client.loadNextSequenceId(key2),
              client.loadNextSequenceId(key1),
              client.loadNextSequenceId(key2),
            ])
          ).resolves.toEqual([3n, 2n, 4n])
        })
      })
    })
  })
})
