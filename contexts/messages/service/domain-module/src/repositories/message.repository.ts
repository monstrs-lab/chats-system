import type { DialogId, Message } from '../entities/index.js'

export abstract class MessageRepository {
  abstract save(message: Message): Promise<Message>

  abstract getByUserDialog(userId: bigint, dialogId: DialogId): Promise<Array<Message>>
}
