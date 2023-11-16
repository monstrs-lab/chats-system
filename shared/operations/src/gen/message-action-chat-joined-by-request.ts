import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionChatJoinedByRequestValues {}

export class MessageActionChatJoinedByRequest extends TLConstructor<MessageActionChatJoinedByRequestValues> {
  static override CONSTRUCTOR_ID: number = -339958837
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
