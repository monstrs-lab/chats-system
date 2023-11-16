import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MaskCoordsValues {
  n: number
  x: number
  y: number
  zoom: number
}

export class MaskCoords extends TLConstructor<MaskCoordsValues> {
  static override CONSTRUCTOR_ID: number = -1361650766
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'n',
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
      name: 'x',
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
      name: 'y',
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
      name: 'zoom',
      type: 'double',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get n(): number {
    return this.getParamValue<number>('n')
  }

  get x(): number {
    return this.getParamValue<number>('x')
  }

  get y(): number {
    return this.getParamValue<number>('y')
  }

  get zoom(): number {
    return this.getParamValue<number>('zoom')
  }
}
