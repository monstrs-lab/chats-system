import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StorageFileMovValues {}

export class StorageFileMov extends TLConstructor<StorageFileMovValues> {
  static override CONSTRUCTOR_ID: number = 1258941372
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
