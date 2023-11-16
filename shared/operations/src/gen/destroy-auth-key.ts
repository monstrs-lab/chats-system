import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface DestroyAuthKeyValues {}

export class DestroyAuthKey extends TLMethod<DestroyAuthKeyValues> {
  static override CONSTRUCTOR_ID = -784117408
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
