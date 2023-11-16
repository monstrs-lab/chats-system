import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DhGenFailValues {
  nonce: bigint
  serverNonce: bigint
  newNonceHash3: bigint
}

export class DhGenFail extends TLConstructor<DhGenFailValues> {
  static override CONSTRUCTOR_ID: number = -1499615742
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
      name: 'new_nonce_hash3',
      type: 'int128',
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

  get newNonceHash3(): bigint {
    return this.getParamValue<bigint>('newNonceHash3')
  }
}
