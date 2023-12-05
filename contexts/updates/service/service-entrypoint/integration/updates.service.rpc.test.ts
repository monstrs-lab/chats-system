import type { INestMicroservice }      from '@nestjs/common'

import { ConnectRpcServer }            from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }              from '@monstrs/nestjs-connectrpc'
import { Test }                        from '@nestjs/testing'
import { faker }                       from '@faker-js/faker'
import { describe }                    from '@jest/globals'
import { afterAll }                    from '@jest/globals'
import { beforeAll }                   from '@jest/globals'
import { expect }                      from '@jest/globals'
import { it }                          from '@jest/globals'
import getPort                         from 'get-port'

import { IdGenClient }                 from '@chats-system/idgen-client-module'
import { IdGenTestingClient }          from '@chats-system/idgen-client-module'
import { IdGenClientModule }           from '@chats-system/idgen-client-module'
import { UpdatesClient }               from '@chats-system/updates-client-module'
import { UpdatesClientModule }         from '@chats-system/updates-client-module'
import { UpdatesInfrastructureModule } from '@chats-system/updates-infrastructure-module'

describe('updates', () => {
  describe('service', () => {
    describe('rpc', () => {
      let service: INestMicroservice
      let client: UpdatesClient

      beforeAll(async () => {
        const port = await getPort()

        const testingModule = await Test.createTestingModule({
          imports: [
            UpdatesInfrastructureModule.register(),
            IdGenClientModule.register(),
            UpdatesClientModule.register({
              baseUrl: `http://localhost:${port}`,
              idleConnectionTimeoutMs: 1000,
            }),
            UpdatesClientModule.attach(),
          ],
        })
          .overrideProvider(IdGenClient)
          .useClass(IdGenTestingClient)
          .compile()

        service = testingModule.createNestMicroservice({
          strategy: new ConnectRpcServer({
            protocol: ServerProtocol.HTTP2_INSECURE,
            port,
          }),
        })

        await service.listen()

        client = testingModule.get(UpdatesClient)
      })

      afterAll(async () => {
        await service.close()
      })

      describe('get state', () => {
        it('check get state', async () => {
          const { state } = await client.getState({
            authKeyId: faker.number.bigInt({ min: 1 }),
            userId: faker.number.bigInt({ min: 1 }),
          })

          expect(state?.pts).toBe(1)
          expect(state?.seq).toBe(0)
        })
      })
    })
  })
})
