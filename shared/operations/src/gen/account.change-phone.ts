import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountChangePhoneValues {
  phoneNumber: string
  phoneCodeHash: string
  phoneCode: string
}

export class AccountChangePhone extends TLMethod<AccountChangePhoneValues> {
  static override CONSTRUCTOR_ID = 1891839707
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'phone_number',
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

  get phoneNumber(): string {
    return this.getParamValue<string>('phoneNumber')
  }

  get phoneCodeHash(): string {
    return this.getParamValue<string>('phoneCodeHash')
  }

  get phoneCode(): string {
    return this.getParamValue<string>('phoneCode')
  }
}
