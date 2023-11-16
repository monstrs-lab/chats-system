import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AccountAuthorizationsValues {
  authorizationTtlDays: number
  authorizations: Array<any>
}

export class AccountAuthorizations extends TLConstructor<AccountAuthorizationsValues> {
  static override CONSTRUCTOR_ID: number = 1275039392
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'authorization_ttl_days',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'authorizations',
      type: 'Authorization',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get authorizationTtlDays(): number {
    return this.getParamValue<number>('authorizationTtlDays')
  }

  get authorizations(): Array<any> {
    return this.getParamValue<Array<any>>('authorizations')
  }
}
