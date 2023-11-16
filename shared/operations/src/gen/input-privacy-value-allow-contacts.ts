import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPrivacyValueAllowContactsValues {}

export class InputPrivacyValueAllowContacts extends TLConstructor<InputPrivacyValueAllowContactsValues> {
  static override CONSTRUCTOR_ID: number = 218751099
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
