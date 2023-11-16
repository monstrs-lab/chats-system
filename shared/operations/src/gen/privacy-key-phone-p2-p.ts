import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyKeyPhoneP2PValues {}

export class PrivacyKeyPhoneP2P extends TLConstructor<PrivacyKeyPhoneP2PValues> {
  static override CONSTRUCTOR_ID: number = 961092808
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
