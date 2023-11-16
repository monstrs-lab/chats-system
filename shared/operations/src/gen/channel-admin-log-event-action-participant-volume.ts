import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelAdminLogEventActionParticipantVolumeValues {
  participant: any
}

export class ChannelAdminLogEventActionParticipantVolume extends TLConstructor<ChannelAdminLogEventActionParticipantVolumeValues> {
  static override CONSTRUCTOR_ID: number = 1048537159
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
