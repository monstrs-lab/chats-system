import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface NullValues {}

export class Null extends TLConstructor<NullValues> {
  static override CONSTRUCTOR_ID: number = 1450380236
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
