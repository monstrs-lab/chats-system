import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EncryptedFileEmptyValues {}

export class EncryptedFileEmpty extends TLConstructor<EncryptedFileEmptyValues> {
  static override CONSTRUCTOR_ID: number = -1038136962
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
