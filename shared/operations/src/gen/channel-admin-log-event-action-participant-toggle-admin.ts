import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionParticipantToggleAdminValues {
  prevParticipant: any
  newParticipant: any
}

export class ChannelAdminLogEventActionParticipantToggleAdmin extends TLConstructor<ChannelAdminLogEventActionParticipantToggleAdminValues> {
  static override CONSTRUCTOR_ID: number = -714643696
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'prev_participant',
      type: 'ChannelParticipant',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'new_participant',
      type: 'ChannelParticipant',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get prevParticipant(): any {
    return this.getParamValue<any>('prevParticipant')
  }

  get newParticipant(): any {
    return this.getParamValue<any>('newParticipant')
  }
}
