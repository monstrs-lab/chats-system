import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface HelpGetCdnConfigValues {}

export class HelpGetCdnConfig extends TLMethod<HelpGetCdnConfigValues> {
  static override CONSTRUCTOR_ID = 1375900482
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
