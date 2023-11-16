import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsGetStatusesValues {}

export class ContactsGetStatuses extends TLMethod<ContactsGetStatusesValues> {
  static override CONSTRUCTOR_ID = -995929106
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
