import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelParticipantsBannedValues {
  q: string
}

export class ChannelParticipantsBanned extends TLConstructor<ChannelParticipantsBannedValues> {
  static override CONSTRUCTOR_ID: number = 338142689
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'q',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get q(): string {
    return this.getParamValue<string>('q')
  }
}
