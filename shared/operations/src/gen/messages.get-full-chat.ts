import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetFullChatValues {
  chatId: bigint
}

export class MessagesGetFullChat extends TLMethod<MessagesGetFullChatValues> {
  static override CONSTRUCTOR_ID = -1364194508
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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
  ]

  get chatId(): bigint {
    return this.getParamValue<bigint>('chatId')
  }
}
