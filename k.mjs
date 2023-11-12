//import { createDecipheriv, createCipheriv } from 'node:crypto'

import BigInt from 'big-integer'
import AESPkg from '@cryptography/aes'
const AES = AESPkg.default
export function s2i(str, pos) {
  return (
    (str.charCodeAt(pos) << 24) ^
    (str.charCodeAt(pos + 1) << 16) ^
    (str.charCodeAt(pos + 2) << 8) ^
    str.charCodeAt(pos + 3)
  )
}

/**
 * Helper function for transforming string key to Uint32Array
 */
export function getWords(key) {
  if (key instanceof Uint32Array) {
    return key
  }

  if (typeof key === 'string') {
    if (key.length % 4 !== 0) for (let i = key.length % 4; i <= 4; i++) key += '\0x00'

    const buf = new Uint32Array(key.length / 4)
    for (let i = 0; i < key.length; i += 4) buf[i / 4] = s2i(key, i)

    return buf
  }

  if (key instanceof Uint8Array) {
    const buf = new Uint32Array(key.length / 4)

    for (let i = 0; i < key.length; i += 4) {
      buf[i / 4] = (key[i] << 24) ^ (key[i + 1] << 16) ^ (key[i + 2] << 8) ^ key[i + 3]
    }

    return buf
  }

  throw new Error('Unable to create 32-bit words')
}

export function xor(left, right, to = left) {
  for (let i = 0; i < left.length; i++) to[i] = left[i] ^ right[i]
}

export function i2abLow(buf) {
  const uint8 = new Uint8Array(buf.length * 4)
  let i = 0

  for (let j = 0; j < buf.length; j++) {
    const int = buf[j]

    uint8[i++] = int >>> 24
    uint8[i++] = (int >> 16) & 0xff
    uint8[i++] = (int >> 8) & 0xff
    uint8[i++] = int & 0xff
  }

  return uint8.buffer
}

export function i2abBig(buf) {
  return buf.buffer
}

export function ab2iLow(ab) {
  const uint8 = new Uint8Array(ab)
  const buf = new Uint32Array(uint8.length / 4)

  for (let i = 0; i < uint8.length; i += 4) {
    buf[i / 4] = (uint8[i] << 24) ^ (uint8[i + 1] << 16) ^ (uint8[i + 2] << 8) ^ uint8[i + 3]
  }

  return buf
}

/**
 * ArrayBuffer -> Uint32Array (big-endian os)
 */
export function ab2iBig(ab) {
  return new Uint32Array(ab)
}

export const isBigEndian = new Uint8Array(new Uint32Array([0x01020304]))[0] === 0x01
export const i2ab = isBigEndian ? i2abBig : i2abLow
export const ab2i = isBigEndian ? ab2iBig : ab2iLow

function readBigIntFromBuffer(buffer, little = true, signed = false) {
  let randBuffer = Buffer.from(buffer)
  const bytesNumber = randBuffer.length
  if (little) {
    randBuffer = randBuffer.reverse()
  }
  let bigInt = BigInt(randBuffer.toString('hex'), 16)
  if (signed && Math.floor(bigInt.toString('2').length / 8) >= bytesNumber) {
    bigInt = bigInt.subtract(BigInt(2).pow(BigInt(bytesNumber * 8)))
  }
  return bigInt
}

class Counter {
  constructor(initialValue) {
    this.setBytes(initialValue)
  }

  setBytes(bytes) {
    bytes = Buffer.from(bytes)
    this._counter = bytes
  }

  increment() {
    for (let i = 15; i >= 0; i--) {
      if (this._counter[i] === 255) {
        this._counter[i] = 0
      } else {
        this._counter[i]++
        break
      }
    }
  }
}

class CTR1 {
  constructor(key, counter) {
    if (!(counter instanceof Counter)) {
      counter = new Counter(counter)
    }

    this._counter = counter

    this._remainingCounter = undefined
    this._remainingCounterIndex = 16

    this._aes = new AES(getWords(key))
  }

  update(plainText) {
    return this.encrypt(plainText)
  }

  encrypt(plainText) {
    const encrypted = Buffer.from(plainText)

    for (let i = 0; i < encrypted.length; i++) {
      if (this._remainingCounterIndex === 16) {
        this._remainingCounter = Buffer.from(i2ab(this._aes.encrypt(ab2i(this._counter._counter))))
        this._remainingCounterIndex = 0
        this._counter.increment()
      }
      encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++]
    }

    return encrypted
  }
}

function createCipheriv(algorithm, key, iv) {
  if (algorithm.includes('ECB')) {
    throw new Error('Not supported')
  } else {
    return new CTR1(key, iv)
  }
}

class CTR {
  constructor(key, iv) {
    if (!Buffer.isBuffer(key) || !Buffer.isBuffer(iv) || iv.length !== 16) {
      throw new Error('Key and iv need to be a buffer')
    }

    this.cipher = createCipheriv('AES-256-CTR', key, iv)
  }

  encrypt(data) {
    return Buffer.from(this.cipher.update(data))
  }
}

class BinaryReader {
  constructor(data) {
    this.stream = data
    this._last = undefined
    this.offset = 0
  }

  readByte() {
    return this.read(1)[0]
  }

  /**
   * Reads an integer (4 bytes or 32 bits) value.
   * @param signed {Boolean}
   */
  readInt(signed = true) {
    let res
    if (signed) {
      res = this.stream.readInt32LE(this.offset)
    } else {
      res = this.stream.readUInt32LE(this.offset)
    }
    this.offset += 4
    return res
  }

  /**
   * Reads a long integer (8 bytes or 64 bits) value.
   * @param signed
   * @returns {BigInteger}
   */
  readLong(signed = true) {
    return this.readLargeInt(64, signed)
  }

  /**
   * Reads a real floating point (4 bytes) value.
   * @returns {number}
   */
  readFloat() {
    return this.read(4).readFloatLE(0)
  }

  /**
   * Reads a real floating point (8 bytes) value.
   * @returns {BigInteger}
   */
  readDouble() {
    // was this a bug ? it should have been <d
    return this.read(8).readDoubleLE(0)
  }

  /**
   * Reads a n-bits long integer value.
   * @param bits
   * @param signed {Boolean}
   */
  readLargeInt(bits, signed = true) {
    const buffer = this.read(Math.floor(bits / 8))
    return readBigIntFromBuffer(buffer, true, signed)
  }

  /**
   * Read the given amount of bytes, or -1 to read all remaining.
   * @param length {number}
   */
  read(length = -1) {
    if (length === -1) {
      length = this.stream.length - this.offset
    }
    const result = this.stream.slice(this.offset, this.offset + length)
    this.offset += length
    if (result.length !== length) {
      throw Error(
        `No more data left to read (need ${length}, got ${result.length}: ${result}); last read ${this._last}`
      )
    }
    this._last = result
    return result
  }

  /**
   * Gets the byte array representing the current buffer as a whole.
   * @returns {Buffer}
   */
  getBuffer() {
    return this.stream
  }
}

class AbridgedPacketCodec {
  async readPacket(reader) {
    const readData = await reader.read(1)
    let length = readData[0]

    if (length >= 127) {
      length = Buffer.concat([await reader.read(3), Buffer.alloc(1)]).readInt32LE(0)
    }

    const n = await reader.read(length << 2)

    return n
  }
}

class ObfuscatedIO {
  constructor(data, encrypt, decrypt) {
    this.data = data
    this.encrypt = encrypt
    this.decrypt = decrypt
  }

  async read(n) {
    return this.decrypt.encrypt(this.data.subarray(0, n))
  }
}

const header = Buffer.from(
  'II0vLds9Fs21sIMvTvaU1GBfI89BdALqtw43HRY5oIkd2KhKsJlBVCqXAYzFXfKTg9XdAuUtihnlhPPBgiKvFw==',
  'base64'
)
const data = Buffer.from('KhXqHeaK9GXILNQpf67kSGd50tB8l8FBlJGlrbQ3+hGFrV6JnsH0iBA=', 'base64')

const encryptKey = header.subarray(8, 40)
const encryptIv = header.subarray(40, 56)

const reservedHeader = Buffer.from(header.subarray(8, 56)).reverse()

const decryptKey = reservedHeader.subarray(0, 32)
const decryptIv = reservedHeader.subarray(32, 48)

//const e = () => createCipheriv('AES-256-CTR', clientKey, clientIv)
//const d = () => createCipheriv('AES-256-CTR', serverKey, serverIv)
const encryptor = new CTR(encryptKey, encryptIv)
const decryptor = new CTR(decryptKey, decryptIv)

const codec = new AbridgedPacketCodec()
const obfuscation = new ObfuscatedIO(data, encryptor, decryptor)

const res = await codec.readPacket(obfuscation)

const br = new BinaryReader(res)

const authKeyId = br.readLong()
const msgId = br.readLong()
const length = br.readInt()
const constructorId = br.readInt(false)
console.log(authKeyId, msgId, length, constructorId)

// this._codec.readPacket(this._obfuscation)

//console.log(e.update(header).readUInt32BE(56) === 0xefefefef)

//const readData = Buffer.from(e.update(data.subarray(0, 1)))

//let length = readData[0]
//console.log(length, length << 2)

//const ll = Buffer.from(e.update(data.subarray(0, length << 2)))
