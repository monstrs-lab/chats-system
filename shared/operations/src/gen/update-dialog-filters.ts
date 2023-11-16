import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateDialogFiltersValues {}

export class UpdateDialogFilters extends TLConstructor<UpdateDialogFiltersValues> {
  static override CONSTRUCTOR_ID: number = 889491791
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
