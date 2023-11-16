import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetEmojiKeywordsDifferenceValues {
  langCode: string
  fromVersion: number
}

export class MessagesGetEmojiKeywordsDifference extends TLMethod<MessagesGetEmojiKeywordsDifferenceValues> {
  static override CONSTRUCTOR_ID = 352892591
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
    {
      name: 'from_version',
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

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }

  get fromVersion(): number {
    return this.getParamValue<number>('fromVersion')
  }
}
