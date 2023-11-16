import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DestroyAuthKeyFailValues {}

export class DestroyAuthKeyFail extends TLConstructor<DestroyAuthKeyFailValues> {
  static override CONSTRUCTOR_ID: number = -368010477
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
