import type { MTProtoCodec }               from '@monstrs/mtproto-core'
import type { MTProtoEncryptedRawMessage } from '@monstrs/mtproto-core'
import type { OnGatewayConnection }        from '@nestjs/websockets'
import type { OnGatewayDisconnect }        from '@nestjs/websockets'
import type { WebSocket }                  from 'ws'

import { Logger }                          from '@monstrs/logger'
import { MTProtoObfuscatedCodec }          from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage }    from '@monstrs/mtproto-core'
import { MTProtoRawMessage }               from '@monstrs/mtproto-core'
import { MTProtoAuthKey }                  from '@monstrs/mtproto-core'
import { MTProtoMessageId }                from '@monstrs/mtproto-core'
import { WebSocketGateway }                from '@nestjs/websockets'
import { v4 as uuid }                      from 'uuid'

import { Handshake }                       from '@chats-system/handshake'
import { SessionClient }                   from '@chats-system/session-client-module'
import { TLObject }                        from '@chats-system/tl'
import { BytesIO }                         from '@chats-system/tl'
import TL                                  from '@chats-system/tl'

import { ConnectionRegistry }              from '../connection/index.js'
import { SessionAuthManager }              from '../session/index.js'
import { SessionAuthKeyManager }           from '../session/index.js'

type MTProtoConnection = WebSocket & {
  id: string
  codec: MTProtoCodec
  handshake: Handshake
  authKeyManager: SessionAuthKeyManager
  sessionId: bigint
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  clientTracking: false,
})
export class MTProtoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  #logger = new Logger(MTProtoGateway.name)

  constructor(
    private readonly sessionAuthKeyManager: SessionAuthKeyManager,
    private readonly sessionAuthManager: SessionAuthManager,
    private readonly connectionRegistry: ConnectionRegistry,
    private readonly sessionClient: SessionClient
  ) {}

  handleConnection(
    connection: MTProtoConnection,
    request: { socket: { remoteAddress: string } }
  ): void {
    if (!connection.id) {
      // eslint-disable-next-line no-param-reassign
      connection.id = uuid()
      // eslint-disable-next-line no-param-reassign
      connection.authKeyManager = this.sessionAuthKeyManager
    }

    if (!connection.handshake) {
      // eslint-disable-next-line no-param-reassign
      connection.handshake = new Handshake()
    }

    this.connectionRegistry.addConnection(connection.id, connection)

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    connection.on('message', async (data: Buffer): Promise<void> => {
      if (!connection.codec) {
        // eslint-disable-next-line no-param-reassign
        connection.codec = new MTProtoObfuscatedCodec(data)
      } else {
        try {
          const messageData = await connection.codec.receive(data)

          const rawMessage = await MTProtoRawMessage.decode(messageData, {
            authKeyManager: connection.authKeyManager,
          })

          if (rawMessage.getMessage() instanceof MTProtoUnencryptedRawMessage) {
            await this.onUnencryptedMessage(connection, rawMessage)
          } else {
            await this.onEncryptedMessage(connection, rawMessage, request.socket.remoteAddress)
          }
        } catch (error) {
          if (error instanceof Error) {
            this.#logger.error(error)
          }
        }
      }
    })
  }

  handleDisconnect(connection: MTProtoConnection): void {
    this.connectionRegistry.removeConnection(connection.id)
  }

  async onUnencryptedMessage(
    connection: MTProtoConnection,
    rawMessage: MTProtoRawMessage
  ): Promise<void> {
    const request: TL.ReqDhParams | TL.ReqPqMulti | TL.SetClientDhParams = await TLObject.read(
      new BytesIO(rawMessage.getMessage().getMessageData())
    )

    if (request instanceof TL.ReqPqMulti) {
      const { resPQ } = await connection.handshake.handleReqPQMulti(request)

      const bytes = resPQ.write()

      connection.send(
        await connection.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              bytes.length,
              bytes
            )
          ).encode()
        )
      )
    }

    if (request instanceof TL.ReqDhParams) {
      const { serverDHParamsOk } = await connection.handshake.handleReqDHParams(request)

      const bytes = serverDHParamsOk.write()

      connection.send(
        await connection.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              bytes.length,
              bytes
            )
          ).encode()
        )
      )
    }

    if (request instanceof TL.SetClientDhParams) {
      const { dhGenOk, authKey } = await connection.handshake.handleSetClientDHParams(request)

      await connection.authKeyManager.setAuthKey(authKey.authKeyId, authKey)

      const bytes = dhGenOk.write()

      connection.send(
        await connection.codec.send(
          await new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              bytes.length,
              bytes
            )
          ).encode()
        )
      )
    }
  }

  async onEncryptedMessage(
    connection: MTProtoConnection,
    rawMessage: MTProtoRawMessage,
    clientIp: string
  ): Promise<void> {
    const message = rawMessage.getMessage() as MTProtoEncryptedRawMessage
    const body = message.getMessageData()
    const sessionId = body.readBigInt64BE(8)
    const isNew = connection.sessionId !== sessionId

    if (isNew) {
      // eslint-disable-next-line no-param-reassign
      connection.sessionId = sessionId

      if (this.sessionAuthManager.addNewSession(message.getAuthKey(), sessionId, connection.id)) {
        await this.sessionClient.createSession({
          client: {
            serverId: '127.0.0.1',
            authKeyId: message.getAuthKey().authKeyId,
            sessionId,
            clientIp,
          },
        })
      }
    }

    await this.sessionClient.sendDataToSession({
      data: {
        serverId: '127.0.0.1',
        authKeyId: message.getAuthKey().authKeyId,
        sessionId,
        salt: message.getMessageData().readBigUint64LE(0),
        payload: message.getMessageData().subarray(16, message.getMessageData().length),
        clientIp,
      },
    })
  }
}
