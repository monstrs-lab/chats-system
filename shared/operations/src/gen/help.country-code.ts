import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpCountryCodeValues {
  flags: any
  countryCode: string
  prefixes: Array<string>
  patterns: Array<string>
}

export class HelpCountryCode extends TLConstructor<HelpCountryCodeValues> {
  static override CONSTRUCTOR_ID: number = 1107543535
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
    {
      name: 'country_code',
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
      name: 'prefixes',
      type: 'string',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'patterns',
      type: 'string',
      isVector: true,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get countryCode(): string {
    return this.getParamValue<string>('countryCode')
  }

  get prefixes(): Array<string> {
    return this.getParamValue<Array<string>>('prefixes')
  }

  get patterns(): Array<string> {
    return this.getParamValue<Array<string>>('patterns')
  }
}
