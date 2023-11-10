import { createDecipheriv, createCipheriv } from 'node:crypto'
import BigInt from 'big-integer'

function readBigIntFromBuffer(buffer, little = true, signed = false) {
    let randBuffer = Buffer.from(buffer);
    const bytesNumber = randBuffer.length;
    if (little) {
        randBuffer = randBuffer.reverse();
    }
    let bigInt = BigInt(randBuffer.toString('hex'), 16);
    if (signed && Math.floor(bigInt.toString('2').length / 8) >= bytesNumber) {
        bigInt = bigInt.subtract(BigInt(2)
            .pow(BigInt(bytesNumber * 8)));
    }
    return bigInt;
}

class BinaryReader {
  constructor(data) {
    this.stream = data
    this._last = undefined
    this.offset = 0
  }

  readByte() {
    return this.read(1)[0];
}

/**
 * Reads an integer (4 bytes or 32 bits) value.
 * @param signed {Boolean}
 */
readInt(signed = true) {
    let res;
    if (signed) {
        res = this.stream.readInt32LE(this.offset);
    } else {
        res = this.stream.readUInt32LE(this.offset);
    }
    this.offset += 4;
    return res;
}

/**
 * Reads a long integer (8 bytes or 64 bits) value.
 * @param signed
 * @returns {BigInteger}
 */
readLong(signed = true) {
    return this.readLargeInt(64, signed);
}

/**
 * Reads a real floating point (4 bytes) value.
 * @returns {number}
 */
readFloat() {
    return this.read(4)
        .readFloatLE(0);
}

/**
 * Reads a real floating point (8 bytes) value.
 * @returns {BigInteger}
 */
readDouble() {
    // was this a bug ? it should have been <d
    return this.read(8)
        .readDoubleLE(0);
}

/**
 * Reads a n-bits long integer value.
 * @param bits
 * @param signed {Boolean}
 */
readLargeInt(bits, signed = true) {
    const buffer = this.read(Math.floor(bits / 8));
    return readBigIntFromBuffer(buffer, true, signed);
}

/**
 * Read the given amount of bytes, or -1 to read all remaining.
 * @param length {number}
 */
read(length = -1) {
    if (length === -1) {
        length = this.stream.length - this.offset;
    }
    const result = this.stream.slice(this.offset, this.offset + length);
    this.offset += length;
    if (result.length !== length) {
        throw Error(
            `No more data left to read (need ${length}, got ${result.length}: ${result}); last read ${this._last}`,
        );
    }
    this._last = result;
    return result;
}

/**
 * Gets the byte array representing the current buffer as a whole.
 * @returns {Buffer}
 */
getBuffer() {
    return this.stream;
}
}

class AbridgedPacketCodec {
    async readPacket(reader) {
        const readData = await reader.read(1);
        let length = readData[0];

        if (length >= 127) {
            length = Buffer.concat([await reader.read(3), Buffer.alloc(1)])
                .readInt32LE(0);
        }

        return reader.read(length << 2);
    }
}

class ObfuscatedIO {
    constructor(data, encrypt, decrypt) {
        this.data = data
        this.encrypt = encrypt()
        this.decrypt = decrypt()
    }

    async read(n) {
        return this.decrypt.update(this.data.subarray(0, n))
    }
}

const header = Buffer.from(
  'aW2smrPi3NbG3WHbBreBw+gH8LM9RlBN/pCrOnEHICeb5vlJ23B8dqQgfMPBVsSH98LVqyCcrSJ8b4akKiNW6A==',
  'base64'
)
const data = Buffer.from('OLDxasnVav6a5bFV98DStTZdRzqOH8VY//qHjmMY8zEEZL9hG1Asc/0=', 'base64')

const clientKey = header.subarray(8, 40)
const clientIv = header.subarray(40, 56)

const reservedHeader = Buffer.from(header.subarray(8, 56)).reverse()

const serverKey = reservedHeader.subarray(0, 32)
const serverIv = reservedHeader.subarray(32, 48)

const e = () => createCipheriv('AES-256-CTR', clientKey, clientIv)
const d = () => createCipheriv('AES-256-CTR', serverKey, serverIv)

const codec = new AbridgedPacketCodec()
const obfuscation = new ObfuscatedIO(data, e, d)

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
