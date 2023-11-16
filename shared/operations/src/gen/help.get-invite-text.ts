import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetInviteTextValues {}

export class HelpGetInviteText extends TLMethod<HelpGetInviteTextValues> {
  static override CONSTRUCTOR_ID = 1295590211
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
