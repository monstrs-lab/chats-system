import { createHash }   from 'crypto'

import { BinaryReader } from '@chats-system/tl-types'

export class AuthKey {
  #hash: Buffer

  #id: bigint

  #auxHash: bigint

  constructor(value: Buffer) {
    this.#hash = createHash('sha1').update(value).digest()

    const reader = new BinaryReader(this.#hash, new Map())

    this.#auxHash = reader.readLong(false)

    reader.read(4)

    this.#id = reader.readLong(false)
  }

  get hash(): Buffer {
    return this.#hash
  }

  get id(): bigint {
    return this.#id
  }

  get auxHash(): bigint {
    return this.#auxHash
  }
}
