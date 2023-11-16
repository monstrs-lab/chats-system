import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountSendConfirmPhoneCodeValues {
  hash: string
  settings: any
}

export class AccountSendConfirmPhoneCode extends TLMethod<AccountSendConfirmPhoneCodeValues> {
  static override CONSTRUCTOR_ID = 457157256
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
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
      name: 'settings',
      type: 'CodeSettings',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get hash(): string {
    return this.getParamValue<string>('hash')
  }

  get settings(): any {
    return this.getParamValue<any>('settings')
  }
}
