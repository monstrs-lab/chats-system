import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhotoPathSizeValues {
  type: string
  bytes: Buffer
}

export class PhotoPathSize extends TLConstructor<PhotoPathSizeValues> {
  static override CONSTRUCTOR_ID: number = -668906175
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

  get bytes(): Buffer {
    return this.getParamValue<Buffer>('bytes')
  }
}