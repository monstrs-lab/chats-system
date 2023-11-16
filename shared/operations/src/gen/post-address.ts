import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PostAddressValues {
  streetLine1: string
  streetLine2: string
  city: string
  state: string
  countryIso2: string
  postCode: string
}

export class PostAddress extends TLConstructor<PostAddressValues> {
  static override CONSTRUCTOR_ID: number = 512535275
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'street_line1',
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
      name: 'street_line2',
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
      name: 'city',
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
      name: 'state',
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
      name: 'country_iso2',
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
      name: 'post_code',
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

  get streetLine1(): string {
    return this.getParamValue<string>('streetLine1')
  }

  get streetLine2(): string {
    return this.getParamValue<string>('streetLine2')
  }

  get city(): string {
    return this.getParamValue<string>('city')
  }

  get state(): string {
    return this.getParamValue<string>('state')
  }

  get countryIso2(): string {
    return this.getParamValue<string>('countryIso2')
  }

  get postCode(): string {
    return this.getParamValue<string>('postCode')
  }
}
