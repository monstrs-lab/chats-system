import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageUserVoteMultipleValues {
  userId: bigint
  options: Array<Buffer>
  date: number
}

export class MessageUserVoteMultiple extends TLConstructor<MessageUserVoteMultipleValues> {
  static override CONSTRUCTOR_ID: number = -1973033641
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
      name: 'options',
      type: 'bytes',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
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

  get options(): Array<Buffer> {
    return this.getParamValue<Array<Buffer>>('options')
  }

  get date(): number {
    return this.getParamValue<number>('date')
  }
}