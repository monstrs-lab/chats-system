import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface LangPackDifferenceValues {
  langCode: string
  fromVersion: number
  version: number
  strings: Array<any>
}

export class LangPackDifference extends TLConstructor<LangPackDifferenceValues> {
  static override CONSTRUCTOR_ID: number = -209337866
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
    {
      name: 'version',
      type: 'int',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'strings',
      type: 'LangPackString',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get langCode(): string {
    return this.getParamValue<string>('langCode')
  }

  get fromVersion(): number {
    return this.getParamValue<number>('fromVersion')
  }

  get version(): number {
    return this.getParamValue<number>('version')
  }

  get strings(): Array<any> {
    return this.getParamValue<Array<any>>('strings')
  }
}
