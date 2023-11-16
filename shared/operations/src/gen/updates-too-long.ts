import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatesTooLongValues {}

export class UpdatesTooLong extends TLConstructor<UpdatesTooLongValues> {
  static override CONSTRUCTOR_ID: number = -484987010
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
