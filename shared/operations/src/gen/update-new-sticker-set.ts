import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateNewStickerSetValues {
  stickerset: any
}

export class UpdateNewStickerSet extends TLConstructor<UpdateNewStickerSetValues> {
  static override CONSTRUCTOR_ID: number = 1753886890
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'stickerset',
      type: 'messages.StickerSet',
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
