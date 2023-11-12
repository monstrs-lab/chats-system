import {
    WebSocketGateway,
    OnGatewayConnection,
  } from '@nestjs/websockets';
import { WebSocket } from 'ws';

//import { MTProtoUnencryptedRawMessage } from '@chats-system/tl-types'

import { classmap} from '@chats-system/tl-to-typescript'

import { MTProtoObfuscadetCodec } from './codecs/index.js';

  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class EventsGateway implements OnGatewayConnection {
    handleConnection(connection: WebSocket & { codec: MTProtoObfuscadetCodec }) {
      connection.on('message',(message: Buffer) => {
        if (!connection.codec) {
          connection.codec = new MTProtoObfuscadetCodec(message)
        } else {
          const rawMessage = connection.codec.receive(message).decode()
          
          const request = rawMessage.read(classmap)
          console.log(request, 'asdfads')
        }
      })
    }
  }