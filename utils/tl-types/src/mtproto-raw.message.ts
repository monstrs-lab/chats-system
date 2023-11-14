import { MTProtoAuthKeyManager }        from './mtproto-auth-key.manager.js'
import { MTProtoEncryptedRawMessage }   from './mtproto-encrypted-raw.message.js'
import { MTProtoUnencryptedRawMessage } from './mtproto-unencrypted-raw.message.js'

export interface MTProtoRawMessageContext {
  authKeyManager: MTProtoAuthKeyManager
}

export class MTProtoRawMessage {
  #authKeyId: bigint

  #message: MTProtoUnencryptedRawMessage | MTProtoEncryptedRawMessage

  constructor(
    authKeyId: bigint,
    message: MTProtoUnencryptedRawMessage | MTProtoEncryptedRawMessage
  ) {
    this.#authKeyId = authKeyId
    this.#message = message
  }

  static decode(payload: Buffer, context: MTProtoRawMessageContext): MTProtoRawMessage {
    const authKeyId = payload.readBigUint64LE(0)

    if (authKeyId === BigInt(0)) {
      return new MTProtoRawMessage(authKeyId, MTProtoUnencryptedRawMessage.decode(payload))
    }

    return new MTProtoRawMessage(authKeyId, MTProtoEncryptedRawMessage.decode(payload, context))
  }

  encode(): Buffer {
    return this.#message.encode()
  }

  getAuthKeyId(): bigint {
    return this.#authKeyId
  }

  getMessage(): MTProtoUnencryptedRawMessage | MTProtoEncryptedRawMessage {
    return this.#message
  }
}
