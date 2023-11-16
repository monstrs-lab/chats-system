import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ReqDHParamsValues {
  nonce: bigint
  serverNonce: bigint
  p: Buffer
  q: Buffer
  publicKeyFingerprint: bigint
  encryptedData: Buffer
}

export class ReqDHParams extends TLMethod<ReqDHParamsValues> {
  static override CONSTRUCTOR_ID = -686627650
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'nonce',
      type: 'int128',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'server_nonce',
      type: 'int128',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'p',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'q',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'public_key_fingerprint',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'encrypted_data',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get nonce(): bigint {
    return this.getParamValue<bigint>('nonce')
  }

  get serverNonce(): bigint {
    return this.getParamValue<bigint>('serverNonce')
  }

  get p(): Buffer {
    return this.getParamValue<Buffer>('p')
  }

  get q(): Buffer {
    return this.getParamValue<Buffer>('q')
  }

  get publicKeyFingerprint(): bigint {
    return this.getParamValue<bigint>('publicKeyFingerprint')
  }

  get encryptedData(): Buffer {
    return this.getParamValue<Buffer>('encryptedData')
  }
}
