import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageMediaEmptyValues {}

export class MessageMediaEmpty extends TLConstructor<MessageMediaEmptyValues> {
  static override CONSTRUCTOR_ID: number = 1038967584
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
