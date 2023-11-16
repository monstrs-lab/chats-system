import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetEmojiKeywordsLanguagesValues {
  langCodes: Array<string>
}

export class MessagesGetEmojiKeywordsLanguages extends TLMethod<MessagesGetEmojiKeywordsLanguagesValues> {
  static override CONSTRUCTOR_ID = 1318675378
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'lang_codes',
      type: 'string',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get langCodes(): Array<string> {
    return this.getParamValue<Array<string>>('langCodes')
  }
}
