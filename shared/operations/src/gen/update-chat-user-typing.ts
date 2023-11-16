import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateChatUserTypingValues {
  chatId: bigint
  fromId: any
  action: any
}

export class UpdateChatUserTyping extends TLConstructor<UpdateChatUserTypingValues> {
  static override CONSTRUCTOR_ID: number = -2092401936
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
    {
      name: 'from_id',
      type: 'Peer',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'action',
      type: 'SendMessageAction',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get chatId(): bigint {
    return this.getParamValue<bigint>('chatId')
  }

  get fromId(): any {
    return this.getParamValue<any>('fromId')
  }

  get action(): any {
    return this.getParamValue<any>('action')
  }
}
