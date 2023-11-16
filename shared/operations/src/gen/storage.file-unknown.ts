import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StorageFileUnknownValues {}

export class StorageFileUnknown extends TLConstructor<StorageFileUnknownValues> {
  static override CONSTRUCTOR_ID: number = -1432995067
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
