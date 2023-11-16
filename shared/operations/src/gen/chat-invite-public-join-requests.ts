import type { TLExtendedSchemaParam } from '@monstrs/mtproto-tl-types'

import { TLConstructor }              from '@monstrs/mtproto-tl-core'

interface ChatInvitePublicJoinRequestsValues {}

export class ChatInvitePublicJoinRequests extends TLConstructor<ChatInvitePublicJoinRequestsValues> {
  static override CONSTRUCTOR_ID: number = -317687113
  static override PARAMS: Array<TLExtendedSchemaParam> = []
}
