import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SecureFileEmptyValues {}

export class SecureFileEmpty extends TLConstructor<SecureFileEmptyValues> {
  static override CONSTRUCTOR_ID: number = 1679398724
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
