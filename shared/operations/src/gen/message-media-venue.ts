import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageMediaVenueValues {
  geo: any
  title: string
  address: string
  provider: string
  venueId: string
  venueType: string
}

export class MessageMediaVenue extends TLConstructor<MessageMediaVenueValues> {
  static override CONSTRUCTOR_ID: number = 784356159
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'geo',
      type: 'GeoPoint',
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

  get geo(): any {
    return this.getParamValue<any>('geo')
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
