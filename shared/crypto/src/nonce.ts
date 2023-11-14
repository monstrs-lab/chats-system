import { createHash }                     from 'node:crypto'

import { fromBigIntToSignedLittleBuffer } from '@monstrs/buffer-utils'
import { fromBigIntToBuffer }             from '@monstrs/buffer-utils'
import { fromBufferToBigInt }             from '@monstrs/buffer-utils'

export const calculateNonceHash = (nonce: bigint, hash: bigint, num: number): bigint => {
  const nonceBuffer = fromBigIntToSignedLittleBuffer(nonce, 32)
  const n = Buffer.alloc(1)

  n.writeUInt8(num, 0)

  const data = Buffer.concat([nonceBuffer, Buffer.concat([n, fromBigIntToBuffer(hash, 8, true)])])

  return fromBufferToBigInt(createHash('sha1').update(data).digest().subarray(4, 20), true, true)
}

export const generateKeyDataFromNonce = (
  serverNonce: bigint,
  newNonce: bigint
): { key: Buffer; iv: Buffer } => {
  const serverNonceBuffer = fromBigIntToSignedLittleBuffer(serverNonce, 16)
  const newNonceBuffer = fromBigIntToSignedLittleBuffer(newNonce, 32)

  const [hash1, hash2, hash3] = [
    createHash('sha1')
      .update(Buffer.concat([newNonceBuffer, serverNonceBuffer]))
      .digest(),
    createHash('sha1')
      .update(Buffer.concat([serverNonceBuffer, newNonceBuffer]))
      .digest(),
    createHash('sha1')
      .update(Buffer.concat([newNonceBuffer, newNonceBuffer]))
      .digest(),
  ]

  const keyBuffer = Buffer.concat([hash1, hash2.slice(0, 12)])
  const ivBuffer = Buffer.concat([hash2.slice(12, 20), hash3, newNonceBuffer.subarray(0, 4)])

  return {
    key: keyBuffer,
    iv: ivBuffer,
  }
}
