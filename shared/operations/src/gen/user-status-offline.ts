import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UserStatusOfflineValues {
  wasOnline: number
}

export class UserStatusOffline extends TLConstructor<UserStatusOfflineValues> {
  static override CONSTRUCTOR_ID: number = 9203775
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'was_online',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get wasOnline(): number {
    return this.getParamValue<number>('wasOnline')
  }
}
