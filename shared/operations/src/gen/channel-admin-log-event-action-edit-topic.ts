import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionEditTopicValues {
  prevTopic: any
  newTopic: any
}

export class ChannelAdminLogEventActionEditTopic extends TLConstructor<ChannelAdminLogEventActionEditTopicValues> {
  static override CONSTRUCTOR_ID: number = -261103096
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_topic',
      type: 'ForumTopic',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_topic',
      type: 'ForumTopic',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get prevTopic(): any {
    return this.getParamValue<any>('prevTopic')
  }

  get newTopic(): any {
    return this.getParamValue<any>('newTopic')
  }
}
