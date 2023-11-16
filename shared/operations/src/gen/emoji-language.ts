import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmojiLanguageValues {
  langCode: string
}

export class EmojiLanguage extends TLConstructor<EmojiLanguageValues> {
  static override CONSTRUCTOR_ID: number = -1275374751
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
