import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputEncryptedChatValues {
  chatId: number
  accessHash: bigint
}

export class InputEncryptedChat extends TLConstructor<InputEncryptedChatValues> {
  static override CONSTRUCTOR_ID: number = -247351839
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
    {
      name: 'access_hash',
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

  get chatId(): number {
    return this.getParamValue<number>('chatId')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }
}
