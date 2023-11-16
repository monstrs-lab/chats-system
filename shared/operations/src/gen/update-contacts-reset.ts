import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface UpdateContactsResetValues {}

export class UpdateContactsReset extends TLConstructor<UpdateContactsResetValues> {
  static override CONSTRUCTOR_ID: number = 1887741886
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
