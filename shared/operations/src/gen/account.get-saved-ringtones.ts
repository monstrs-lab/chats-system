import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetSavedRingtonesValues {
  hash: bigint
}

export class AccountGetSavedRingtones extends TLMethod<AccountGetSavedRingtonesValues> {
  static override CONSTRUCTOR_ID = -510647672
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
