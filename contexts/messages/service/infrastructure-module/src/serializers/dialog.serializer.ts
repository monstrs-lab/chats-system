import type { Dialog } from '@chats-system/messages-domain-module'

import * as rpc        from '@chats-system/messages-rpc/abstractions'

export class DialogSerializer extends rpc.Dialog {
  constructor(private readonly serializable: Dialog) {
    super()
  }

  get id(): bigint {
    return this.serializable.id
  }

  get userId(): bigint {
    return this.serializable.userId
  }

  get peerType(): rpc.PeerType {
    return this.serializable.peerType
  }

  get peerId(): bigint {
    return this.serializable.peerId
  }

  get topMessageId(): bigint {
    return this.serializable.topMessageId
  }

  get readInboxMaxId(): bigint {
    return this.serializable.readInboxMaxId
  }

  get readOutboxMaxId(): bigint {
    return this.serializable.readOutboxMaxId
  }

  get unreadCount(): number {
    return this.serializable.unreadCount
  }
}
