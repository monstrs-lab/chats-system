import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesSponsoredMessagesEmptyValues {}

export class MessagesSponsoredMessagesEmpty extends TLConstructor<MessagesSponsoredMessagesEmptyValues> {
  static override CONSTRUCTOR_ID: number = 406407439
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
