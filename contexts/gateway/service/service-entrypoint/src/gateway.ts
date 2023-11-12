import { WebSocketGateway } from '@nestjs/websockets'
import { OnGatewayConnection } from '@nestjs/websockets'
import { WebSocket }              from 'ws'

import { SchemaRegistry }         from '@chats-system/tl-to-typescript'
import { BinaryReader }           from '@chats-system/tl-types'

import { MTProtoObfuscadetCodec } from './codecs/index.js'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection {
  handleConnection(connection: WebSocket & { codec: MTProtoObfuscadetCodec }) {
    connection.on('message', (message: Buffer) => {
      if (!connection.codec) {
        connection.codec = new MTProtoObfuscadetCodec(message)
      } else {
        const rawMessage = connection.codec.receive(message)

        const request = new BinaryReader(
          rawMessage.getMessage().getMessageData(),
          SchemaRegistry
        ).readObject()
        console.log(request, 'asdfads')
      }
    })
  }
}
