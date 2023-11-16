import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionHistoryClearValues {}

export class MessageActionHistoryClear extends TLConstructor<MessageActionHistoryClearValues> {
  static override CONSTRUCTOR_ID: number = -1615153660
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
