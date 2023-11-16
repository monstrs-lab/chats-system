import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersDeleteStickerSetValues {
  stickerset: any
}

export class StickersDeleteStickerSet extends TLMethod<StickersDeleteStickerSetValues> {
  static override CONSTRUCTOR_ID = -2022685804
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
  ]

  get stickerset(): any {
    return this.getParamValue<any>('stickerset')
  }
}
