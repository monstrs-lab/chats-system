import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesArchivedStickersValues {
  count: number
  sets: Array<any>
}

export class MessagesArchivedStickers extends TLConstructor<MessagesArchivedStickersValues> {
  static override CONSTRUCTOR_ID: number = 1338747336
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'count',
      type: 'int',
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

  get count(): number {
    return this.getParamValue<number>('count')
  }

  get sets(): Array<any> {
    return this.getParamValue<Array<any>>('sets')
  }
}
