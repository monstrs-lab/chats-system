import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetSupportNameValues {}

export class HelpGetSupportName extends TLMethod<HelpGetSupportNameValues> {
  static override CONSTRUCTOR_ID = -748624084
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
