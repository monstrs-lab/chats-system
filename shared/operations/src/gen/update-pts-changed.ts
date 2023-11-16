import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdatePtsChangedValues {}

export class UpdatePtsChanged extends TLConstructor<UpdatePtsChangedValues> {
  static override CONSTRUCTOR_ID: number = 861169551
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
