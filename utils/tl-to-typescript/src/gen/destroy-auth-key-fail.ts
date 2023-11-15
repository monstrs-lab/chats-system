import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

export class DestroyAuthKeyFail extends TLConstructor {
  static override CONSTRUCTOR_ID: number = -368010477
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
