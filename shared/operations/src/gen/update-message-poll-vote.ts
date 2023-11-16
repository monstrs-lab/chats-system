import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateMessagePollVoteValues {
  pollId: bigint
  userId: bigint
  options: Array<Buffer>
  qts: number
}

export class UpdateMessagePollVote extends TLConstructor<UpdateMessagePollVoteValues> {
  static override CONSTRUCTOR_ID: number = 274961865
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'poll_id',
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
      name: 'qts',
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

  get pollId(): bigint {
    return this.getParamValue<bigint>('pollId')
  }

  get userId(): bigint {
    return this.getParamValue<bigint>('userId')
  }

  get options(): Array<Buffer> {
    return this.getParamValue<Array<Buffer>>('options')
  }

  get qts(): number {
    return this.getParamValue<number>('qts')
  }
}
