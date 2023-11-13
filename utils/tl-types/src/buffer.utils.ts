import BI from 'big-integer'

export const fromDateToBuffer = (date?: Date): Buffer => {
  if (!date) {
    return Buffer.alloc(4).fill(0)
  }

  const dateValue = date instanceof Date ? Math.floor((Date.now() - date.getTime()) / 1000) : date

  if (typeof dateValue === 'number') {
    const time = Buffer.alloc(4)

    time.writeInt32LE(dateValue, 0)

    return time
  }

  throw Error(`Cannot interpret "${date}" as a date`)
}

export const fromBigIntToBuffer = (big: bigint, number = 8): Buffer => {
  const bigNumber = BI(big)

  const byteArray = []

  for (let i = 0; i < number; i++) {
    byteArray[i] = bigNumber.shiftRight(8 * i).and(255)
  }

  return Buffer.from(byteArray as any)
}
