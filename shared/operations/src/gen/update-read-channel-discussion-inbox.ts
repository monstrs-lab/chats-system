import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateReadChannelDiscussionInboxValues {
  flags: any
  channelId: bigint
  topMsgId: number
  readMaxId: number
  broadcastId: bigint
  broadcastPost: number
}

export class UpdateReadChannelDiscussionInbox extends TLConstructor<UpdateReadChannelDiscussionInboxValues> {
  static override CONSTRUCTOR_ID: number = -693004986
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
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
    {
      name: 'broadcast_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'broadcast_post',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get channelId(): bigint {
    return this.getParamValue<bigint>('channelId')
  }

  get topMsgId(): number {
    return this.getParamValue<number>('topMsgId')
  }

  get readMaxId(): number {
    return this.getParamValue<number>('readMaxId')
  }

  get broadcastId(): bigint {
    return this.getParamValue<bigint>('broadcastId')
  }

  get broadcastPost(): number {
    return this.getParamValue<number>('broadcastPost')
  }
}