import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersChangeStickerValues {
  flags: any
  sticker: any
  emoji: string
  maskCoords: any
  keywords: string
}

export class StickersChangeSticker extends TLMethod<StickersChangeStickerValues> {
  static override CONSTRUCTOR_ID = -179077444
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'flags',
      type: '#',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: true,
      useVectorId: false,
    },
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
      name: 'emoji',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'mask_coords',
      type: 'MaskCoords',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'keywords',
      type: 'string',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 2,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get sticker(): any {
    return this.getParamValue<any>('sticker')
  }

  get emoji(): string {
    return this.getParamValue<string>('emoji')
  }

  get maskCoords(): any {
    return this.getParamValue<any>('maskCoords')
  }

  get keywords(): string {
    return this.getParamValue<string>('keywords')
  }
}
