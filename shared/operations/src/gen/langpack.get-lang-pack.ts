import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface LangpackGetLangPackValues {
  langPack: string
  langCode: string
}

export class LangpackGetLangPack extends TLMethod<LangpackGetLangPackValues> {
  static override CONSTRUCTOR_ID = -219008246
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
