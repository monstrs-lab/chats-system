import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelLocationValues {
  geoPoint: any
  address: string
}

export class ChannelLocation extends TLConstructor<ChannelLocationValues> {
  static override CONSTRUCTOR_ID: number = 547062491
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'geo_point',
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
  ]

  get geoPoint(): any {
    return this.getParamValue<any>('geoPoint')
  }

  get address(): string {
    return this.getParamValue<string>('address')
  }
}
