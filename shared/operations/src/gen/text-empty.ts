import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface TextEmptyValues {}

export class TextEmpty extends TLConstructor<TextEmptyValues> {
  static override CONSTRUCTOR_ID: number = -599948721
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
