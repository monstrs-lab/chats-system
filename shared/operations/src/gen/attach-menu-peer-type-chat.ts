import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AttachMenuPeerTypeChatValues {}

export class AttachMenuPeerTypeChat extends TLConstructor<AttachMenuPeerTypeChatValues> {
  static override CONSTRUCTOR_ID: number = 84480319
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
