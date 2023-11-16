import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsGetSavedValues {}

export class ContactsGetSaved extends TLMethod<ContactsGetSavedValues> {
  static override CONSTRUCTOR_ID = -2098076769
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
