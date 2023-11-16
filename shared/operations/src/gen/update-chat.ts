import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateChatValues {
  chatId: bigint
}

export class UpdateChat extends TLConstructor<UpdateChatValues> {
  static override CONSTRUCTOR_ID: number = -124097970
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
