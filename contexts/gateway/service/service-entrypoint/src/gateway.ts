import { MTProtoObfuscadetCodec }           from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage }     from '@monstrs/mtproto-core'
import { MTProtoRawMessage }                from '@monstrs/mtproto-core'
import { MTProtoAuthKeyManager }            from '@monstrs/mtproto-core'
import { MTProtoMessageId, MTProtoState } from '@monstrs/mtproto-core'
import { BinaryReader }                     from '@monstrs/mtproto-extensions'
import { TLObject }                         from '@monstrs/mtproto-tl-core'
import { WebSocketGateway }                 from '@nestjs/websockets'
import { OnGatewayConnection }              from '@nestjs/websockets'
import { WebSocket }                        from 'ws'

import { SchemaRegistry }                   from '@chats-system/operations'

import { HandshakeReceiver } from '@chats-system/handshake'

type MTProtoConnection = WebSocket & {
  state: MTProtoState
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection {
  handleConnection(connection: MTProtoConnection) {
    connection.on('message', async (data: Buffer) => {
      if (!connection.state) {
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
          ).readObject()

          this.onUnencryptedMessage(connection, request as TLObject<any>)
        } else {
          // eslint-disable-next-line
          console.log(message)
        }
      }
    })
  }

  async onUnencryptedMessage(connection: MTProtoConnection, message: TLObject<any>) {
    try {
      const result = await new HandshakeReceiver().handle(message as any, connection.state)

      const bytes = result.getBytes()

    connection.send(
      await connection.state.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(
            MTProtoMessageId.generate(),
            bytes.length,
            bytes
          )
        )
      )
    )
    } catch (error) {
      // eslint-disable-next-line
      console.log(error)

      connection.close()
    }
  }
}
