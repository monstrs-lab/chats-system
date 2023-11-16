import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetDialogFiltersValues {}

export class MessagesGetDialogFilters extends TLMethod<MessagesGetDialogFiltersValues> {
  static override CONSTRUCTOR_ID = -241247891
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
