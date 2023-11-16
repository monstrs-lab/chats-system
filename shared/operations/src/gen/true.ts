import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface TrueValues {}

export class True extends TLConstructor<TrueValues> {
  static override CONSTRUCTOR_ID: number = 1072550713
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
