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
}
