import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

export class Vector extends TLConstructor {
  static override CONSTRUCTOR_ID: number = 481674261
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
