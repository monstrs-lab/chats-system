import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface InputMessagesFilterMyMentionsValues {}

export class InputMessagesFilterMyMentions extends TLConstructor<InputMessagesFilterMyMentionsValues> {
  static override CONSTRUCTOR_ID: number = -1040652646
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
