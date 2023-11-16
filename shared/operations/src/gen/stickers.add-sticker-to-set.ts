import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersAddStickerToSetValues {
  stickerset: any
  sticker: any
}

export class StickersAddStickerToSet extends TLMethod<StickersAddStickerToSetValues> {
  static override CONSTRUCTOR_ID = -2041315650
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'stickerset',
      type: 'InputStickerSet',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'sticker',
      type: 'InputStickerSetItem',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get stickerset(): any {
    return this.getParamValue<any>('stickerset')
  }

  get sticker(): any {
    return this.getParamValue<any>('sticker')
  }
}
