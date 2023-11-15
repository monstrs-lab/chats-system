import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

export class DestroyAuthKey extends TLMethod {
  static override CONSTRUCTOR_ID = -784117408
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
