/* eslint-disable no-param-reassign */

import type { DialogEntity } from '../entities/index.js'

import { Injectable }      from '@nestjs/common'

import { Dialog }            from '@chats-system/messages-domain-module'

@Injectable()
export class DialogMapper {
  fromPersistence(entity: DialogEntity): Dialog {
    return new Dialog(
      entity.id,
      entity.userId,
      entity.peerType,
      entity.peerId,
      entity.peerDialogId,
      entity.date,
      entity.pinned,
      entity.topMessage,
      entity.readInboxMaxId,
      entity.readOutboxMaxId,
      entity.unreadCount,
      entity.unreadMark,
      entity.unreadMentionsCount,
      entity.unreadReactionsCount,
      entity.folderId,
      entity.folderPinned
    )
  }

  toPersistence(dialog: Dialog, entity: DialogEntity): DialogEntity {
    entity.id = dialog.id
      entity.userId = dialog.userId
      entity.peerType = dialog.peerType
      entity.peerId = dialog.peerId
      entity.peerDialogId = dialog.peerDialogId
      entity.date = dialog.date
      entity.pinned = dialog.pinned
      entity.topMessage = dialog.topMessage
      entity.readInboxMaxId = dialog.readInboxMaxId
      entity.readOutboxMaxId = dialog.readOutboxMaxId
      entity.unreadCount = dialog.unreadCount
      entity.unreadMark = dialog.unreadMark
      entity.unreadMentionsCount = dialog.unreadMentionsCount
      entity.unreadReactionsCount = dialog.unreadReactionsCount
      entity.folderId = dialog.folderId
      entity.folderPinned = dialog.folderPinned

    return entity
  }
}
