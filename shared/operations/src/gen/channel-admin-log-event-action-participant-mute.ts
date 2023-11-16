import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionParticipantMuteValues {
  participant: any
}

export class ChannelAdminLogEventActionParticipantMute extends TLConstructor<ChannelAdminLogEventActionParticipantMuteValues> {
  static override CONSTRUCTOR_ID: number = -115071790
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'participant',
      type: 'GroupCallParticipant',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get participant(): any {
    return this.getParamValue<any>('participant')
  }
}
