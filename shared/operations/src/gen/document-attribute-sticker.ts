import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DocumentAttributeStickerValues {
  flags: any
  mask: boolean
  alt: string
  stickerset: any
  maskCoords: any
}

export class DocumentAttributeSticker extends TLConstructor<DocumentAttributeStickerValues> {
  static override CONSTRUCTOR_ID: number = 1662637586
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
      name: 'mask',
      type: 'true',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'alt',
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
      name: 'mask_coords',
      type: 'MaskCoords',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get mask(): boolean {
    return this.getParamValue<boolean>('mask')
  }

  get alt(): string {
    return this.getParamValue<string>('alt')
  }

  get stickerset(): any {
    return this.getParamValue<any>('stickerset')
  }

  get maskCoords(): any {
    return this.getParamValue<any>('maskCoords')
  }
}
