import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateRecentReactionsValues {}

export class UpdateRecentReactions extends TLConstructor<UpdateRecentReactionsValues> {
  static override CONSTRUCTOR_ID: number = 1870160884
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
