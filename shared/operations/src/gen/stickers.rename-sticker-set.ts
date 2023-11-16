import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersRenameStickerSetValues {
  stickerset: any
  title: string
}

export class StickersRenameStickerSet extends TLMethod<StickersRenameStickerSetValues> {
  static override CONSTRUCTOR_ID = 306912256
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
      name: 'title',
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

  get stickerset(): any {
    return this.getParamValue<any>('stickerset')
  }

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
