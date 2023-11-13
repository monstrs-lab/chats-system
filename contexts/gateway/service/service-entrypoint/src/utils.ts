import { randomBytes }             from 'crypto'
import { createHash } from 'crypto'
import bigInt                      from 'big-integer'

export const SERVER_KEYS = [
  {
    fingerprint: bigInt('-6205835210776354611'),
    n: bigInt(
      '2381306448659649164302690303076381265632668704723497020470395109308660514362364170229081106692857621740' +
        '7662304029739903180202186741388339194122731428033163392461508934209366018606125548366054726592597621897' +
        '3082720149482025777155599562826488748588535295468401288090233825534456644976428692936545848200589727693' +
        '5210354467286312442332644832723879423343018224783552507234685708030057684494633385257705768861429070097' +
        '9666942677163711643994719528044002167040190181767491250722153710492547051038733909766620291079011906347' +
        '813649336894843319316782175618810042958656414976948048313098163484344821927424378043409879056691914519'
    ),
    e: 65537,
  },
].reduce((acc, { fingerprint, ...keyInfo }) => {
  acc.set(fingerprint.toString(), keyInfo)
  return acc
}, new Map<string, { n: bigInt.BigInteger; e: number }>())

function generateRandomBytes(count: number) {
  return Buffer.from(randomBytes(count))
}

function sha1(data: Buffer) {
  const shaSum = createHash('sha1')
  shaSum.update(data)
  return shaSum.digest()
}

// @ts-expect-error
function modExp(a, b, n) {
  a = a.remainder(n)
  let result = bigInt.one
  let x = a
  while (b.greater(bigInt.zero)) {
    const leastSignificantBit = b.remainder(BigInt(2))
    b = b.divide(BigInt(2))
    if (leastSignificantBit.eq(bigInt.one)) {
      result = result.multiply(x)
      result = result.remainder(n)
    }
    x = x.multiply(x)
    x = x.remainder(n)
  }
  return result
}

function readBigIntFromBuffer(buffer: Buffer, little = true, signed = false) {
  let randBuffer = Buffer.from(buffer)
  const bytesNumber = randBuffer.length
  if (little) {
    randBuffer = randBuffer.reverse()
  }
  let bi = bigInt(randBuffer.toString('hex'), 16)
  if (signed && Math.floor(bi.toString(2).length / 8) >= bytesNumber) {
    bi = bi.subtract(bigInt(2).pow(BigInt(bytesNumber * 8)))
  }
  return bigInt
}

// @ts-expect-error
function readBufferFromBigInt(bigInt, bytesNumber, little = true, signed = false) {
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

export async function encrypt(fingerprint: bigInt.BigInteger, data: Buffer) {
  const key = SERVER_KEYS.get(fingerprint.toString())
  if (!key) {
    return undefined
  }

  // len(sha1.digest) is always 20, so we're left with 255 - 20 - x padding
  const rand = generateRandomBytes(235 - data.length)

  const toEncrypt = Buffer.concat([await sha1(data), data, rand])

  // rsa module rsa.encrypt adds 11 bits for padding which we don't want
  // rsa module uses rsa.transform.bytes2int(to_encrypt), easier way:
  const payload = readBigIntFromBuffer(toEncrypt, false)
  const encrypted = modExp(payload, bigInt(key.e), key.n)
  // rsa module uses transform.int2bytes(encrypted, keylength), easier:
  return readBufferFromBigInt(encrypted, 256, false)
}
