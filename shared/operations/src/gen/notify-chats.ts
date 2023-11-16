import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface NotifyChatsValues {}

export class NotifyChats extends TLConstructor<NotifyChatsValues> {
  static override CONSTRUCTOR_ID: number = -1073230141
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
