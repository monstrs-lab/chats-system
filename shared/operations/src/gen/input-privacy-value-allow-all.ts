import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPrivacyValueAllowAllValues {}

export class InputPrivacyValueAllowAll extends TLConstructor<InputPrivacyValueAllowAllValues> {
  static override CONSTRUCTOR_ID: number = 407582158
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
