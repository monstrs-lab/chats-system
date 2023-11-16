import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatPhotoEmptyValues {}

export class ChatPhotoEmpty extends TLConstructor<ChatPhotoEmptyValues> {
  static override CONSTRUCTOR_ID: number = 935395612
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
