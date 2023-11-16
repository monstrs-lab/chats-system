import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetNearestDcValues {}

export class HelpGetNearestDc extends TLMethod<HelpGetNearestDcValues> {
  static override CONSTRUCTOR_ID = 531836966
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
