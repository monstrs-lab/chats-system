import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StatsGroupTopInviterValues {
  userId: bigint
  invitations: number
}

export class StatsGroupTopInviter extends TLConstructor<StatsGroupTopInviterValues> {
  static override CONSTRUCTOR_ID: number = 1398765469
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
      name: 'invitations',
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

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get invitations(): number {
    return this.getParamValue<number>('invitations')
  }
}
