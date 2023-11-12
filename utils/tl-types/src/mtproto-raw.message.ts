import { MTProtoUnencryptedRawMessage } from './mtproto-unencrypted-raw.message.js'

export class MTProtoRawMessage {
  #message: MTProtoUnencryptedRawMessage

  constructor(message: MTProtoUnencryptedRawMessage) {
    this.#message = message
  }

  static decode(payload: Buffer): MTProtoRawMessage {
    if (payload.readBigUint64LE(0) === BigInt(0)) {
      return new MTProtoRawMessage(MTProtoUnencryptedRawMessage.decode(payload))
    }

    throw new Error('TODO: encrypted raw message')
  }

  getMessage(): MTProtoUnencryptedRawMessage {
    return this.#message
  }
}
