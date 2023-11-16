import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionDeleteTopicValues {
  topic: any
}

export class ChannelAdminLogEventActionDeleteTopic extends TLConstructor<ChannelAdminLogEventActionDeleteTopicValues> {
  static override CONSTRUCTOR_ID: number = -1374254839
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'topic',
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

  get topic(): any {
    return this.getParamValue<any>('topic')
  }
}
