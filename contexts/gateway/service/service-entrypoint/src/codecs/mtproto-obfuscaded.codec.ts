import { createCipheriv } from 'node:crypto'
import { Cipher } from 'node:crypto'

import { MTProtoAbridgedCodec } from './mtproto-abridged.codec.js'

export class MTProtoObfuscadetCodec {
    protected decryptor: Cipher
    
    protected encryptor: Cipher

    protected codec: MTProtoAbridgedCodec

    constructor(header: Buffer) {
        if (header.length !== 64) {
            throw new Error('Invalid header size')
        }

        const reservedHeader = Buffer.from(header.subarray(8, 56)).reverse()

        this.decryptor = createCipheriv('AES-256-CTR', header.subarray(8, 40), header.subarray(40,56))
        this.encryptor = createCipheriv('AES-256-CTR', reservedHeader.subarray(0, 32), reservedHeader.subarray(32, 48))

        const obfuscaded = this.decryptor.update(header)

        const protocolType = obfuscaded.subarray(56, obfuscaded.length).readUint32BE()
console.log(protocolType, 0xefefefef, 'asdflajsdk')
        if (protocolType !== 0xefefefef) {
            throw new Error('Invalid protocol')
        }

        this.codec = new MTProtoAbridgedCodec()
    }

    receive(buf: Buffer) {
        const data = this.codec.receive(this.decryptor.update(buf))

        const authKeyId = data.readBigUint64LE(0)
        const msgId = data.readBigUint64LE(8)
        const msgLength = data.readUInt32LE(16)
        const constructorId = data.readInt32LE(20)
        console.log(authKeyId, msgId, msgLength, constructorId)
    }
    
}