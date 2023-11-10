import { createCipheriv } from 'node:crypto'

import {
    WebSocketGateway,
    OnGatewayConnection,
  } from '@nestjs/websockets';
  //import { WebSocket } from 'ws';
  
import { MTProtoObfuscadetCodec } from './codecs/index.js';

  @WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class EventsGateway implements OnGatewayConnection {
    handleConnection(connection: any, ...args: any[]) {
      connection.on('message',(message: any) => {
        if (!connection.codec) {
          connection.codec = new MTProtoObfuscadetCodec(message)
        } else {
          connection.codec.receive(message)
        }
        /*
            if (!connection.codec) {
              const decryptor = createCipheriv('AES-256-CTR', message.subarray(8, 40), message.subarray(40,56))

              const header = decryptor.update(message)

              const protocolType = header.subarray(56, header.length).readUint32BE()

              if (protocolType !== 0xefefefef) {
                throw new Error('Invalid protocol')
              }

              connection.codec = {
                decryptor
              }
            } else {
              const obfuscated = connection.codec.decryptor.update(message)

              let length = obfuscated[0]

              if (length >= 127) {
                length = Buffer.concat([obfuscated.subarray(0, 3), Buffer.alloc(1)])
                            .readInt32LE(0);
            
              }

              const data = obfuscated.subarray(0, length << 2)

              const authKeyId = data.readBigUint64LE(1)
              const msgId = data.readBigUint64LE(9)
              const msgLength = data.readUInt32LE(17)
              const constructorId = data.readInt32LE(21)
              console.log(authKeyId, msgId, msgLength, constructorId)

            }
            */
      })
    }
  }