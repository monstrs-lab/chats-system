import type { MTProtoEncryptedRawMessage }  from '@monstrs/mtproto-core'
import type { OnGatewayConnection }         from '@nestjs/websockets'
import type { OnGatewayInit }               from '@nestjs/websockets'
import type { WebSocket }                   from 'ws'
import type { WebSocketServer as WSServer } from 'ws'
import type TL                              from '@chats-system/tl'

import { Logger }                           from '@monstrs/logger'
import { MTProtoObfuscadetCodec }           from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage }     from '@monstrs/mtproto-core'
import { MTProtoRawMessage }                from '@monstrs/mtproto-core'
import { MTProtoAuthKey }                   from '@monstrs/mtproto-core'
import { MTProtoMessageId }                 from '@monstrs/mtproto-core'
import { MTProtoState }                     from '@monstrs/mtproto-core'
import { WebSocketGateway }                 from '@nestjs/websockets'
import { v4 as uuid }                       from 'uuid'

import { HandshakeReceiver }                from '@chats-system/handshake'
import { TLObject }                         from '@chats-system/tl'
import { BytesIO }                          from '@chats-system/tl'
import { client }                           from '@chats-system/session-rpc-client'

import { SessionAuthManager }               from '../session/index.js'
import { SessionAuthKeyManager }            from '../session/index.js'
import { MTProtoGatewayClientSender }       from './mtproto-gateway-client.sender.js'

type MTProtoConnection = WebSocket & {
  id: string
  state: MTProtoState
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MTProtoGateway implements OnGatewayConnection, OnGatewayInit {
  #logger = new Logger(MTProtoGateway.name)

  constructor(
    private readonly sessionAuthManager: SessionAuthManager,
    private readonly clientSender: MTProtoGatewayClientSender
  ) {}

  afterInit(server: WSServer): void {
    this.clientSender.setServer(server)
  }

  handleConnection(
    connection: MTProtoConnection,
    request: { socket: { remoteAddress: string } }
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    connection.on('message', async (data: Buffer): Promise<void> => {
      try {
        if (!connection.id) {
          // eslint-disable-next-line no-param-reassign
          connection.id = uuid()
        }

        if (!connection.state) {
          // eslint-disable-next-line no-param-reassign
          connection.state = new MTProtoState(
            new MTProtoObfuscadetCodec(data),
            new SessionAuthKeyManager()
          )
        } else {
          const rawMessage = await connection.state.codec.receive(data, connection.state)

          if (rawMessage.getMessage() instanceof MTProtoUnencryptedRawMessage) {
            await this.onUnencryptedMessage(connection, rawMessage)
          } else {
            await this.onEncryptedMessage(connection, rawMessage, request.socket.remoteAddress)
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }
      }
    })
  }

  async onUnencryptedMessage(
    connection: MTProtoConnection,
    rawMessage: MTProtoRawMessage
  ): Promise<void> {
    const request: TL.ReqDhParams | TL.ReqPqMulti | TL.SetClientDhParams = await TLObject.read(
      new BytesIO(rawMessage.getMessage().getMessageData())
    )
    /*
    const request: ReqDHParams | ReqPqMulti | SetClientDHParams = new BinaryReader<any>(
      rawMessage.getMessage().getMessageData(),
      SchemaRegistry
    ).readObject() as ReqDHParams | ReqPqMulti | SetClientDHParams
    */

    try {
      const result = await new HandshakeReceiver().handle(request, connection.state)

      const bytes = result.write()

      connection.send(
        await connection.state.codec.send(
          new MTProtoRawMessage(
            new MTProtoUnencryptedRawMessage(
              new MTProtoAuthKey(),
              MTProtoMessageId.generate(),
              bytes.length,
              bytes
            )
          )
        )
      )
    } catch (error) {
      if (error instanceof Error) {
        this.#logger.error(error)
      }

      connection.close()
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
    const isNew = connection.state.sessionId !== sessionId

    if (isNew) {
      if (this.sessionAuthManager.addNewSession(message.getAuthKey(), sessionId, connection.id)) {
        await client.createSession({
          client: {
            serverId: '127.0.0.1',
            authKeyId: message.getAuthKey().id,
            sessionId,
            clientIp,
          },
        })
      }
    }

    await client.sendDataToSession({
      data: {
        serverId: '127.0.0.1',
        authKeyId: message.getAuthKey().id,
        sessionId,
        salt: message.getMessageData().readBigUint64LE(0),
        payload: message.getMessageData().subarray(16, message.getMessageData().length),
        clientIp,
      },
    })
  }
}
