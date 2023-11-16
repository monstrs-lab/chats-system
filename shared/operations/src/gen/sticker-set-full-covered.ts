import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StickerSetFullCoveredValues {
  set: any
  packs: Array<any>
  keywords: Array<any>
  documents: Array<any>
}

export class StickerSetFullCovered extends TLConstructor<StickerSetFullCoveredValues> {
  static override CONSTRUCTOR_ID: number = 1087454222
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
      name: 'packs',
      type: 'StickerPack',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'keywords',
      type: 'StickerKeyword',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'documents',
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

  get packs(): Array<any> {
    return this.getParamValue<Array<any>>('packs')
  }

  get keywords(): Array<any> {
    return this.getParamValue<Array<any>>('keywords')
  }

  get documents(): Array<any> {
    return this.getParamValue<Array<any>>('documents')
  }
}
