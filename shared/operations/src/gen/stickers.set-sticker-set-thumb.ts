import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersSetStickerSetThumbValues {
  flags: any
  stickerset: any
  thumb: any
  thumbDocumentId: bigint
}

export class StickersSetStickerSetThumb extends TLMethod<StickersSetStickerSetThumbValues> {
  static override CONSTRUCTOR_ID = -1486204014
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
      name: 'thumb',
      type: 'InputDocument',
      isVector: false,
      isFlag: true,
      skipConstructorId: false,
      flagGroup: 1,
      flagIndex: 0,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'thumb_document_id',
      type: 'long',
      isVector: false,
      isFlag: true,
      skipConstructorId: true,
      flagGroup: 1,
      flagIndex: 1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get flags(): any {
    return this.getParamValue<any>('flags')
  }

  get stickerset(): any {
    return this.getParamValue<any>('stickerset')
  }

  get thumb(): any {
    return this.getParamValue<any>('thumb')
  }

  get thumbDocumentId(): bigint {
    return this.getParamValue<bigint>('thumbDocumentId')
  }
}
