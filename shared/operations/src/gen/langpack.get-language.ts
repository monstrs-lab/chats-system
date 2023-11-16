import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface LangpackGetLanguageValues {
  langPack: string
  langCode: string
}

export class LangpackGetLanguage extends TLMethod<LangpackGetLanguageValues> {
  static override CONSTRUCTOR_ID = 1784243458
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'lang_pack',
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

  get langPack(): string {
    return this.getParamValue<string>('langPack')
  }

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }
}
