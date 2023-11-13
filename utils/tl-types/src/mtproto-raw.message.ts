import { MTProtoUnencryptedRawMessage } from './mtproto-unencrypted-raw.message.js'

export class MTProtoRawMessage {
  #authKeyId: bigint

  #message: MTProtoUnencryptedRawMessage

  constructor(authKeyId: bigint, message: MTProtoUnencryptedRawMessage) {
    this.#authKeyId = authKeyId
    this.#message = message
  }

  static decode(payload: Buffer): MTProtoRawMessage {
    const authKeyId = payload.readBigUint64LE(0)

    if (authKeyId === BigInt(0)) {
      return new MTProtoRawMessage(authKeyId, MTProtoUnencryptedRawMessage.decode(payload))
    }

    throw new Error('TODO: encrypted raw message')
  }

  encode(): Buffer {
    return this.#message.encode()
  }

  getAuthKeyId(): bigint {
    return this.#authKeyId
  }

  getMessage(): MTProtoUnencryptedRawMessage {
    return this.#message
  }
}
