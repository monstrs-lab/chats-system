import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateReadChannelDiscussionOutboxValues {
  channelId: bigint
  topMsgId: number
  readMaxId: number
}

export class UpdateReadChannelDiscussionOutbox extends TLConstructor<UpdateReadChannelDiscussionOutboxValues> {
  static override CONSTRUCTOR_ID: number = 1767677564
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'channel_id',
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
      name: 'top_msg_id',
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
      name: 'read_max_id',
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

  get channelId(): bigint {
    return this.getParamValue<bigint>('channelId')
  }

  get topMsgId(): number {
    return this.getParamValue<number>('topMsgId')
  }

  get readMaxId(): number {
    return this.getParamValue<number>('readMaxId')
  }
}
