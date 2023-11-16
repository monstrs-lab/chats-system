import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface AccountSendVerifyEmailCodeValues {
  purpose: any
  email: string
}

export class AccountSendVerifyEmailCode extends TLMethod<AccountSendVerifyEmailCodeValues> {
  static override CONSTRUCTOR_ID = -1730136133
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'purpose',
      type: 'EmailVerifyPurpose',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'email',
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

  get purpose(): any {
    return this.getParamValue<any>('purpose')
  }

  get email(): string {
    return this.getParamValue<string>('email')
  }
}
