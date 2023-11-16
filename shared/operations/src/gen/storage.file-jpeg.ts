import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StorageFileJpegValues {}

export class StorageFileJpeg extends TLConstructor<StorageFileJpegValues> {
  static override CONSTRUCTOR_ID: number = 8322574
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
