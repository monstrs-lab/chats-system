import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChannelMessagesFilterEmptyValues {}

export class ChannelMessagesFilterEmpty extends TLConstructor<ChannelMessagesFilterEmptyValues> {
  static override CONSTRUCTOR_ID: number = -1798033689
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
