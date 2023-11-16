import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageUserVoteInputOptionValues {
  userId: bigint
  date: number
}

export class MessageUserVoteInputOption extends TLConstructor<MessageUserVoteInputOptionValues> {
  static override CONSTRUCTOR_ID: number = 1017491692
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
      name: 'date',
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

  get date(): number {
    return this.getParamValue<number>('date')
  }
}
