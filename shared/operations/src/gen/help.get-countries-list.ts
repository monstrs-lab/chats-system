import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetCountriesListValues {
  langCode: string
  hash: number
}

export class HelpGetCountriesList extends TLMethod<HelpGetCountriesListValues> {
  static override CONSTRUCTOR_ID = 1935116200
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
      name: 'hash',
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

  get hash(): number {
    return this.getParamValue<number>('hash')
  }
}
