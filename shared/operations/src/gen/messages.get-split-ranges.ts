import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetSplitRangesValues {}

export class MessagesGetSplitRanges extends TLMethod<MessagesGetSplitRangesValues> {
  static override CONSTRUCTOR_ID = 486505992
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
