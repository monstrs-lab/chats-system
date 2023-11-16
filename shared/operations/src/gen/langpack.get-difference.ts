import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface LangpackGetDifferenceValues {
  langPack: string
  langCode: string
  fromVersion: number
}

export class LangpackGetDifference extends TLMethod<LangpackGetDifferenceValues> {
  static override CONSTRUCTOR_ID = -845657435
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

  get langPack(): string {
    return this.getParamValue<string>('langPack')
  }

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }

  get fromVersion(): number {
    return this.getParamValue<number>('fromVersion')
  }
}
