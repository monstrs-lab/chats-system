import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateRecentStickersValues {}

export class UpdateRecentStickers extends TLConstructor<UpdateRecentStickersValues> {
  static override CONSTRUCTOR_ID: number = -1706939360
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
