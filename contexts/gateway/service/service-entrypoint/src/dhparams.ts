// @ts-nocheck
import { createHash, randomBytes }    from 'node:crypto'

import { IGE as AESIGE } from '@cryptography/aes'
import BigInt            from 'big-integer'
import { BinaryReader }                 from '@chats-system/tl-types'

export function modExp(a, b, n) {
  a = a.remainder(n)
  let result = BigInt.one
  let x = a
  while (b.greater(BigInt.zero)) {
    const leastSignificantBit = b.remainder(BigInt(2))
    b = b.divide(BigInt(2))
    if (leastSignificantBit.eq(BigInt.one)) {
      result = result.multiply(x)
      result = result.remainder(n)
    }
    x = x.multiply(x)
    x = x.remainder(n)
  }
  return result
}

export function readBigIntFromBuffer(buffer, little = true, signed = false) {
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

export function readBufferFromBigInt(bigInt, bytesNumber, little = true, signed = false) {
  bigInt = BigInt(bigInt)
  const bitLength = bigInt.bitLength()

  const bytes = Math.ceil(bitLength / 8)
  if (bytesNumber < bytes) {
    throw new Error('OverflowError: int too big to convert')
  }
  if (!signed && bigInt.lesser(BigInt(0))) {
    throw new Error('Cannot convert to unsigned')
  }
  let below = false
  if (bigInt.lesser(BigInt(0))) {
    below = true
    bigInt = bigInt.abs()
  }

  const hex = bigInt.toString('16').padStart(bytesNumber * 2, '0')
  let l = Buffer.from(hex, 'hex')
  if (little) {
    l = l.reverse()
  }

  if (signed && below) {
    if (little) {
      let reminder = false
      if (l[0] !== 0) {
        l[0] -= 1
      }
      for (let i = 0; i < l.length; i++) {
        if (l[i] === 0) {
          reminder = true
          continue
        }
        if (reminder) {
          l[i] -= 1
          reminder = false
        }
        l[i] = 255 - l[i]
      }
    } else {
      l[l.length - 1] = 256 - l[l.length - 1]
      for (let i = 0; i < l.length - 1; i++) {
        l[i] = 255 - l[i]
      }
    }
  }
  return l
}

export function sha256(data) {
  const shaSum = createHash('sha256')
  shaSum.update(data)
  return shaSum.digest()
}

export function bufferXor(a, b) {
  const res = []
  for (let i = 0; i < a.length; i++) {
    res.push(a[i] ^ b[i])
  }
  return Buffer.from(res)
}

export function convertToLittle(buf) {
  const correct = Buffer.alloc(buf.length * 4)

  for (let i = 0; i < buf.length; i++) {
    correct.writeUInt32BE(buf[i], i * 4)
  }
  return correct
}

function generateRandomBytes(count) {
  return Buffer.from(randomBytes(count));
}

export class IGE {
  constructor(key, iv) {
    this.ige = new AESIGE(key, iv)
  }

  decryptIge(cipherText) {
    return convertToLittle(this.ige.decrypt(cipherText))
  }

  encryptIge(plainText) {
    const padding = plainText.length % 16;
    if (padding) {
        plainText = Buffer.concat([plainText, generateRandomBytes(16 - padding)]);
    }

    return convertToLittle(this.ige.encrypt(plainText));
}
}

export function sha1(data) {
  const shaSum = createHash('sha1');
  shaSum.update(data);
  return shaSum.digest();
}

export function toSignedLittleBuffer(big, number = 8) {
  const bigNumber = BigInt(big);
  const byteArray = [];
  for (let i = 0; i < number; i++) {
      byteArray[i] = bigNumber.shiftRight(8 * i)
          .and(255);
  }
  return Buffer.from(byteArray);
}

export async function generateKeyDataFromNonce(serverNonce, newNonce) {
  serverNonce = toSignedLittleBuffer(serverNonce, 16);
  newNonce = toSignedLittleBuffer(newNonce, 32);
  const [hash1, hash2, hash3] = await Promise.all([
      sha1(Buffer.concat([newNonce, serverNonce])),
      sha1(Buffer.concat([serverNonce, newNonce])),
      sha1(Buffer.concat([newNonce, newNonce])),
  ]);
  const keyBuffer = Buffer.concat([hash1, hash2.slice(0, 12)]);
  const ivBuffer = Buffer.concat([hash2.slice(12, 20), hash3, newNonce.slice(0, 4)]);
  return {
      key: keyBuffer,
      iv: ivBuffer,
  };
}

export class AuthKey {
  constructor(value, hash) {
      if (!hash || !value) {
          return;
      }
      this._key = value;
      this._hash = hash;
      const reader = new BinaryReader(hash);
      this.auxHash = reader.readLong(false);
      reader.read(4);
      this.keyId = reader.readLong(false);
  }

  async setKey(value) {
      if (!value) {
          this._key = undefined;
          this.auxHash = undefined;
          this.keyId = undefined;
          this._hash = undefined;
          return;
      }
      if (value instanceof AuthKey) {
          this._key = value._key;
          this.auxHash = value.auxHash;
          this.keyId = value.keyId;
          this._hash = value._hash;
          return;
      }
      this._key = value;
      this._hash = await sha1(this._key);
      const reader = new BinaryReader(this._hash);
      this.auxHash = reader.readLong(false);
      reader.read(4);
      this.keyId = reader.readLong(false);
  }

  async waitForKey() {
      while (!this.keyId) {
          await sleep(20);
      }
  }

  getKey() {
      return this._key;
  }

  async calcNewNonceHash(newNonce, number) {
      newNonce = toSignedLittleBuffer(newNonce, 32);
      const n = Buffer.alloc(1);
      n.writeUInt8(number, 0);
      const data = Buffer.concat([newNonce,
          Buffer.concat([n, readBufferFromBigInt(this.auxHash, 8, true)])]);

      // Calculates the message key from the given data
      const shaData = (await sha1(data)).slice(4, 20);
      return readBigIntFromBuffer(shaData, true, true);
  }

  equals(other) {
      return other instanceof this.constructor && this._key && other.getKey() && other.getKey()
          .equals(this._key);
  }
}

export function getByteArray(integer, signed = false) {
  const bits = integer.toString(2).length;
  const byteLength = Math.floor((bits + 8 - 1) / 8);
  return readBufferFromBigInt(BigInt(integer), byteLength, false, signed);
}