import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyValueAllowAllValues {}

export class PrivacyValueAllowAll extends TLConstructor<PrivacyValueAllowAllValues> {
  static override CONSTRUCTOR_ID: number = 1698855810
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
