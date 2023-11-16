import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionPinTopicValues {
  flags: any
  prevTopic: any
  newTopic: any
}

export class ChannelAdminLogEventActionPinTopic extends TLConstructor<ChannelAdminLogEventActionPinTopicValues> {
  static override CONSTRUCTOR_ID: number = 1569535291
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
      name: 'prev_topic',
      type: 'ForumTopic',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_topic',
      type: 'ForumTopic',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get prevTopic(): any {
    return this.getParamValue<any>('prevTopic')
  }

  get newTopic(): any {
    return this.getParamValue<any>('newTopic')
  }
}
