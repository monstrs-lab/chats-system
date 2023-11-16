import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface JsonNullValues {}

export class JsonNull extends TLConstructor<JsonNullValues> {
  static override CONSTRUCTOR_ID: number = 1064139624
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
