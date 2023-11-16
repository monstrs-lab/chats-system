import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountGetPrivacyValues {
  key: any
}

export class AccountGetPrivacy extends TLMethod<AccountGetPrivacyValues> {
  static override CONSTRUCTOR_ID = -623130288
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'key',
      type: 'InputPrivacyKey',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get key(): any {
    return this.getParamValue<any>('key')
  }
}
