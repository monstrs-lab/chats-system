import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsSetDiscussionGroupValues {
  broadcast: any
  group: any
}

export class ChannelsSetDiscussionGroup extends TLMethod<ChannelsSetDiscussionGroupValues> {
  static override CONSTRUCTOR_ID = 1079520178
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'broadcast',
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
      name: 'group',
      type: 'InputChannel',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get broadcast(): any {
    return this.getParamValue<any>('broadcast')
  }

  get group(): any {
    return this.getParamValue<any>('group')
  }
}
