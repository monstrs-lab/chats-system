import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface MessageActionScreenshotTakenValues {}

export class MessageActionScreenshotTaken extends TLConstructor<MessageActionScreenshotTakenValues> {
  static override CONSTRUCTOR_ID: number = 1200788123
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
