import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetPromoDataValues {}

export class HelpGetPromoData extends TLMethod<HelpGetPromoDataValues> {
  static override CONSTRUCTOR_ID = -1063816159
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
