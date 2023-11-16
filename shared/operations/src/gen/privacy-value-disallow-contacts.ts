import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyValueDisallowContactsValues {}

export class PrivacyValueDisallowContacts extends TLConstructor<PrivacyValueDisallowContactsValues> {
  static override CONSTRUCTOR_ID: number = -125240806
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
