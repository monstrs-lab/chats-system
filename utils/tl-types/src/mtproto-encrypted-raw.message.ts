import type { MTProtoRawMessageContext } from './mtproto-raw.message.js'

import { IGE }                           from '@chats-system/crypto'

import { MTProtoKeyPair }                from './mtproto-key-pair.js'
import { MTProtoKeyPairType }            from './mtproto-key-pair.js'

export class MTProtoEncryptedRawMessage {
  #messageData: Buffer

  constructor(messageData: Buffer) {
    this.#messageData = messageData
  }

  static decode(payload: Buffer, context: MTProtoRawMessageContext): MTProtoEncryptedRawMessage {
    const authKeyId = payload.readBigUint64LE(0)

    const authKey = context.authKeyManager.getAuthKey(authKeyId)

    if (!authKey) {
      //TODO: move to errors
      throw new Error('Auth key not found')
    }

    const keyPair = MTProtoKeyPair.fromAuthAndMsgKey(
      authKey,
      payload.subarray(8, 24),
      MTProtoKeyPairType.CLIENT
    )

    const messageData = new IGE(keyPair.key, keyPair.iv).decrypt(
      payload.subarray(24, payload.length)
    )

    return new MTProtoEncryptedRawMessage(messageData)
  }

  encode(): Buffer {
    throw new Error('TODO')
  }

  getMessageData(): Buffer {
    return this.#messageData
  }
}
