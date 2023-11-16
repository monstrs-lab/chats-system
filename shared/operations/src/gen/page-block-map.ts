import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PageBlockMapValues {
  geo: any
  zoom: number
  w: number
  h: number
  caption: any
}

export class PageBlockMap extends TLConstructor<PageBlockMapValues> {
  static override CONSTRUCTOR_ID: number = -1538310410
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
      name: 'caption',
      type: 'PageCaption',
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

  get zoom(): number {
    return this.getParamValue<number>('zoom')
  }

  get w(): number {
    return this.getParamValue<number>('w')
  }

  get h(): number {
    return this.getParamValue<number>('h')
  }

  get caption(): any {
    return this.getParamValue<any>('caption')
  }
}
