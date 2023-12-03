import type { CreateMessageDto } from '../dtos/index.js'

import { Injectable }            from '@nestjs/common'
import random                    from 'crypto-random-bigint'

import { Message }               from '../entities/index.js'

@Injectable()
export class MessageFactory {
  createMessage(createMessageDto: CreateMessageDto): Message {
    return new Message(
      random(63),
      createMessageDto.randomId || random(63),
      createMessageDto.userId,
      createMessageDto.messageId,
      createMessageDto.dialogId1,
      createMessageDto.dialogId2,
      createMessageDto.dialogMessageId,
      createMessageDto.senderUserId,
      createMessageDto.peerType,
      createMessageDto.peerId,
      createMessageDto.messageFilterType,
      createMessageDto.messageData,
      createMessageDto.message,
      createMessageDto.date,
      createMessageDto.mentioned || false,
      createMessageDto.mediaUnread || false,
      createMessageDto.pinned || false,
      createMessageDto.deleted || false
    )
  }
}
