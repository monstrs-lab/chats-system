import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMediaVenueValues {
  geoPoint: any
  title: string
  address: string
  provider: string
  venueId: string
  venueType: string
}

export class InputMediaVenue extends TLConstructor<InputMediaVenueValues> {
  static override CONSTRUCTOR_ID: number = -1052959727
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'geo_point',
      type: 'InputGeoPoint',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'title',
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
      name: 'address',
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
      name: 'provider',
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
      name: 'venue_id',
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
      name: 'venue_type',
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

  get geoPoint(): any {
    return this.getParamValue<any>('geoPoint')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }

  get address(): string {
    return this.getParamValue<string>('address')
  }

  get provider(): string {
    return this.getParamValue<string>('provider')
  }

  get venueId(): string {
    return this.getParamValue<string>('venueId')
  }

  get venueType(): string {
    return this.getParamValue<string>('venueType')
  }
}
