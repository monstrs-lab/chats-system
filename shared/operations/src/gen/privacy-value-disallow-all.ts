import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface PrivacyValueDisallowAllValues {}

export class PrivacyValueDisallowAll extends TLConstructor<PrivacyValueDisallowAllValues> {
  static override CONSTRUCTOR_ID: number = -1955338397
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
