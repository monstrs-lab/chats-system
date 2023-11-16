import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountEmailVerifiedValues {
  email: string
}

export class AccountEmailVerified extends TLConstructor<AccountEmailVerifiedValues> {
  static override CONSTRUCTOR_ID: number = 731303195
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
  ]

  get email(): string {
    return this.getParamValue<string>('email')
  }
}
