/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@monstrs/base-types'

import type { DialogEntity }      from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { Dialog }                 from '@chats-system/messages-domain-module'

@Injectable()
export class DialogMapper {
  fromPersistence(entity: DialogEntity): Dialog {
    const properties: Omit<ExtractProperties<Dialog>, 'autoCommit'> = {
      id: entity.id,
      userId: entity.userId,
      peerType: entity.peerType,
      peerId: entity.peerId,
      topMessageId: entity.topMessageId,
      readInboxMaxId: entity.readInboxMaxId,
      readOutboxMaxId: entity.readOutboxMaxId,
      unreadCount: entity.unreadCount,
      createdAt: entity.createdAt,
    }

    return Object.assign(new Dialog(), properties)
  }

  toPersistence(dialog: Dialog, entity: DialogEntity): DialogEntity {
    entity.id = dialog.id
    entity.userId = dialog.userId
    entity.peerType = dialog.peerType
    entity.peerId = dialog.peerId
    entity.topMessageId = dialog.topMessageId
    entity.readInboxMaxId = dialog.readInboxMaxId
    entity.readOutboxMaxId = dialog.readOutboxMaxId
    entity.unreadCount = dialog.unreadCount
    entity.createdAt = dialog.createdAt

    return entity
  }
}
