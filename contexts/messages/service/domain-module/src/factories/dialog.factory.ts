import type { CreateDialogDto } from '../dtos/index.js'

import { Injectable }           from '@nestjs/common'
import random                   from 'crypto-random-bigint'

import { Dialog }               from '../entities/index.js'
import { PeerType }             from '../enums/index.js'

const makePeerDialogId = (peerId: bigint, peerType: PeerType): bigint => {
  if (peerType === PeerType.SELF || peerType === PeerType.USER) {
    return peerId
  }

  if (peerType === PeerType.CHAT || peerType === PeerType.CHANNEL) {
    return peerId * -1n
  }

  return 0n
}

@Injectable()
export class DialogFactory {
  createDialog(createDialogDto: CreateDialogDto): Dialog {
    return new Dialog(
      random(63),
      createDialogDto.userId,
      createDialogDto.peerType,
      createDialogDto.peerId,
      createDialogDto.date,
      makePeerDialogId(createDialogDto.peerId, createDialogDto.peerType),
      false,
      createDialogDto.topMessage || 0,
      createDialogDto.readInboxMaxId || 0,
      createDialogDto.readOutboxMaxId || 0,
      createDialogDto.unreadCount || 0,
      createDialogDto.unreadMark || false,
      0,
      0
    )
  }

  updateDialog(dialog: Dialog, topMessage: number, date: bigint, unreadCount: number = 0): Dialog {
    return new Dialog(
      dialog.id,
      dialog.userId,
      dialog.peerType,
      dialog.peerId,
      date,
      dialog.peerDialogId,
      dialog.pinned,
      topMessage,
      dialog.readInboxMaxId,
      dialog.readOutboxMaxId,
      unreadCount,
      dialog.unreadMark,
      dialog.unreadMentionsCount,
      dialog.unreadReactionsCount,
      dialog.folderId,
      dialog.folderPinned
    )
  }
}
