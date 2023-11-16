import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface StickersSuggestShortNameValues {
  title: string
}

export class StickersSuggestShortName extends TLMethod<StickersSuggestShortNameValues> {
  static override CONSTRUCTOR_ID = 1303364867
  static override PARAMS: Array<TLExtendedSchemaParam> = [
    {
      name: 'title',
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

  get title(): string {
    return this.getParamValue<string>('title')
  }
}
