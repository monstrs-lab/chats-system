import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionChatJoinedByLinkValues {
  inviterId: bigint
}

export class MessageActionChatJoinedByLink extends TLConstructor<MessageActionChatJoinedByLinkValues> {
  static override CONSTRUCTOR_ID: number = 51520707
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'inviter_id',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get inviterId(): bigint {
    return this.getParamValue<bigint>('inviterId')
  }
}
