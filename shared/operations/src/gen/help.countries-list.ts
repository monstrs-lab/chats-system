import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface HelpCountriesListValues {
  countries: Array<any>
  hash: number
}

export class HelpCountriesList extends TLConstructor<HelpCountriesListValues> {
  static override CONSTRUCTOR_ID: number = -2016381538
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'countries',
      type: 'help.Country',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
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

  get countries(): Array<any> {
    return this.getParamValue<Array<any>>('countries')
  }

  get hash(): number {
    return this.getParamValue<number>('hash')
  }
}
