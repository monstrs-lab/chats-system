import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelParticipantsContactsValues {
  q: string
}

export class ChannelParticipantsContacts extends TLConstructor<ChannelParticipantsContactsValues> {
  static override CONSTRUCTOR_ID: number = -1150621555
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