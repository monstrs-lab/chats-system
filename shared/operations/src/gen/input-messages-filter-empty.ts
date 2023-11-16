import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessagesFilterEmptyValues {}

export class InputMessagesFilterEmpty extends TLConstructor<InputMessagesFilterEmptyValues> {
  static override CONSTRUCTOR_ID: number = 1474492012
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
