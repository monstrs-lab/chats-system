import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface EmojiListNotModifiedValues {}

export class EmojiListNotModified extends TLConstructor<EmojiListNotModifiedValues> {
  static override CONSTRUCTOR_ID: number = 1209970170
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
