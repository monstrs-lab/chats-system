import type { Dialog }  from '@chats-system/messages-domain-module'
import type { Message } from '@chats-system/messages-domain-module'

export abstract class TransactionalRepository {
  abstract saveMessagesWithDialogs(messages: Array<Message>, dialogs: Array<Dialog>): Promise<void>
}
