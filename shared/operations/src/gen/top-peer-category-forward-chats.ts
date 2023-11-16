import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface TopPeerCategoryForwardChatsValues {}

export class TopPeerCategoryForwardChats extends TLConstructor<TopPeerCategoryForwardChatsValues> {
  static override CONSTRUCTOR_ID: number = -68239120
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
