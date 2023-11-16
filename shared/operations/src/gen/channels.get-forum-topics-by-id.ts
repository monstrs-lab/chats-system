import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsGetForumTopicsByIDValues {
  channel: any
  topics: Array<number>
}

export class ChannelsGetForumTopicsByID extends TLMethod<ChannelsGetForumTopicsByIDValues> {
  static override CONSTRUCTOR_ID = -1333584199
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
      name: 'topics',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get channel(): any {
    return this.getParamValue<any>('channel')
  }

  get topics(): Array<number> {
    return this.getParamValue<Array<number>>('topics')
  }
}
