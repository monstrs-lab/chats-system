import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageMediaUnsupportedValues {}

export class MessageMediaUnsupported extends TLConstructor<MessageMediaUnsupportedValues> {
  static override CONSTRUCTOR_ID: number = -1618676578
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
