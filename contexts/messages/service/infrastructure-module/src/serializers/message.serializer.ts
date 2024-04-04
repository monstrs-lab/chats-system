import type { Message } from '@chats-system/messages-domain-module'

import * as rpc         from '@chats-system/messages-rpc/abstractions'

export class MessageSerializer extends rpc.Message {
  constructor(private readonly serializable: Message) {
    super()
  }

  get id(): bigint {
    return this.serializable.id
  }

  get messageId(): bigint {
    return this.serializable.messageId
  }

  get randomId(): bigint {
    return this.serializable.randomId
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

  get dialogId1(): bigint {
    return this.serializable.dialogId1
  }

  get dialogId2(): bigint {
    return this.serializable.dialogId2
  }

  get message(): string {
    return this.serializable.message
  }
}
