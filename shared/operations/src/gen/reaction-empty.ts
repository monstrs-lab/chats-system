import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ReactionEmptyValues {}

export class ReactionEmpty extends TLConstructor<ReactionEmptyValues> {
  static override CONSTRUCTOR_ID: number = 2046153753
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
