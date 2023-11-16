import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesSearchCustomEmojiValues {
  emoticon: string
  hash: bigint
}

export class MessagesSearchCustomEmoji extends TLMethod<MessagesSearchCustomEmojiValues> {
  static override CONSTRUCTOR_ID = 739360983
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'emoticon',
      type: 'string',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'hash',
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

  get emoticon(): string {
    return this.getParamValue<string>('emoticon')
  }

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
