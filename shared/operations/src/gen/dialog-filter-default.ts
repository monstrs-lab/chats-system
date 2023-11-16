import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DialogFilterDefaultValues {}

export class DialogFilterDefault extends TLConstructor<DialogFilterDefaultValues> {
  static override CONSTRUCTOR_ID: number = 909284270
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
