import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PhotoSizeEmptyValues {
  type: string
}

export class PhotoSizeEmpty extends TLConstructor<PhotoSizeEmptyValues> {
  static override CONSTRUCTOR_ID: number = 236446268
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
  ]

  get type(): string {
    return this.getParamValue<string>('type')
  }
}
