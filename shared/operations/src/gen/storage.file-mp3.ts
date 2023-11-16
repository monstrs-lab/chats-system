import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StorageFileMp3Values {}

export class StorageFileMp3 extends TLConstructor<StorageFileMp3Values> {
  static override CONSTRUCTOR_ID: number = 1384777335
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
