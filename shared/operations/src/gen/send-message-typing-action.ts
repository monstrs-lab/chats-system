import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface SendMessageTypingActionValues {}

export class SendMessageTypingAction extends TLConstructor<SendMessageTypingActionValues> {
  static override CONSTRUCTOR_ID: number = 381645902
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
