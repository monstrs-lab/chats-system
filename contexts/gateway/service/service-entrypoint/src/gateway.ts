import { randomBytes }                  from 'node:crypto'

import { WebSocketGateway }             from '@nestjs/websockets'
import { OnGatewayConnection }          from '@nestjs/websockets'
import { fromBufferToBigInt }           from '@monstrs/buffer-utils'
import { WebSocket }                    from 'ws'
import bigInt            from 'big-integer'

import { SchemaRegistry }               from '@chats-system/tl-to-typescript'
import { ReqPqMulti }                   from '@chats-system/tl-to-typescript'
import { ReqDHParams }                  from '@chats-system/tl-to-typescript'
import { ResPQ, ServerDHInnerData, PQInnerData, ServerDHParamsOk }                        from '@chats-system/tl-to-typescript'
import { BinaryReader }                 from '@chats-system/tl-types'
import { MTProtoUnencryptedRawMessage } from '@chats-system/tl-types'
import { MTProtoRawMessage }            from '@chats-system/tl-types'
import { TLObject }                     from '@chats-system/tl-types'

import { MTProtoObfuscadetCodec }       from './codecs/index.js'
import { readBigIntFromBuffer, generateKeyDataFromNonce } from './dhparams.js'
import { modExp } from './dhparams.js'
import { readBufferFromBigInt } from './dhparams.js'
import { sha256 } from './dhparams.js'
import { bufferXor } from './dhparams.js'
import { IGE } from './dhparams.js'
import { key, dh2048P, dh2048G }                          from './key.js'

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

        if (rawMessage.getAuthKeyId() === BigInt(0)) {
          this.onUnencryptedMessage(
            connection,
            request as TLObject,
            rawMessage.getMessage().getMessageId()
          )
        }
      }
    })
  }

  async onUnencryptedMessage(
    connection: WebSocket & { codec: MTProtoObfuscadetCodec },
    message: TLObject,
    messageId: bigint
  ) {
    if (message instanceof ReqPqMulti) {
      await this.onReqPqMulti(connection, message, messageId)
    } else if (message instanceof ReqDHParams) {
      await this.onReqDHParams(connection, message, messageId)
    } else {
      console.log(message)
    }
  }

  async onReqPqMulti(
    connection: WebSocket & { codec: MTProtoObfuscadetCodec },
    message: ReqPqMulti,
    messageId: bigint
  ) {
    if (!message.nonce) {
      throw new Error('Invalid nonce')
    }

    const pq = Buffer.from([0x17, 0xed, 0x48, 0x94, 0x1a, 0x08, 0xf9, 0x81])

    const resPQ = new ResPQ(
      message.nonce,
      fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true),
      pq,
      [BigInt('-6205835210776354611')]
    )

    const messageData = resPQ.getBytes()

    connection.send(
      connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(messageId + BigInt(10), messageData.length, messageData)
        )
      )
    )
  }

  async onReqDHParams(
    // @ts-expect-error
    connection: WebSocket & { codec: MTProtoObfuscadetCodec },
    message: ReqDHParams,
    // @ts-expect-error
    messageId: bigint
  ) {
    const encryptedDataBuffer = readBigIntFromBuffer(message.encrypted_data, false)
    const keyAesEncryptedInt = modExp(encryptedDataBuffer, key.d, key.n)
    const keyAesEncrypted = readBufferFromBigInt(keyAesEncryptedInt, 256, false)
    const tempKeyXor = keyAesEncrypted.subarray(0, 32) // key
    const aesEncrypted = keyAesEncrypted.subarray(32, keyAesEncrypted.length)
    const aesEncryptedHash = sha256(aesEncrypted) // hash
    const tempKey = bufferXor(tempKeyXor, aesEncryptedHash)

    const ige = new IGE(tempKey, Buffer.alloc(32))

    const dataWithHash = ige.decryptIge(aesEncrypted)

    const dataPadReversed = dataWithHash.subarray(0, dataWithHash.length - 32)
    //const shaDigestKeyWithData = dataWithHash.subarray(dataWithHash.length - 32, dataWithHash.length)
    const dataWithPadding = Buffer.from(dataPadReversed).reverse()

    const request: PQInnerData = new BinaryReader(dataWithPadding, SchemaRegistry).readObject() as PQInnerData

    const a = readBigIntFromBuffer(Buffer.from(randomBytes(16)), false, true);
    const gA = modExp(readBigIntFromBuffer(dh2048G), a, readBigIntFromBuffer(dh2048P))

    const serverDHInnerData = new ServerDHInnerData(
      message.nonce,
      message.server_nonce,
      dh2048G[0],
      dh2048P,
      readBufferFromBigInt(gA, 256, false),
      Math.floor(new Date().getTime() / 1000)
    )

    const bytes = serverDHInnerData.getBytes()

    const { key: igekey, iv } = await generateKeyDataFromNonce(
      message.server_nonce,
      bigInt(request.new_nonce),
    )

    const igeEncode = new IGE(igekey, iv);

    const pok = new ServerDHParamsOk(
      message.nonce,
      message.server_nonce,
      igeEncode.encryptIge(Buffer.concat([Buffer.alloc(20), bytes]))
    )

    const messageData = pok.getBytes()

    connection.send(
      connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(messageId + BigInt(20), messageData.length, messageData)
        )
      )
    )
  }
}
