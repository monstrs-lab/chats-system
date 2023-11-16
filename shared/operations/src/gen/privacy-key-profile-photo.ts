import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyKeyProfilePhotoValues {}

export class PrivacyKeyProfilePhoto extends TLConstructor<PrivacyKeyProfilePhotoValues> {
  static override CONSTRUCTOR_ID: number = -1777000467
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
