import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface StorageFileGifValues {}

export class StorageFileGif extends TLConstructor<StorageFileGifValues> {
  static override CONSTRUCTOR_ID: number = -891180321
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
