import { createCipheriv }         from 'node:crypto'

import { WebSocketGateway }       from '@nestjs/websockets'
import { WebSocketServer }        from '@nestjs/websockets'
import { OnGatewayConnection }    from '@nestjs/websockets'
import { WebSocket }              from 'ws'

import { MTProtoObfuscatedCodec } from '../codec/index.js'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MTProtoGateway implements OnGatewayConnection<WebSocket> {
  @WebSocketServer()
  server: WebSocket

  handleConnection(connection: WebSocket & { codec: MTProtoObfuscatedCodec }) {
    connection.on('message', async (message: Buffer) => {
      if (connection.codec) {
        await connection.codec.decode(message)
      } else {
        if (message.length !== 64) {
          throw new Error('Invalid obfuscated init header')
        }

        const decryptKey = message.subarray(8, 40)
        const decryptIv = message.subarray(40, 56)

        const reservedHeader = Buffer.from(message.subarray(8, 56)).reverse()

        const encryptKey = reservedHeader.subarray(0, 32)
        const encryptIv = reservedHeader.subarray(32, 48)

        const decrypt = createCipheriv('AES-256-CTR', decryptKey, decryptIv)
        const encrypt = createCipheriv('AES-256-CTR', encryptKey, encryptIv)

        connection.codec = new MTProtoObfuscatedCodec(
          decrypt,
          encrypt,
          decrypt.update(message).readUInt32BE(56)
        )
      }
    })
  }
}
