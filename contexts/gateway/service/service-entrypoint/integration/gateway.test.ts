import type { INestApplication }          from '@nestjs/common'

import { IoAdapter }                      from '@nestjs/platform-socket.io'
import { Test }                           from '@nestjs/testing'
import { faker }                          from '@faker-js/faker'
import { afterEach }                      from '@jest/globals'
import { describe }                       from '@jest/globals'
import { afterAll }                       from '@jest/globals'
import { beforeAll }                      from '@jest/globals'
import { expect }                         from '@jest/globals'
import { it }                             from '@jest/globals'
import { jest }                           from '@jest/globals'
import getPort                            from 'get-port'

import * as Transport                     from '@chats-system/transport'
import { AuthKeyClient }                  from '@chats-system/authkey-client-module'
import { CreateAuthKeyResponse }          from '@chats-system/authkey-client-module'
import { GetAuthKeyResponse }             from '@chats-system/authkey-client-module'
import { ChatsSystemClient }              from '@chats-system/client'
import { MessagesClient }                 from '@chats-system/messages-client-module'
import { SendMessageResponse }            from '@chats-system/messages-client-module'
import { UsersClient }                    from '@chats-system/users-client-module'
import { User }                           from '@chats-system/users-client-module'

import { GatewayServiceEntrypointModule } from '../src/gateway-service-entrypoint.module.js'

describe('gateway', () => {
  let app: INestApplication
  let client: ChatsSystemClient
  let usersClient: UsersClient
  let authKeysClient: AuthKeyClient
  let messagesClient: MessagesClient

  beforeAll(async () => {
    const port = await getPort()

    const testingModule = await Test.createTestingModule({
      imports: [GatewayServiceEntrypointModule],
    }).compile()

    app = testingModule.createNestApplication()

    app.useWebSocketAdapter(new IoAdapter(app))

    await app.listen(port)

    messagesClient = testingModule.get(MessagesClient)
    authKeysClient = testingModule.get(AuthKeyClient)
    usersClient = testingModule.get(UsersClient)
    client = new ChatsSystemClient(`ws://localhost:${port}`, {
      io: {
        extraHeaders: {
          'X-USER': faker.string.uuid(),
        },
      },
    })
  })

  afterAll(async () => {
    await app.close()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('check connect', async () => {
    jest.spyOn(usersClient, 'loadUserByExternalId').mockImplementation(async (externalId: string) =>
      Promise.resolve(
        new User({
          id: faker.number.bigInt(),
          externalId,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
        })
      ))
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

  it('check send message', async () => {
    const sendMessage = jest.spyOn(messagesClient, 'sendMessage')

    sendMessage.mockImplementation(async () => Promise.resolve(new SendMessageResponse({})))

    const userId = faker.number.bigInt()
    const randomId = faker.number.bigInt()
    const message = faker.word.sample()

    const result = new Promise((resolve) => {
      client.on(Transport.SentMessage, (m: Transport.SentMessage) => {
        resolve(m)
      })
    })

    await client.send(
      new Transport.SendMessage({
        peer: new Transport.InputPeerUser({
          userId,
        }),
        randomId,
        message,
      })
    )

    await expect(result).resolves.toBeDefined()

    expect(sendMessage).toBeCalledTimes(1)
    expect(sendMessage).toBeCalledWith(
      expect.objectContaining({
        peerId: userId,
        randomId,
        message,
      })
    )
  })
})
