import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsGetChannelsValues {
  id: Array<any>
}

export class ChannelsGetChannels extends TLMethod<ChannelsGetChannelsValues> {
  static override CONSTRUCTOR_ID = 176122811
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'id',
      type: 'InputChannel',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get id(): Array<any> {
    return this.getParamValue<Array<any>>('id')
  }
}
