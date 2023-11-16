import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsToggleParticipantsHiddenValues {
  channel: any
  enabled: any
}

export class ChannelsToggleParticipantsHidden extends TLMethod<ChannelsToggleParticipantsHiddenValues> {
  static override CONSTRUCTOR_ID = 1785624660
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
      name: 'enabled',
      type: 'Bool',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get channel(): any {
    return this.getParamValue<any>('channel')
  }

  get enabled(): any {
    return this.getParamValue<any>('enabled')
  }
}
