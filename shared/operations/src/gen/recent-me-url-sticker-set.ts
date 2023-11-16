import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface RecentMeUrlStickerSetValues {
  url: string
  set: any
}

export class RecentMeUrlStickerSet extends TLConstructor<RecentMeUrlStickerSetValues> {
  static override CONSTRUCTOR_ID: number = -1140172836
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'url',
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
      name: 'set',
      type: 'StickerSetCovered',
      isVector: false,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: false,
    },
  ]

  get url(): string {
    return this.getParamValue<string>('url')
  }

  get set(): any {
    return this.getParamValue<any>('set')
  }
}
