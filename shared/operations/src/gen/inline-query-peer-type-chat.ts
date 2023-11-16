import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InlineQueryPeerTypeChatValues {}

export class InlineQueryPeerTypeChat extends TLConstructor<InlineQueryPeerTypeChatValues> {
  static override CONSTRUCTOR_ID: number = -681130742
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}