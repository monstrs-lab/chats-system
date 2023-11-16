import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetDefaultHistoryTTLValues {}

export class MessagesGetDefaultHistoryTTL extends TLMethod<MessagesGetDefaultHistoryTTLValues> {
  static override CONSTRUCTOR_ID = 1703637384
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
