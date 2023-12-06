import type { DialogId } from '@chats-system/messages-domain-module'
import type { Message }  from '@chats-system/messages-domain-module'

export abstract class MessageRepository {
  abstract getByUserDialog(userId: bigint, dialogId: DialogId): Promise<Array<Message>>

  abstract getByUserMessages(userId: bigint, messageIds: Array<number>): Promise<Array<Message>>

  abstract getUserDialogUnreadCount(
    userId: bigint,
    dialogId: DialogId,
    readInboxMaxId: number,
    maxId: number
  ): Promise<number>
}
