import { MTProtoUnencryptedRawMessage } from './mtproto-unencrypted-raw.message.js'

export class MTProtoRawMessage {
    #payload: Buffer

    #authKeyId: bigint

    constructor(payload: Buffer) {
        this.#payload = payload
        this.#authKeyId = payload.readBigUint64LE(0)
    }

    getPayload(): Buffer {
        return this.#payload
    }

    getAuthKeyId(): bigint {
        return this.#authKeyId
    }

    decode(): MTProtoUnencryptedRawMessage {
        if (this.#authKeyId === BigInt(0)) {
            return MTProtoUnencryptedRawMessage.decode(this.#payload)
        }

        throw new Error('TODO: encrypted raw message')
    }
}