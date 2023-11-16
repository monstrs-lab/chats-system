import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyKeyPhoneCallValues {}

export class PrivacyKeyPhoneCall extends TLConstructor<PrivacyKeyPhoneCallValues> {
  static override CONSTRUCTOR_ID: number = 1030105979
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
