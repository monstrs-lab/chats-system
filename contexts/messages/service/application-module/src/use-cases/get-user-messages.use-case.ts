import type { Message }      from '@chats-system/messages-domain-module'

import { Injectable }        from '@nestjs/common'

import { MessageRepository } from '../repositories/index.js'

@Injectable()
export class GetUserMessagesUseCase {
  constructor(private readonly messageRepository: MessageRepository) {}

  async execute(userId: bigint, messageIds: Array<number>): Promise<Array<Message>> {
    return this.messageRepository.getByUserMessages(userId, messageIds)
  }
}
