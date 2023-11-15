export function serializeBytes(data: Buffer | string) {
  if (!(data instanceof Buffer)) {
    if (typeof data === 'string') {
      data = Buffer.from(data)
    } else {
      throw Error('Bytes or string expected')
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
