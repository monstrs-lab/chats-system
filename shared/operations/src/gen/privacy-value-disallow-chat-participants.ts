import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyValueDisallowChatParticipantsValues {
  chats: Array<bigint>
}

export class PrivacyValueDisallowChatParticipants extends TLConstructor<PrivacyValueDisallowChatParticipantsValues> {
  static override CONSTRUCTOR_ID: number = 1103656293
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'chats',
      type: 'long',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get chats(): Array<bigint> {
    return this.getParamValue<Array<bigint>>('chats')
  }
}
