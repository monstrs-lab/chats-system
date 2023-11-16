import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetFeaturedEmojiStickersValues {
  hash: bigint
}

export class MessagesGetFeaturedEmojiStickers extends TLMethod<MessagesGetFeaturedEmojiStickersValues> {
  static override CONSTRUCTOR_ID = 248473398
  static override PARAMS: Array<TLExtendedSchemaParam> = [
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

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }
}
