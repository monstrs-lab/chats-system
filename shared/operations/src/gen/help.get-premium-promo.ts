import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetPremiumPromoValues {}

export class HelpGetPremiumPromo extends TLMethod<HelpGetPremiumPromoValues> {
  static override CONSTRUCTOR_ID = -1206152236
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
