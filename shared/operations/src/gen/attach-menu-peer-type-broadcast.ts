import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface AttachMenuPeerTypeBroadcastValues {}

export class AttachMenuPeerTypeBroadcast extends TLConstructor<AttachMenuPeerTypeBroadcastValues> {
  static override CONSTRUCTOR_ID: number = 2080104188
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
