import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputStickerSetAnimatedEmojiValues {}

export class InputStickerSetAnimatedEmoji extends TLConstructor<InputStickerSetAnimatedEmojiValues> {
  static override CONSTRUCTOR_ID: number = 42402760
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
