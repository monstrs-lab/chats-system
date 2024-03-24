/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@monstrs/base-types'

import type { MessageEntity }     from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { Message }                from '@chats-system/messages-domain-module'

@Injectable()
export class MessageMapper {
  fromPersistence(entity: MessageEntity): Message {
    const properties: Omit<ExtractProperties<Message>, 'autoCommit'> = {
      id: entity.id,
      messageId: entity.messageId,
      randomId: entity.randomId,
      userId: entity.userId,
      peerType: entity.peerType,
      peerId: entity.peerId,
      dialogId1: entity.dialogId1,
      dialogId2: entity.dialogId2,
      message: entity.message,
      createdAt: entity.createdAt,
    }

    return Object.assign(new Message(), properties)
  }

  toPersistence(message: Message, entity: MessageEntity): MessageEntity {
    entity.id = message.id
    entity.messageId = message.messageId
    entity.randomId = message.randomId
    entity.userId = message.userId
    entity.peerType = message.peerType
    entity.peerId = message.peerId
    entity.dialogId1 = message.dialogId1
    entity.dialogId2 = message.dialogId2
    entity.message = message.message
    entity.createdAt = message.createdAt

    return entity
  }
}
