import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateSavedGifsValues {}

export class UpdateSavedGifs extends TLConstructor<UpdateSavedGifsValues> {
  static override CONSTRUCTOR_ID: number = -1821035490
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
