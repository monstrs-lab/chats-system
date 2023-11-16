import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StorageFileMp4Values {}

export class StorageFileMp4 extends TLConstructor<StorageFileMp4Values> {
  static override CONSTRUCTOR_ID: number = -1278304028
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
