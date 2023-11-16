import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyValueAllowUsersValues {
  users: Array<bigint>
}

export class PrivacyValueAllowUsers extends TLConstructor<PrivacyValueAllowUsersValues> {
  static override CONSTRUCTOR_ID: number = -1198497870
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'users',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get users(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('users')
  }
}
