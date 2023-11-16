import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface PaymentsGetSavedInfoValues {}

export class PaymentsGetSavedInfo extends TLMethod<PaymentsGetSavedInfoValues> {
  static override CONSTRUCTOR_ID = 578650699
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
