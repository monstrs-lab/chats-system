import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateEncryptedChatTypingValues {
  chatId: number
}

export class UpdateEncryptedChatTyping extends TLConstructor<UpdateEncryptedChatTypingValues> {
  static override CONSTRUCTOR_ID: number = 386986326
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'chat_id',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get chatId(): number {
    return this.getParamValue<number>('chatId')
  }
}
