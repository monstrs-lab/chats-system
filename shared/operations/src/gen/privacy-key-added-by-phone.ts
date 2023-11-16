import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyKeyAddedByPhoneValues {}

export class PrivacyKeyAddedByPhone extends TLConstructor<PrivacyKeyAddedByPhoneValues> {
  static override CONSTRUCTOR_ID: number = 1124062251
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
