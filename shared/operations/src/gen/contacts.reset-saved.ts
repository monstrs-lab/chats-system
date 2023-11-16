import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsResetSavedValues {}

export class ContactsResetSaved extends TLMethod<ContactsResetSavedValues> {
  static override CONSTRUCTOR_ID = -2020263951
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
