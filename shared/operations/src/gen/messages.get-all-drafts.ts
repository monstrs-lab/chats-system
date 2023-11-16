import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetAllDraftsValues {}

export class MessagesGetAllDrafts extends TLMethod<MessagesGetAllDraftsValues> {
  static override CONSTRUCTOR_ID = 1782549861
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
