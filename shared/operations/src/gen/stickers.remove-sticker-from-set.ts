import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersRemoveStickerFromSetValues {
  sticker: any
}

export class StickersRemoveStickerFromSet extends TLMethod<StickersRemoveStickerFromSetValues> {
  static override CONSTRUCTOR_ID = -143257775
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
  ]

  get sticker(): any {
    return this.getParamValue<any>('sticker')
  }
}
