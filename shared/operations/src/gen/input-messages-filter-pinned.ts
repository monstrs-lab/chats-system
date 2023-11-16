import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessagesFilterPinnedValues {}

export class InputMessagesFilterPinned extends TLConstructor<InputMessagesFilterPinnedValues> {
  static override CONSTRUCTOR_ID: number = 464520273
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
