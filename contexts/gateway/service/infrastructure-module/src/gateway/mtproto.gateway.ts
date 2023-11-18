import type { ReqPqMulti }                 from '@chats-system/operations'
import type { ReqDHParams }                from '@chats-system/operations'
import type { SetClientDHParams }          from '@chats-system/operations'
import type { MTProtoEncryptedRawMessage } from '@monstrs/mtproto-core'
import type { OnGatewayConnection }        from '@nestjs/websockets'
import type { WebSocket }                  from 'ws'

import { Logger }                          from '@monstrs/logger'
import { MTProtoObfuscadetCodec }          from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage }    from '@monstrs/mtproto-core'
import { MTProtoRawMessage }               from '@monstrs/mtproto-core'
import { MTProtoMessageId }                from '@monstrs/mtproto-core'
import { MTProtoState }                    from '@monstrs/mtproto-core'
import { BinaryReader }                    from '@monstrs/mtproto-extensions'
import { WebSocketGateway }                from '@nestjs/websockets'
import { v4 as uuid }                      from 'uuid'

import { HandshakeReceiver }               from '@chats-system/handshake'
import { SchemaRegistry }                  from '@chats-system/operations'
import { client }                          from '@chats-system/session-rpc-client'

import { SessionAuthManager }              from '../session/index.js'
import { SessionAuthKeyManager }           from '../session/index.js'

type MTProtoConnection = WebSocket & {
  id: string
  state: MTProtoState
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MTProtoGateway implements OnGatewayConnection {
  #logger = new Logger(MTProtoGateway.name)

  constructor(private readonly sessionAuthManager: SessionAuthManager) {}

  handleConnection(connection: MTProtoConnection): void {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    connection.on('message', async (data: Buffer): Promise<void> => {
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
          await this.onEncryptedMessage(connection, rawMessage)
        }
      }
    })
  }

  async onUnencryptedMessage(
    connection: MTProtoConnection,
    rawMessage: MTProtoRawMessage
  ): Promise<void> {
    const request: ReqDHParams | ReqPqMulti | SetClientDHParams = new BinaryReader<any>(
      rawMessage.getMessage().getMessageData(),
      SchemaRegistry
    ).readObject() as ReqDHParams | ReqPqMulti | SetClientDHParams

    try {
      const result = await new HandshakeReceiver().handle(request, connection.state)

      const bytes = result.getBytes()

      connection.send(
        await connection.state.codec.send(
          new MTProtoRawMessage(
            BigInt(0),
            new MTProtoUnencryptedRawMessage(MTProtoMessageId.generate(), bytes.length, bytes)
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
    rawMessage: MTProtoRawMessage
  ): Promise<void> {
    const message = rawMessage.getMessage() as MTProtoEncryptedRawMessage
    const body = message.getMessageData()
    const sessionId = body.readBigInt64BE(8)
    const isNew = connection.state.sessionId !== sessionId

    if (isNew) {
      if (this.sessionAuthManager.addNewSession(message.getAuthKey(), sessionId, connection.id)) {
        await client.createSession({
          client: {
            authKeyId: message.getAuthKey().id,
            sessionId,
          },
        })
      }
    }
  }
}
