import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountEmailVerifiedLoginValues {
  email: string
  sentCode: any
}

export class AccountEmailVerifiedLogin extends TLConstructor<AccountEmailVerifiedLoginValues> {
  static override CONSTRUCTOR_ID: number = -507835039
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
    {
      name: 'sent_code',
      type: 'auth.SentCode',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get email(): string {
    return this.getParamValue<string>('email')
  }

  get sentCode(): any {
    return this.getParamValue<any>('sentCode')
  }
}
