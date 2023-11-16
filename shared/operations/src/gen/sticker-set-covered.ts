import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StickerSetCoveredValues {
  set: any
  cover: any
}

export class StickerSetCovered extends TLConstructor<StickerSetCoveredValues> {
  static override CONSTRUCTOR_ID: number = 1678812626
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'set',
      type: 'StickerSet',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
    {
      name: 'cover',
      type: 'Document',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get set(): any {
    return this.getParamValue<any>('set')
  }

  get cover(): any {
    return this.getParamValue<any>('cover')
  }
}
