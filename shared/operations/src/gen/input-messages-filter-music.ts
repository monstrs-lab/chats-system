import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessagesFilterMusicValues {}

export class InputMessagesFilterMusic extends TLConstructor<InputMessagesFilterMusicValues> {
  static override CONSTRUCTOR_ID: number = 928101534
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
