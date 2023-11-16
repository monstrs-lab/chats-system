import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface UpdatesGetStateValues {}

export class UpdatesGetState extends TLMethod<UpdatesGetStateValues> {
  static override CONSTRUCTOR_ID = -304838614
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
