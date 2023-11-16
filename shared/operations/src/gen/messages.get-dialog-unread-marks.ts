import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesGetDialogUnreadMarksValues {}

export class MessagesGetDialogUnreadMarks extends TLMethod<MessagesGetDialogUnreadMarksValues> {
  static override CONSTRUCTOR_ID = 585256482
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
