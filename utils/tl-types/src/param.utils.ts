import BigInt from 'big-integer'

function toSignedLittleBuffer(big: any, number = 8) {
  const bigNumber = BigInt(big)
  const byteArray = []
  for (let i = 0; i < number; i++) {
    byteArray[i] = bigNumber.shiftRight(8 * i).and(255)
  }

  // @ts-expect-error
  return Buffer.from(byteArray)
}

function serializeBytes(data: any) {
  if (!(data instanceof Buffer)) {
    if (typeof data === 'string') {
      data = Buffer.from(data)
    } else {
      throw Error(`Bytes or str expected, not ${data.constructor.name}`)
    }
  }
  const r = []
  let padding
  if (data.length < 254) {
    padding = (data.length + 1) % 4
    if (padding !== 0) {
      padding = 4 - padding
    }
    r.push(Buffer.from([data.length]))
    r.push(data)
  } else {
    padding = data.length % 4
    if (padding !== 0) {
      padding = 4 - padding
    }
    r.push(
      Buffer.from([254, data.length % 256, (data.length >> 8) % 256, (data.length >> 16) % 256])
    )
    r.push(data)
  }
  r.push(Buffer.alloc(padding).fill(0))

  return Buffer.concat(r)
}

function serializeDate(dt: Date) {
  if (!dt) {
    return Buffer.alloc(4).fill(0)
  }
  if (dt instanceof Date) {
    // @ts-expect-error
    dt = Math.floor((Date.now() - dt.getTime()) / 1000)
  }
  if (typeof dt === 'number') {
    const t = Buffer.alloc(4)
    t.writeInt32LE(dt, 0)
    return t
  }
  throw Error(`Cannot interpret "${dt}" as a date`)
}

export function paramToBytes(x: any, type: string) {
  switch (type) {
    case 'int': {
      const i = Buffer.alloc(4)
      i.writeInt32LE(x, 0)
      return i
    }
    case 'long':
      return toSignedLittleBuffer(x, 8)
    case 'int128':
      return toSignedLittleBuffer(x, 16)
    case 'int256':
      return toSignedLittleBuffer(x, 32)
    case 'double': {
      const d = Buffer.alloc(8)
      d.writeDoubleLE(x, 0)
      return d
    }
    case 'string':
      return serializeBytes(x)
    case 'Bool':
      return x ? Buffer.from('b5757299', 'hex') : Buffer.from('379779bc', 'hex')
    case 'true':
      return Buffer.alloc(0)
    case 'bytes':
      return serializeBytes(x)
    case 'date':
      return serializeDate(x)
    default:
      return x.getBytes()
  }
}
