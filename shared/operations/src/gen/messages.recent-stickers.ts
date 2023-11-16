import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesRecentStickersValues {
  hash: bigint
  packs: Array<any>
  stickers: Array<any>
  dates: Array<number>
}

export class MessagesRecentStickers extends TLConstructor<MessagesRecentStickersValues> {
  static override CONSTRUCTOR_ID: number = -1999405994
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'hash',
      type: 'long',
      isVector: false,
      isFlag: false,
      skipConstructorId: true,
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
      name: 'stickers',
      type: 'Document',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
    {
      name: 'dates',
      type: 'int',
      isVector: true,
      isFlag: false,
      skipConstructorId: true,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }

  get packs(): Array<any> {
    return this.getParamValue<Array<any>>('packs')
  }

  get stickers(): Array<any> {
    return this.getParamValue<Array<any>>('stickers')
  }

  get dates(): Array<number> {
    return this.getParamValue<Array<number>>('dates')
  }
}
