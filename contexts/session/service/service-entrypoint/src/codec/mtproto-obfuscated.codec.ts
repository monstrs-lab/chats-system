import type { Cipher }          from 'node:crypto'

import { MTProtoAbridgedCodec } from './mtproto-abridged.codec.js'

export class MTProtoObfuscatedCodec {
  #decrypt: Cipher

  #encrypt: Cipher

  #codec: MTProtoAbridgedCodec

  constructor(decrypt: Cipher, encrypt: Cipher, protocolType: number) {
    if (protocolType !== MTProtoAbridgedCodec.FLAG) {
      throw new Error(`Invalid obfuscated protocol type: ${protocolType}`)
    }

    this.#decrypt = decrypt
    this.#encrypt = encrypt
    this.#codec = new MTProtoAbridgedCodec()
  }

  async read(message: Buffer, n: number) {
    return Buffer.from(this.#decrypt.update(message.subarray(0, n)))
  }

  async decode(message: Buffer) {
    const readData = await this.read(message, 1)

    const length =
      readData[0] >= 127
        ? Buffer.concat([await this.read(message, 3), Buffer.alloc(1)]).readInt32LE(0)
        : readData[0]

    const data = await this.read(message, length << 2)
    console.log(data)
  }
}
