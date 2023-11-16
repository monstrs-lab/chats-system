import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsReadMessageContentsValues {
  channel: any
  id: Array<number>
}

export class ChannelsReadMessageContents extends TLMethod<ChannelsReadMessageContentsValues> {
  static override CONSTRUCTOR_ID = -357180360
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
      name: 'id',
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

  get id(): Array<number> {
    return this.getParamValue<Array<number>>('id')
  }
}
