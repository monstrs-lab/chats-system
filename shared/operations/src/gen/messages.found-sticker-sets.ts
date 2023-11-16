import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesFoundStickerSetsValues {
  hash: bigint
  sets: Array<any>
}

export class MessagesFoundStickerSets extends TLConstructor<MessagesFoundStickerSetsValues> {
  static override CONSTRUCTOR_ID: number = -1963942446
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
      name: 'sets',
      type: 'StickerSetCovered',
      isVector: true,
      isFlag: false,
      skipConstructorId: false,
      flagGroup: 0,
      flagIndex: -1,
      flagIndicator: false,
      useVectorId: true,
    },
  ]

  get hash(): bigint {
    return this.getParamValue<bigint>('hash')
  }

  get sets(): Array<any> {
    return this.getParamValue<Array<any>>('sets')
  }
}
