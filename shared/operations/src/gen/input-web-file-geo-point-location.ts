import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputWebFileGeoPointLocationValues {
  geoPoint: any
  accessHash: bigint
  w: number
  h: number
  zoom: number
  scale: number
}

export class InputWebFileGeoPointLocation extends TLConstructor<InputWebFileGeoPointLocationValues> {
  static override CONSTRUCTOR_ID: number = -1625153079
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
      name: 'access_hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'w',
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
      name: 'h',
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
      name: 'zoom',
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
      name: 'scale',
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

  get geoPoint(): any {
    return this.getParamValue<any>('geoPoint')
  }

  get accessHash(): bigint {
    return this.getParamValue<bigint>('accessHash')
  }

  get w(): number {
    return this.getParamValue<number>('w')
  }

  get h(): number {
    return this.getParamValue<number>('h')
  }

  get zoom(): number {
    return this.getParamValue<number>('zoom')
  }

  get scale(): number {
    return this.getParamValue<number>('scale')
  }
}