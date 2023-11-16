import type { ReqPqMulti }              from '@chats-system/operations'
import type { ReqDHParams }             from '@chats-system/operations'
import type { SetClientDHParams }       from '@chats-system/operations'
import type { OnGatewayConnection }     from '@nestjs/websockets'
import type { WebSocket }               from 'ws'

import { Logger }                       from '@monstrs/logger'
import { MTProtoObfuscadetCodec }       from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoRawMessage }            from '@monstrs/mtproto-core'
import { MTProtoAuthKeyManager }        from '@monstrs/mtproto-core'
import { MTProtoMessageId }             from '@monstrs/mtproto-core'
import { MTProtoState }                 from '@monstrs/mtproto-core'
import { BinaryReader }                 from '@monstrs/mtproto-extensions'
import { WebSocketGateway }             from '@nestjs/websockets'

import { HandshakeReceiver }            from '@chats-system/handshake'
import { SchemaRegistry }               from '@chats-system/operations'

type MTProtoConnection = WebSocket & {
  state: MTProtoState
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MTProtoGateway implements OnGatewayConnection {
  #logger = new Logger(MTProtoGateway.name)

  handleConnection(connection: MTProtoConnection): void {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    connection.on('message', async (data: Buffer): Promise<void> => {
      if (!connection.state) {
        // eslint-disable-next-line no-param-reassign
        connection.state = new MTProtoState(
          new MTProtoObfuscadetCodec(data),
          new MTProtoAuthKeyManager()
        )
      } else {
        const rawMessage = await connection.state.codec.receive(data, connection.state)
        const message = rawMessage.getMessage()

        if (message instanceof MTProtoUnencryptedRawMessage) {
          const request = new BinaryReader<any>(
            rawMessage.getMessage().getMessageData(),
            SchemaRegistry
          ).readObject() as ReqDHParams | ReqPqMulti | SetClientDHParams

          this.onUnencryptedMessage(connection, request)
        } else {
          // eslint-disable-next-line
          console.log(message)
        }
      }
    })
  }

  async onUnencryptedMessage(
    connection: MTProtoConnection,
    message: ReqDHParams | ReqPqMulti | SetClientDHParams
  ): Promise<void> {
    try {
      const result = await new HandshakeReceiver().handle(message, connection.state)

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
}
