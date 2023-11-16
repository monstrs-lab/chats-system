import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageRepliesValues {
  flags: any
  comments: boolean
  replies: number
  repliesPts: number
  recentRepliers: Array<any>
  channelId: bigint
  maxId: number
  readMaxId: number
}

export class MessageReplies extends TLConstructor<MessageRepliesValues> {
  static override CONSTRUCTOR_ID: number = -2083123262
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
      name: 'comments',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'replies',
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
      name: 'replies_pts',
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
      name: 'recent_repliers',
      type: 'Peer',
      isVector: true,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'channel_id',
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
      name: 'max_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'read_max_id',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get comments(): boolean {
    return this.getParamValue<boolean>('comments')
  }

  get replies(): number {
    return this.getParamValue<number>('replies')
  }

  get repliesPts(): number {
    return this.getParamValue<number>('repliesPts')
  }

  get recentRepliers(): Array<any> {
    return this.getParamValue<Array<any>>('recentRepliers')
  }

  get channelId(): bigint {
    return this.getParamValue<bigint>('channelId')
  }

  get maxId(): number {
    return this.getParamValue<number>('maxId')
  }

  get readMaxId(): number {
    return this.getParamValue<number>('readMaxId')
  }
}
