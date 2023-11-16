import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersChangeStickerPositionValues {
  sticker: any
  position: number
}

export class StickersChangeStickerPosition extends TLMethod<StickersChangeStickerPositionValues> {
  static override CONSTRUCTOR_ID = -4795190
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'sticker',
      type: 'InputDocument',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'position',
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

  get sticker(): any {
    return this.getParamValue<any>('sticker')
  }

  get position(): number {
    return this.getParamValue<number>('position')
  }
}
