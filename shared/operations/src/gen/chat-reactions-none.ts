import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatReactionsNoneValues {}

export class ChatReactionsNone extends TLConstructor<ChatReactionsNoneValues> {
  static override CONSTRUCTOR_ID: number = -352570692
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
