import type { Message } from '@chats-system/messages-domain-module'

export abstract class MessageRepository {
  abstract save(message: Message): Promise<Message>

  abstract findById(messageId: bigint): Promise<Message | undefined>
}
