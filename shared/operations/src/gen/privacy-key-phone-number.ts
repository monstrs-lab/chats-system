import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyKeyPhoneNumberValues {}

export class PrivacyKeyPhoneNumber extends TLConstructor<PrivacyKeyPhoneNumberValues> {
  static override CONSTRUCTOR_ID: number = -778378131
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}