import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLMethod }                   from '@monstrs/mtproto-tl-core'

interface MessagesClearAllDraftsValues {}

export class MessagesClearAllDrafts extends TLMethod<MessagesClearAllDraftsValues> {
  static override CONSTRUCTOR_ID = 2119757468
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
