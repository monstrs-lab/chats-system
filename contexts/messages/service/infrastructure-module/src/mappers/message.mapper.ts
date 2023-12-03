/* eslint-disable no-param-reassign */

import type { MessageEntity } from '../entities/index.js'

import { Injectable }         from '@nestjs/common'

import { Message }            from '@chats-system/messages-domain-module'

@Injectable()
export class MessageMapper {
  fromPersistence(entity: MessageEntity): Message {
    return new Message(
      entity.id,
      entity.randomId,
      entity.userId,
      entity.messageId,
      entity.dialogId1,
      entity.dialogId2,
      entity.dialogMessageId,
      entity.senderUserId,
      entity.peerType,
      entity.peerId,
      entity.messageFilterType,
      entity.messageData,
      entity.message,
      entity.date,
      entity.mentioned,
      entity.mediaUnread,
      entity.pinned,
      entity.deleted
    )
  }

  toPersistence(message: Message, entity: MessageEntity): MessageEntity {
    entity.id = message.id
    entity.randomId = message.randomId
    entity.userId = message.userId
    entity.messageId = message.messageId
    entity.dialogId1 = message.dialogId1
    entity.dialogId2 = message.dialogId2
    entity.dialogMessageId = message.dialogMessageId
    entity.senderUserId = message.senderUserId
    entity.peerType = message.peerType
    entity.peerId = message.peerId
    entity.messageFilterType = message.messageFilterType
    entity.messageData = message.messageData
    entity.message = message.message
    entity.date = message.date
    entity.mentioned = message.mentioned
    entity.mediaUnread = message.mediaUnread
    entity.pinned = message.pinned
    entity.deleted = message.deleted

    return entity
  }
}
