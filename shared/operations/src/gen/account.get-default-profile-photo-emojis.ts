import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetDefaultProfilePhotoEmojisValues {
  hash: bigint
}

export class AccountGetDefaultProfilePhotoEmojis extends TLMethod<AccountGetDefaultProfilePhotoEmojisValues> {
  static override CONSTRUCTOR_ID = -495647960
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
