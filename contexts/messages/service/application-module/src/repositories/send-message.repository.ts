import type { Message } from '@chats-system/messages-domain-module'
import type { Dialog }  from '@chats-system/messages-domain-module'

export abstract class SendMessageRepository {
  abstract save(
    outboxMessage: Message,
    inboxMessage: Message,
    outboxDialog: Dialog,
    inboxDialog: Dialog
  ): Promise<void>
}
