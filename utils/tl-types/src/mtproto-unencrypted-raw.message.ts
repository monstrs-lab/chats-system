import type { MTProtoRawMessage } from './mtproto-raw.message.js'
import { TLObject } from './tl.object.js'
import { TLObjectConstructor } from './tl.object.js'

import { BinaryReader } from './binary.reader.js'

export class MTProtoUnencryptedRawMessage {
    #input: Buffer

    constructor(input: Buffer) {
        this.#input = input
    }

    static decode(input: Buffer): MTProtoUnencryptedRawMessage {
        return new MTProtoUnencryptedRawMessage(
            input,
        )
    }
/*
    encode(): Buffer {
        const messageData = this.#input.subarray(24, this.#input.length)

        const authKeyId = Buffer.alloc(8)
        const messageId = Buffer.alloc(8)
        const messageLength = Buffer.alloc(4)
        const constructorId = Buffer.alloc(4)

        authKeyId.writeBigUint64LE(BigInt(0))
        messageId.writeBigUInt64LE(this.#input.readBigUint64LE(8))
        messageLength.writeUInt32LE(messageData.length)
        constructorId.writeInt32LE(this.#input.readInt32LE(20))

        return Buffer.concat([authKeyId, messageId, messageLength, constructorId, messageData])
    }
*/
    read(classMap: Record<number, TLObject>): boolean | TLObject | Array<TLObject> {
        /*
        const authKeyId = data.readBigUint64LE(1)
const msgId = data.readBigUint64LE(9)
const msgLength = data.readUInt32LE(17)
const constructorId = data.readInt32LE(21)
*/
        const binaryReader = new BinaryReader(this.#input, classMap)

        binaryReader.readLong()

        const messageId = binaryReader.readLong();

        if (messageId === BigInt(0)) {
            throw new Error('Bad msgId');
        }

        const messageLength = binaryReader.readInt();

        if (messageLength <= 0) {
            throw new Error('Bad length');
        }

        return binaryReader.readObject()
    }
}