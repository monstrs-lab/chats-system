import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsEditForumTopicValues {
  flags: any
  channel: any
  topicId: number
  title: string
  iconEmojiId: bigint
  closed: any
  hidden: any
}

export class ChannelsEditForumTopic extends TLMethod<ChannelsEditForumTopicValues> {
  static override CONSTRUCTOR_ID = -186670715
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
      name: 'channel',
      type: 'InputChannel',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'topic_id',
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
      name: 'title',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'icon_emoji_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'closed',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'hidden',
      type: 'Bool',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 3,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get channel(): any {
    return this.getParamValue<any>('channel')
  }

  get topicId(): number {
    return this.getParamValue<number>('topicId')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get iconEmojiId(): bigint {
    return this.getParamValue<bigint>('iconEmojiId')
  }

  get closed(): any {
    return this.getParamValue<any>('closed')
  }

  get hidden(): any {
    return this.getParamValue<any>('hidden')
  }
}
