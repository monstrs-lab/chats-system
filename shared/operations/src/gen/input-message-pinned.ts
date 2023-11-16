import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessagePinnedValues {}

export class InputMessagePinned extends TLConstructor<InputMessagePinnedValues> {
  static override CONSTRUCTOR_ID: number = -2037963464
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
