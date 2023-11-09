export const i2abLow = (buf: Uint32Array): ArrayBuffer => {
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

export const i2abBig = (buf: Uint32Array): ArrayBuffer => buf.buffer

export const ab2iLow = (ab: ArrayBuffer | SharedArrayBuffer | Uint8Array): Uint32Array => {
  const uint8 = new Uint8Array(ab)
  const buf = new Uint32Array(uint8.length / 4)

  for (let i = 0; i < uint8.length; i += 4) {
    buf[i / 4] = (uint8[i] << 24) ^ (uint8[i + 1] << 16) ^ (uint8[i + 2] << 8) ^ uint8[i + 3]
  }

  return buf
}

export const ab2iBig = (ab: ArrayBuffer | SharedArrayBuffer | Uint8Array): Uint32Array =>
  new Uint32Array(ab)

export const isBigEndian = new Uint8Array(new Uint32Array([0x01020304]))[0] === 0x01
export const i2ab = isBigEndian ? i2abBig : i2abLow
export const ab2i = isBigEndian ? ab2iBig : ab2iLow
