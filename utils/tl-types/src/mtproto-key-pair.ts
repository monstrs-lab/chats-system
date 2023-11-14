import { createHash }     from 'node:crypto'

import { MTProtoAuthKey } from './mtproto-auth-key.js'

export enum MTProtoKeyPairType {
  CLIENT = 0,
  SERVER = 1,
}

export class MTProtoKeyPair {
  constructor(
    public readonly key: Buffer,
    public readonly iv: Buffer
  ) {}

  static fromAuthAndMsgKey(
    authKey: MTProtoAuthKey,
    msgKey: Buffer,
    keyType: MTProtoKeyPairType = MTProtoKeyPairType.SERVER
  ): MTProtoKeyPair {
    const x = keyType === MTProtoKeyPairType.SERVER ? 8 : 0

    const [sha256a, sha256b] = [
      createHash('sha256')
        .update(Buffer.concat([msgKey, authKey.key.subarray(x, x + 36)]))
        .digest(),
      createHash('sha256')
        .update(Buffer.concat([authKey.key.subarray(x + 40, x + 76), msgKey]))
        .digest(),
    ]

    const key = Buffer.concat([
      sha256a.subarray(0, 8),
      sha256b.subarray(8, 24),
      sha256a.subarray(24, 32),
    ])

    const iv = Buffer.concat([
      sha256b.subarray(0, 8),
      sha256a.subarray(8, 24),
      sha256b.subarray(24, 32),
    ])

    return new MTProtoKeyPair(key, iv)
  }
}
