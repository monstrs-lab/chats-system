import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessagesFilterGifValues {}

export class InputMessagesFilterGif extends TLConstructor<InputMessagesFilterGifValues> {
  static override CONSTRUCTOR_ID: number = -3644025
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
