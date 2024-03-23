import type { Message }         from '@chats-system/messages-domain-module'

import { ListMessagesResponse } from '@chats-system/messages-rpc/abstractions'

import { MessageSerializer }    from './message.serializer.js'

export class ListMessagesSerializer extends ListMessagesResponse {
  constructor(private readonly serializable: { messages: Array<Message>; hasNextPage: boolean }) {
    super()
  }

  get messages(): Array<MessageSerializer> {
    return this.serializable.messages.map((message) => new MessageSerializer(message))
  }

  get hasNextPage(): boolean {
    return this.serializable.hasNextPage
  }
}
