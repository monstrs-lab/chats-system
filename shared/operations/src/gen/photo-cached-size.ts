import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhotoCachedSizeValues {
  type: string
  w: number
  h: number
  bytes: Buffer
}

export class PhotoCachedSize extends TLConstructor<PhotoCachedSizeValues> {
  static override CONSTRUCTOR_ID: number = 35527382
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
      name: 'bytes',
      type: 'bytes',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
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

  get bytes(): Buffer {
    return this.getParamValue<Buffer>('bytes')
  }
}
