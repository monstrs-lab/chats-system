import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesEditChatTitleValues {
  chatId: bigint
  title: string
}

export class MessagesEditChatTitle extends TLMethod<MessagesEditChatTitleValues> {
  static override CONSTRUCTOR_ID = 1937260541
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
      name: 'title',
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

  get chatId(): bigint {
    return this.getParamValue<bigint>('chatId')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
