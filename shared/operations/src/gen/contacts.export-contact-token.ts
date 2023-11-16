import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface ContactsExportContactTokenValues {}

export class ContactsExportContactToken extends TLMethod<ContactsExportContactTokenValues> {
  static override CONSTRUCTOR_ID = -127582169
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
