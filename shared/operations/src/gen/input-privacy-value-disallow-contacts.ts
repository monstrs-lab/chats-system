import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPrivacyValueDisallowContactsValues {}

export class InputPrivacyValueDisallowContacts extends TLConstructor<InputPrivacyValueDisallowContactsValues> {
  static override CONSTRUCTOR_ID: number = 195371015
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
