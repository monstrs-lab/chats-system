import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetEmojiKeywordsValues {
  langCode: string
}

export class MessagesGetEmojiKeywords extends TLMethod<MessagesGetEmojiKeywordsValues> {
  static override CONSTRUCTOR_ID = 899735650
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'lang_code',
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

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }
}
