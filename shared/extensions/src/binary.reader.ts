const { TypeNotFoundError } = require('../errors/Common')
const { coreObjects } = require('../tl/core')
const { tlobjects } = require('../tl/AllTLObjects')
//const { readBigIntFromBuffer } = require('../Helpers');

import BigInt from 'big-integer'

function readBigIntFromBuffer(buffer: Buffer, little = true, signed = false) {
  let randBuffer = Buffer.from(buffer)
  const bytesNumber = randBuffer.length
  if (little) {
    randBuffer = randBuffer.reverse()
  }
  let bigInt = BigInt(randBuffer.toString('hex'), 16)
  // @ts-expect-error
  if (signed && Math.floor(bigInt.toString('2').length / 8) >= bytesNumber) {
    bigInt = bigInt.subtract(BigInt(2).pow(BigInt(bytesNumber * 8)))
  }
  return bigInt
}

export class BinaryReader {
  #offset: number = 0

  #stream: Buffer

  #last?: Buffer

  constructor(data: Buffer) {
    data.readBigUInt64LE
    this.#stream = data
  }

  readByte() {
    return this.read(1)[0]
  }

  readInt(signed = true) {
    const res = signed
      ? this.#stream.readInt32LE(this.#offset)
      : this.#stream.readUInt32LE(this.#offset)

    this.#offset += 4

    return res
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

  readLargeInt(bits: number, signed = true) {
    const buffer = this.read(Math.floor(bits / 8))

    return readBigIntFromBuffer(buffer, true, signed)
  }

  read(length = -1) {
    if (length === -1) {
      length = this.#stream.length - this.#offset
    }
    const result = this.#stream.slice(this.#offset, this.#offset + length)
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
    return this.#stream
  }

  tgReadBytes() {
    const firstByte = this.readByte()
    let padding
    let length
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

  tgReadString() {
    return this.tgReadBytes().toString('utf-8')
  }

  tgReadBool() {
    const value = this.readInt(false)
    if (value === 0x997275b5) {
      return true
    } else if (value === 0xbc799737) {
      return false
    } else {
      throw new Error(`Invalid boolean code ${value.toString('16')}`)
    }
  }

  readDate() {
    return new Date(this.readInt() * 1000)
  }

  readObject() {
    const constructorId = this.readInt(false)
    let clazz = tlobjects[constructorId]

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

        return temp
      }

      clazz = coreObjects[constructorId]

      if (clazz === undefined) {
        this.seek(-4)

        const pos = this.tellPosition()
        const error = new TypeNotFoundError(constructorId, this.read())

        this.setPosition(pos)

        throw error
      }
    }
    return clazz.fromReader(this)
  }

  readVector() {
    if (this.readInt(false) !== 0x1cb5c415) {
      throw new Error('Invalid constructor code, vector was expected')
    }

    const count = this.readInt()
    const temp = []

    for (let i = 0; i < count; i++) {
      temp.push(this.readObject())
    }

    return temp
  }

  close() {
    // @ts-expect-error
    this.#stream = undefined
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
