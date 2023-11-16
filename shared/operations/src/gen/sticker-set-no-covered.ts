import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StickerSetNoCoveredValues {
  set: any
}

export class StickerSetNoCovered extends TLConstructor<StickerSetNoCoveredValues> {
  static override CONSTRUCTOR_ID: number = 2008112412
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
  ]

  get set(): any {
    return this.getParamValue<any>('set')
  }
}
