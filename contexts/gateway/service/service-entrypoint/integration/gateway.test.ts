import type { AuthKeyClient }             from '@chats-system/authkey-client-module'
import type { INestApplication }          from '@nestjs/common'

import { IoAdapter }                      from '@nestjs/platform-socket.io'
import { Test }                           from '@nestjs/testing'
import { afterEach }                      from '@jest/globals'
import { describe }                       from '@jest/globals'
import { afterAll }                       from '@jest/globals'
import { beforeAll }                      from '@jest/globals'
import { expect }                         from '@jest/globals'
import { it }                             from '@jest/globals'
import { jest }                           from '@jest/globals'
import getPort                            from 'get-port'

import * as Transport                     from '@chats-system/transport'
import { AUTH_KEY_CLIENT_TOKEN }          from '@chats-system/authkey-client-module'
import { CreateAuthKeyResponse }          from '@chats-system/authkey-client-module'
import { GetAuthKeyResponse }             from '@chats-system/authkey-client-module'
import { ChatsSystemClient }              from '@chats-system/client'

import { GatewayServiceEntrypointModule } from '../src/gateway-service-entrypoint.module.js'

describe('gateway', () => {
  let app: INestApplication
  let client: ChatsSystemClient
  let authKeysClient: AuthKeyClient

  beforeAll(async () => {
    const port = await getPort()

    const testingModule = await Test.createTestingModule({
      imports: [GatewayServiceEntrypointModule],
    }).compile()

    app = testingModule.createNestApplication()

    app.useWebSocketAdapter(new IoAdapter(app))

    await app.listen(port)

    authKeysClient = testingModule.get(AUTH_KEY_CLIENT_TOKEN)
    client = new ChatsSystemClient(`ws://localhost:${port}`)
  })

  afterAll(async () => {
    await app.close()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('check connect', async () => {
    jest
      .spyOn(authKeysClient, 'getAuthKey')
      .mockImplementation(async () => Promise.resolve(new GetAuthKeyResponse({})))
    jest.spyOn(authKeysClient, 'createAuthKey').mockImplementation(async (authKey) =>
      Promise.resolve(
        new CreateAuthKeyResponse({
          authKey,
        })
      ))

    await client.connect()

    expect(client.isConnected()).toBe(true)
  })

  it('check ping', async () => {
    const result = new Promise((resolve) => {
      client.on(Transport.Pong, (message: Transport.Pong) => {
        resolve(message)
      })
    })

    await client.send(
      new Transport.Ping({
        pingId: 0n,
      })
    )

    await expect(result).resolves.toEqual(
      expect.objectContaining({
        pingId: 0n,
      })
    )
  })
})
