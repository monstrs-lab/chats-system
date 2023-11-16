import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetSupportValues {}

export class HelpGetSupport extends TLMethod<HelpGetSupportValues> {
  static override CONSTRUCTOR_ID = -1663104819
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}