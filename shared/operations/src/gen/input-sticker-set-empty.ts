import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputStickerSetEmptyValues {}

export class InputStickerSetEmpty extends TLConstructor<InputStickerSetEmptyValues> {
  static override CONSTRUCTOR_ID: number = -4838507
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}