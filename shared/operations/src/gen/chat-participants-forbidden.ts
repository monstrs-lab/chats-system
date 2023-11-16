import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatParticipantsForbiddenValues {
  flags: any
  chatId: bigint
  selfParticipant: any
}

export class ChatParticipantsForbidden extends TLConstructor<ChatParticipantsForbiddenValues> {
  static override CONSTRUCTOR_ID: number = -2023500831
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'chat_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'self_participant',
      type: 'ChatParticipant',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get chatId(): bigint {
    return this.getParamValue<bigint>('chatId')
  }

  get selfParticipant(): any {
    return this.getParamValue<any>('selfParticipant')
  }
}
