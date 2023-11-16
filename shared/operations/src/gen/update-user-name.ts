import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateUserNameValues {
  userId: bigint
  firstName: string
  lastName: string
  usernames: Array<any>
}

export class UpdateUserName extends TLConstructor<UpdateUserNameValues> {
  static override CONSTRUCTOR_ID: number = -1484486364
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'user_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'first_name',
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
      name: 'last_name',
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
      name: 'usernames',
      type: 'Username',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get firstName(): string {
    return this.getParamValue<string>('firstName')
  }

  get lastName(): string {
    return this.getParamValue<string>('lastName')
  }

  get usernames(): Array<any> {
    return this.getParamValue<Array<any>>('usernames')
  }
}
