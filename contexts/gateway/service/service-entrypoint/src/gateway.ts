import { randomBytes }                      from 'node:crypto'
import { createHash }                       from 'node:crypto'

import { MTProtoObfuscadetCodec }           from '@monstrs/mtproto-codecs'
import { MTProtoUnencryptedRawMessage }     from '@monstrs/mtproto-core'
import { MTProtoRawMessage }                from '@monstrs/mtproto-core'
import { MTProtoAuthKey }                   from '@monstrs/mtproto-core'
import { MTProtoAuthKeyManager }            from '@monstrs/mtproto-core'
import { MTProtoKeyPair }                   from '@monstrs/mtproto-core'
import { MTProtoMessageId } from '@monstrs/mtproto-core'
import { IGE }                              from '@monstrs/mtproto-crypto'
import { BinaryReader }                     from '@monstrs/mtproto-extensions'
import { TLObject }                         from '@monstrs/mtproto-tl-core'
import { WebSocketGateway }                 from '@nestjs/websockets'
import { OnGatewayConnection }              from '@nestjs/websockets'
import { fromBigIntToByteArrayBuffer }      from '@monstrs/buffer-utils'
import { fromBufferToBigInt }               from '@monstrs/buffer-utils'
import { bufferXor }                        from '@monstrs/buffer-utils'
import { fromBigIntToBuffer }               from '@monstrs/buffer-utils'
import { modExp }                           from '@monstrs/crypto-utils'
import { calculateNonceHash }               from '@monstrs/mtproto-crypto'
import { WebSocket }                        from 'ws'

import { SchemaRegistry }                   from '@chats-system/operations'
import { ReqPqMulti }                       from '@chats-system/operations'
import { ReqDHParams }                      from '@chats-system/operations'
import { ResPQ }                            from '@chats-system/operations'
import { ServerDHInnerData }                from '@chats-system/operations'
import { PQInnerData }                      from '@chats-system/operations'
import { ServerDHParamsOk }                 from '@chats-system/operations'
import { SetClientDHParams }                from '@chats-system/operations'
import { ClientDHInnerData }                from '@chats-system/operations'
import { DhGenOk }                          from '@chats-system/operations'

import { HandshakeReceiver, MTProtoState } from '@chats-system/handshake'

import { key }                              from './key.js'
import { dh2048P }                          from './key.js'
import { dh2048G }                          from './key.js'

type MTProtoConnection = WebSocket & {
  codec: MTProtoObfuscadetCodec
  authKeyManager: MTProtoAuthKeyManager
  newNonce: any,
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
      if (!connection.codec) {
        connection.codec = new MTProtoObfuscadetCodec(data)
        connection.authKeyManager = new MTProtoAuthKeyManager()
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
          const body = message.getMessageData()
          const binaryReader = new BinaryReader<any>(body, SchemaRegistry)

          //console.log(body)
          binaryReader.readLong()
          const sessionId = binaryReader.readLong()
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

  async onUnencryptedMessage(connection: MTProtoConnection, message: TLObject<any>) {
    let result: any

    if (message instanceof ReqPqMulti) {
      result = await new HandshakeReceiver().handleReqPqMulti(message, connection.state)
    } else if (message instanceof ReqDHParams) {
      result = await new HandshakeReceiver().handleReqDHParams(message, connection.state)
    } else if (message instanceof SetClientDHParams) {
      result = await new HandshakeReceiver().handleSetClientDHParams(message, connection.state)
    } else {
      console.log(message)
    }

    if (!result) {
      throw new Error('Invalid flow')
    }

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

    /*
    if (message instanceof ReqPqMulti) {
      await this.onReqPqMulti(connection, message)
    } else if (message instanceof ReqDHParams) {
      await this.onReqDHParams(connection, message)
    } else if (message instanceof SetClientDHParams) {
      await this.onSetClientDHParams(connection, message)
    } else {
      console.log(message)
    }
    */
  }

  async onReqPqMulti(connection: MTProtoConnection, message: ReqPqMulti) {
    if (!message.nonce) {
      throw new Error('Invalid nonce')
    }

    const pq = Buffer.from([0x17, 0xed, 0x48, 0x94, 0x1a, 0x08, 0xf9, 0x81])

    const resPQ = new ResPQ({
      nonce: message.nonce,
      serverNonce: fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true),
      pq,
      serverPublicKeyFingerprints: [BigInt('-6205835210776354611')],
    })

    const messageData = resPQ.getBytes()

    connection.send(
      await connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(
            MTProtoMessageId.generate(),
            messageData.length,
            messageData
          )
        )
      )
    )
  }

  async onReqDHParams(connection: MTProtoConnection, message: ReqDHParams) {
    const encryptedDataBuffer = fromBufferToBigInt(message.encryptedData, false)
    const keyAesEncryptedInt = modExp(encryptedDataBuffer, key.d, key.n)
    const keyAesEncrypted = fromBigIntToBuffer(keyAesEncryptedInt, 256, false)
    const tempKeyXor = keyAesEncrypted.subarray(0, 32)
    const aesEncrypted = keyAesEncrypted.subarray(32, keyAesEncrypted.length)
    const aesEncryptedHash = createHash('sha256').update(aesEncrypted).digest()
    const tempKey = bufferXor(tempKeyXor, aesEncryptedHash)

    const ige = new IGE(tempKey, Buffer.alloc(32))

    const dataWithHash = ige.decrypt(aesEncrypted)

    const dataPadReversed = dataWithHash.subarray(0, dataWithHash.length - 32)
    const dataWithPadding = Buffer.from(dataPadReversed).reverse()

    const request = new BinaryReader<any>(
      dataWithPadding,
      SchemaRegistry
    ).readObject<PQInnerData>() as PQInnerData

    const a = fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true)
    const gA = modExp(fromBufferToBigInt(dh2048G), a, fromBufferToBigInt(dh2048P))

    const serverDHInnerData = new ServerDHInnerData({
      nonce: message.nonce,
      serverNonce: message.serverNonce,
      g: dh2048G[0],
      dhPrime: dh2048P,
      gA: fromBigIntToBuffer(gA, 256, false),
      serverTime: Math.floor(new Date().getTime() / 1000),
    })

    const bytes = serverDHInnerData.getBytes()

    const { key: igekey, iv } = MTProtoKeyPair.fromNonce(message.serverNonce, request.newNonce)

    const igeEncode = new IGE(igekey, iv)

    const pok = new ServerDHParamsOk({
      nonce: message.nonce,
      serverNonce: message.serverNonce,
      encryptedAnswer: igeEncode.encrypt(
        Buffer.concat([createHash('sha1').update(bytes).digest(), bytes])
      ),
    })

    const messageData = pok.getBytes()

    connection.send(
      await connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(
            MTProtoMessageId.generate(),
            messageData.length,
            messageData
          )
        )
      )
    )

    connection.newNonce = request.newNonce
    ;(connection as any).a = a
  }

  async onSetClientDHParams(connection: MTProtoConnection, message: SetClientDHParams) {
    const { key: igekey, iv } = MTProtoKeyPair.fromNonce(message.serverNonce, connection.newNonce)

    const igeEncode = new IGE(igekey, iv)
    const clientDhEncrypted = igeEncode.decrypt(message.encryptedData)
    const clientDh = clientDhEncrypted.subarray(20, clientDhEncrypted.length)

    const innerData = new BinaryReader<any>(
      clientDh,
      SchemaRegistry
    ).readObject() as ClientDHInnerData

    //const a = fromBufferToBigInt(Buffer.from(randomBytes(16)), false, true)
    //const gA = modExp(fromBufferToBigInt(dh2048G), a, fromBufferToBigInt(dh2048P))

    const gab = modExp(
      fromBufferToBigInt(innerData.gB),
      (connection as any).a,
      fromBufferToBigInt(dh2048P)
    )

    const authKey = new MTProtoAuthKey(fromBigIntToByteArrayBuffer(gab))

    connection.authKeyManager.setAuthKey(authKey.id, authKey)

    const dhGenOk = new DhGenOk({
      nonce: message.nonce,
      serverNonce: message.serverNonce,
      newNonceHash1: calculateNonceHash(connection.newNonce, authKey.auxHash, 1),
    })

    const messageData = dhGenOk.getBytes()

    connection.send(
      await connection.codec.send(
        new MTProtoRawMessage(
          BigInt(0),
          new MTProtoUnencryptedRawMessage(
            MTProtoMessageId.generate(),
            messageData.length,
            messageData
          )
        )
      )
    )
  }
}
