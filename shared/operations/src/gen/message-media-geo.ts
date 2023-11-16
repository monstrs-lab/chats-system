import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageMediaGeoValues {
  geo: any
}

export class MessageMediaGeo extends TLConstructor<MessageMediaGeoValues> {
  static override CONSTRUCTOR_ID: number = 1457575028
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
  ]

  get geo(): any {
    return this.getParamValue<any>('geo')
  }
}
