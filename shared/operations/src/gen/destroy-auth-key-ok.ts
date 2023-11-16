import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface DestroyAuthKeyOkValues {}

export class DestroyAuthKeyOk extends TLConstructor<DestroyAuthKeyOkValues> {
  static override CONSTRUCTOR_ID: number = -161422892
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
