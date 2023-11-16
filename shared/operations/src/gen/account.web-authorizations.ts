import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountWebAuthorizationsValues {
  authorizations: Array<any>
  users: Array<any>
}

export class AccountWebAuthorizations extends TLConstructor<AccountWebAuthorizationsValues> {
  static override CONSTRUCTOR_ID: number = -313079300
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'authorizations',
      type: 'WebAuthorization',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'users',
      type: 'User',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get authorizations(): Array<any> {
    return this.getParamValue<Array<any>>('authorizations')
  }

  get users(): Array<any> {
    return this.getParamValue<Array<any>>('users')
  }
}
