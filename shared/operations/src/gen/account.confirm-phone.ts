import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountConfirmPhoneValues {
  phoneCodeHash: string
  phoneCode: string
}

export class AccountConfirmPhone extends TLMethod<AccountConfirmPhoneValues> {
  static override CONSTRUCTOR_ID = 1596029123
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'phone_code_hash',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'phone_code',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get phoneCodeHash(): string {
    return this.getParamValue<string>('phoneCodeHash')
  }

  get phoneCode(): string {
    return this.getParamValue<string>('phoneCode')
  }
}
