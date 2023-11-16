import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionPinMessageValues {}

export class MessageActionPinMessage extends TLConstructor<MessageActionPinMessageValues> {
  static override CONSTRUCTOR_ID: number = -1799538451
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
