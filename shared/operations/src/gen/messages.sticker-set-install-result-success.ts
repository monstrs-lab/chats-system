import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessagesStickerSetInstallResultSuccessValues {}

export class MessagesStickerSetInstallResultSuccess extends TLConstructor<MessagesStickerSetInstallResultSuccessValues> {
  static override CONSTRUCTOR_ID: number = 946083368
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
