import { fromBufferToBigInt } from '@monstrs/buffer-utils'

import { TLObject }           from './tl.object.js'

class TypeNotFoundError extends Error {
  constructor(invalidConstructorId: number, remaining: Buffer) {
    super(`Could not find a matching Constructor ID for the TLObject that was supposed to be
        read with ID ${invalidConstructorId}. Most likely, a TLObject was trying to be read when
         it should not be read. Remaining bytes: ${remaining.length}`)
    //if (typeof alert !== 'undefined') {
    // eslint-disable-next-line no-alert
    //    alert(`Missing MTProto Entity: Please, make sure to add TL definition for ID ${invalidConstructorId}`);
    //}
    // @ts-expect-error
    this.invalidConstructorId = invalidConstructorId
    // @ts-expect-error
    this.remaining = remaining
  }
}

export class BinaryReader {
  #offset: number = 0

  #input: Buffer

  #schemaRegistry: Map<number, TLObject>

  #last?: Buffer

  constructor(input: Buffer, schemaRegistry: Map<number, TLObject>) {
    this.#input = input
    this.#schemaRegistry = schemaRegistry
  }

  readByte() {
    return this.read(1)[0]
  }

  readInt(signed = true) {
    const result = signed
      ? this.#input.readInt32LE(this.#offset)
      : this.#input.readUInt32LE(this.#offset)

    this.#offset += 4

    return result
  }

  readLong(signed = true) {
    return this.readLargeInt(64, signed)
  }

  readFloat() {
    return this.read(4).readFloatLE(0)
  }

  readDouble() {
    return this.read(8).readDoubleLE(0)
  }

  readLargeInt(bits: number, signed = true): bigint {
    return fromBufferToBigInt(this.read(Math.floor(bits / 8)), true, signed)
  }

  read(length = -1) {
    if (length === -1) {
      length = this.#input.length - this.#offset
    }

    const result = this.#input.subarray(this.#offset, this.#offset + length)

    this.#offset += length

    if (result.length !== length) {
      throw Error(
        `No more data left to read (need ${length}, got ${result.length}: ${result}); last read ${
          this.#last
        }`
      )
    }

    this.#last = result

    return result
  }

  getBuffer() {
    return this.#input
  }

  readBytes() {
    let padding
    let length

    const firstByte = this.readByte()

    if (firstByte === 254) {
      length = this.readByte() | (this.readByte() << 8) | (this.readByte() << 16)
      padding = length % 4
    } else {
      length = firstByte
      padding = (length + 1) % 4
    }

    const data = this.read(length)

    if (padding > 0) {
      padding = 4 - padding
      this.read(padding)
    }

    return data
  }

  readString() {
    return this.readBytes().toString('utf-8')
  }

  readBool() {
    const value = this.readInt(false)
    if (value === 0x997275b5) {
      return true
    } else if (value === 0xbc799737) {
      return false
    } else {
      throw new Error(`Invalid boolean code ${value.toString(16)}`)
    }
  }

  readDate() {
    const value = this.readInt()

    return new Date(value * 1000)
  }

  readObject(): boolean | Array<TLObject> | TLObject {
    const constructorId = this.readInt()

    let clazz = this.#schemaRegistry.get(constructorId)

    if (clazz === undefined) {
      const value = constructorId

      if (value === 0x997275b5) {
        return true
      } else if (value === 0xbc799737) {
        return false
      } else if (value === 0x1cb5c415) {
        const temp = []
        const length = this.readInt()

        for (let i = 0; i < length; i++) {
          temp.push(this.readObject())
        }

        return temp as Array<TLObject>
      }

      if (clazz === undefined) {
        this.seek(-4)
        this.setPosition(this.tellPosition())

        throw new TypeNotFoundError(constructorId, this.read())
      }
    }

    // @ts-expect-error
    return clazz.fromReader(this)
  }

  readVector() {
    if (this.readInt(false) !== 0x1cb5c415) {
      throw new Error('Invalid constructor code, vector was expected')
    }

    const temp = []
    const count = this.readInt()

    for (let i = 0; i < count; i++) {
      temp.push(this.readObject())
    }

    return temp
  }

  tellPosition() {
    return this.#offset
  }

  setPosition(position: number) {
    this.#offset = position
  }

  seek(offset: number) {
    this.#offset += offset
  }
}
