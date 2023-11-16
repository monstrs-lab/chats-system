import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PasswordKdfAlgoUnknownValues {}

export class PasswordKdfAlgoUnknown extends TLConstructor<PasswordKdfAlgoUnknownValues> {
  static override CONSTRUCTOR_ID: number = -732254058
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
