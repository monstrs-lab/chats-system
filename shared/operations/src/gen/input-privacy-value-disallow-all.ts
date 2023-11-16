import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputPrivacyValueDisallowAllValues {}

export class InputPrivacyValueDisallowAll extends TLConstructor<InputPrivacyValueDisallowAllValues> {
  static override CONSTRUCTOR_ID: number = -697604407
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
