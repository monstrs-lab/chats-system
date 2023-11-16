import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputGeoPointValues {
  flags: any
  lat: number
  long: number
  accuracyRadius: number
}

export class InputGeoPoint extends TLConstructor<InputGeoPointValues> {
  static override CONSTRUCTOR_ID: number = 1210199983
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
      name: 'lat',
      type: 'double',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'long',
      type: 'double',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'accuracy_radius',
      type: 'int',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get lat(): number {
    return this.getParamValue<number>('lat')
  }

  get long(): number {
    return this.getParamValue<number>('long')
  }

  get accuracyRadius(): number {
    return this.getParamValue<number>('accuracyRadius')
  }
}
