import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhotoSizeProgressiveValues {
  type: string
  w: number
  h: number
  sizes: Array<number>
}

export class PhotoSizeProgressive extends TLConstructor<PhotoSizeProgressiveValues> {
  static override CONSTRUCTOR_ID: number = -96535659
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'type',
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
      name: 'sizes',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get type(): string {
    return this.getParamValue<string>('type')
  }

  get w(): number {
    return this.getParamValue<number>('w')
  }

  get h(): number {
    return this.getParamValue<number>('h')
  }

  get sizes(): Array<number> {
    return this.getParamValue<Array<number>>('sizes')
  }
}
