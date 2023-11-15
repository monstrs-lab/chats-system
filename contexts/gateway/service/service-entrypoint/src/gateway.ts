import { randomBytes }                  from 'node:crypto'
import { createHash }                   from 'node:crypto'

import { MTProtoObfuscadetCodec }       from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoRawMessage }            from '@monstrs/mtproto-core'
import { MTProtoAuthKey }               from '@monstrs/mtproto-core'
import { MTProtoAuthKeyManager, MTProtoKeyPair }        from '@monstrs/mtproto-core'
import { BinaryReader }                 from '@monstrs/mtproto-extensions'
import { TLObject }                     from '@monstrs/mtproto-tl-core'
import { WebSocketGateway }             from '@nestjs/websockets'
import { OnGatewayConnection }          from '@nestjs/websockets'
import { fromBigIntToByteArrayBuffer }  from '@monstrs/buffer-utils'
import { fromBufferToBigInt }           from '@monstrs/buffer-utils'
import { bufferXor }                    from '@monstrs/buffer-utils'
import { fromBigIntToBuffer }           from '@monstrs/buffer-utils'
import { modExp }                       from '@monstrs/crypto-utils'
import { WebSocket }                    from 'ws'

import { IGE }                          from '@monstrs/mtproto-crypto'
import { SchemaRegistry }               from '@chats-system/tl-to-typescript'
import { ReqPqMulti }                   from '@chats-system/tl-to-typescript'
import { ReqDHParams }                  from '@chats-system/tl-to-typescript'
import { ResPQ }                        from '@chats-system/tl-to-typescript'
import { ServerDHInnerData }            from '@chats-system/tl-to-typescript'
import { PQInnerData }                  from '@chats-system/tl-to-typescript'
import { ServerDHParamsOk }             from '@chats-system/tl-to-typescript'
import { SetClientDHParams }            from '@chats-system/tl-to-typescript'
import { ClientDHInnerData }            from '@chats-system/tl-to-typescript'
import { DhGenOk }                      from '@chats-system/tl-to-typescript'
import { calculateNonceHash }           from '@chats-system/crypto'

import { key }                          from './key.js'
import { dh2048P }                      from './key.js'
import { dh2048G }                      from './key.js'

type MTProtoConnection = WebSocket & {
  codec: MTProtoObfuscadetCodec
  authKeyManager: MTProtoAuthKeyManager
  newNonce: any
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection {
  handleConnection(connection: MTProtoConnection) {
    connection.on('message', async (data: Buffer) => {
      if (!connection.codec) {
        connection.codec = new MTProtoObfuscadetCodec(data)
        connection.authKeyManager = new MTProtoAuthKeyManager()
      } else {
        const rawMessage = await connection.codec.receive(data, connection)
        const message = rawMessage.getMessage()

        if (message instanceof MTProtoUnencryptedRawMessage) {
          const request = new BinaryReader(
            rawMessage.getMessage().getMessageData(),
            SchemaRegistry
          ).readObject()

          this.onUnencryptedMessage(
            connection,
            request as TLObject,
            message.getMessageId()
          )
        } else {
          const body = message.getMessageData()
          const binaryReader = new BinaryReader(body, SchemaRegistry)

          //console.log(body)
          binaryReader.readLong()
          const serverId = binaryReader.readLong()
          //console.log(serverId)
          const remoteMsgId = binaryReader.readLong()
          //console.log(remoteMsgId)

          const remoteSequence = binaryReader.readInt()
          const containerLen = binaryReader.readInt()

          //console.log(remoteSequence, containerLen)

          const messageId = binaryReader.readInt()
          console.log(messageId, 'asdklfajsdl')
        }
      }
    })
  }

  async onUnencryptedMessage(connection: MTProtoConnection, message: TLObject, messageId: bigint) {
    if (message instanceof ReqPqMulti) {
      await this.onReqPqMulti(connection, message, messageId)
    } else if (message instanceof ReqDHParams) {
      await this.onReqDHParams(connection, message, messageId)
    } else if (message instanceof SetClientDHParams) {
      await this.onSetClientDHParams(connection, message, messageId)
    } else {
      console.log(message)
    }
  }

  async onReqPqMulti(connection: MTProtoConnection, message: ReqPqMulti, messageId: bigint) {
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
      await connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(messageId + BigInt(10), messageData.length, messageData)
        )
      )
    )
  }

  async onReqDHParams(connection: MTProtoConnection, message: ReqDHParams, messageId: bigint) {
    const encryptedDataBuffer = fromBufferToBigInt(message.encryptedData, false)
    const keyAesEncryptedInt = modExp(encryptedDataBuffer, key.d, key.n)
    const keyAesEncrypted = fromBigIntToBuffer(keyAesEncryptedInt, 256, false)
    const tempKeyXor = keyAesEncrypted.subarray(0, 32) // key
    const aesEncrypted = keyAesEncrypted.subarray(32, keyAesEncrypted.length)
    const aesEncryptedHash = createHash('sha256').update(aesEncrypted).digest()
    const tempKey = bufferXor(tempKeyXor, aesEncryptedHash)

    const ige = new IGE(tempKey, Buffer.alloc(32))

    const dataWithHash = ige.decrypt(aesEncrypted)

    const dataPadReversed = dataWithHash.subarray(0, dataWithHash.length - 32)
    const dataWithPadding = Buffer.from(dataPadReversed).reverse()

    const request = new BinaryReader(dataWithPadding, SchemaRegistry).readObject<PQInnerData>() as PQInnerData

    const a = fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true)
    const gA = modExp(fromBufferToBigInt(dh2048G), a, fromBufferToBigInt(dh2048P))

    const serverDHInnerData = new ServerDHInnerData(
      message.nonce,
      message.serverNonce,
      dh2048G[0],
      dh2048P,
      fromBigIntToBuffer(gA, 256, false),
      Math.floor(new Date().getTime() / 1000)
    )

    const bytes = serverDHInnerData.getBytes()

    const { key: igekey, iv } = MTProtoKeyPair.generateKeyDataFromNonce(
      message.serverNonce,
      request.newNonce
    )

    const igeEncode = new IGE(igekey, iv)

    const pok = new ServerDHParamsOk(
      message.nonce,
      message.serverNonce,
      igeEncode.encrypt(Buffer.concat([createHash('sha1').update(bytes).digest(), bytes]))
    )

    const messageData = pok.getBytes()

    connection.send(
      await connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(messageId + BigInt(20), messageData.length, messageData)
        )
      )
    )

    connection.newNonce = request.newNonce
    ;(connection as any).a = a
  }

  async onSetClientDHParams(
    connection: MTProtoConnection,
    message: SetClientDHParams,
    messageId: bigint
  ) {
    const { key: igekey, iv } = MTProtoKeyPair.generateKeyDataFromNonce(
      message.serverNonce,
      connection.newNonce
    )

    const igeEncode = new IGE(igekey, iv)
    const clientDhEncrypted = igeEncode.decrypt(message.encryptedData)
    const clientDh = clientDhEncrypted.subarray(20, clientDhEncrypted.length)

    const innerData = new BinaryReader(clientDh, SchemaRegistry).readObject() as ClientDHInnerData
    console.log(innerData)

    const a = fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true)
    const gA = modExp(fromBufferToBigInt(dh2048G), a, fromBufferToBigInt(dh2048P))

    const gab = modExp(
      fromBufferToBigInt(innerData.gB),
      (connection as any).a,
      fromBufferToBigInt(dh2048P)
    )

    const authKey = new MTProtoAuthKey(fromBigIntToByteArrayBuffer(gab))

    connection.authKeyManager.setAuthKey(authKey.id, authKey)

    const dhGenOk = new DhGenOk(
      message.nonce,
      message.serverNonce,
      calculateNonceHash(connection.newNonce, authKey.auxHash, 1)
    )

    const messageData = dhGenOk.getBytes()

    connection.send(
      await connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(messageId + BigInt(20), messageData.length, messageData)
        )
      )
    )
  }
}
