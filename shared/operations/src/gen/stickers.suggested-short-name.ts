import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StickersSuggestedShortNameValues {
  shortName: string
}

export class StickersSuggestedShortName extends TLConstructor<StickersSuggestedShortNameValues> {
  static override CONSTRUCTOR_ID: number = -2046910401
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'short_name',
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

  get shortName(): string {
    return this.getParamValue<string>('shortName')
  }
}
