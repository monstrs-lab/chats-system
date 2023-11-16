import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ChannelsDeleteParticipantHistoryValues {
  channel: any
  participant: any
}

export class ChannelsDeleteParticipantHistory extends TLMethod<ChannelsDeleteParticipantHistoryValues> {
  static override CONSTRUCTOR_ID = 913655003
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
      name: 'participant',
      type: 'InputPeer',
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

  get participant(): any {
    return this.getParamValue<any>('participant')
  }
}
