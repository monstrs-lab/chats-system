import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputBotInlineMessageMediaVenueValues {
  flags: any
  geoPoint: any
  title: string
  address: string
  provider: string
  venueId: string
  venueType: string
  replyMarkup: any
}

export class InputBotInlineMessageMediaVenue extends TLConstructor<InputBotInlineMessageMediaVenueValues> {
  static override CONSTRUCTOR_ID: number = 1098628881
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
    {
      name: 'reply_markup',
      type: 'ReplyMarkup',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

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

  get replyMarkup(): any {
    return this.getParamValue<any>('replyMarkup')
  }
}
