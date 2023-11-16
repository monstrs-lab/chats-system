import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StickerSetMultiCoveredValues {
  set: any
  covers: Array<any>
}

export class StickerSetMultiCovered extends TLConstructor<StickerSetMultiCoveredValues> {
  static override CONSTRUCTOR_ID: number = 872932635
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
      name: 'covers',
      type: 'Document',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get set(): any {
    return this.getParamValue<any>('set')
  }

  get covers(): Array<any> {
    return this.getParamValue<Array<any>>('covers')
  }
}
