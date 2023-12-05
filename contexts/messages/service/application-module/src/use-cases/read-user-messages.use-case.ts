import { PeerType }     from '@chats-system/messages-domain-module'

import { Injectable }        from '@nestjs/common'

import { DialogId, DialogFactory }          from '@chats-system/messages-domain-module'

import { MessageRepository, DialogRepository } from '../repositories/index.js'
import { IdGenPort } from '../ports/index.js'

@Injectable()
export class ReadUserMessagesUseCase {
  constructor(private readonly messageRepository: MessageRepository,
    private readonly dialogRepository: DialogRepository,
    private readonly dialogFactory: DialogFactory,
    private readonly idGenPort: IdGenPort
    ) {}

  async execute(
    userId: bigint,
    peer: { peerId: bigint; peerType: PeerType },
    maxId: number
  ): Promise<{ pts: number, ptsCount: number}> {
    const dialogId = DialogId.create(peer.peerType, userId, peer.peerId)

    const dialog = await this.dialogRepository.getByUserPeer(
      userId,
      peer.peerId,
      peer.peerType
    )

    if (!dialog) {
      throw new Error('Invalid peer') // TODO: move to errors
    }
    
    if (maxId === 0 || maxId >= 1000000000) {
      maxId = dialog.topMessage
    }

    if (dialog.unreadCount > 0 || maxId > dialog.readInboxMaxId) {
      const maxInboxMessage = await this.messageRepository.getByUserMessage(userId, maxId)

      if (!maxInboxMessage) {
        throw new Error('Invalid message id') // TODO: move to errors
      }

      if (maxInboxMessage.senderUserId === userId) {
        maxId = 0
      }
    }

    if (dialog.readInboxMaxId >= maxId || dialog.unreadCount === 0) {
      const pts = await this.idGenPort.getCurrentPtsId(userId)

      return {
        pts,
        ptsCount: 0
      }
    }

    if (maxId > dialog.readInboxMaxId) {
      const readCount = await this.messageRepository.getUserDialogUnreadCount(
        userId,
        dialogId,
        dialog.readInboxMaxId,
        maxId
      )

      const unreadCount = (dialog.unreadCount - readCount) < 0 ? 0 : dialog.unreadCount - readCount

      await this.dialogRepository.save(
        this.dialogFactory.updateDialogReadInboxMaxId(dialog, maxId, unreadCount)
      )

        if (PeerType.USER === peer.peerType) {
          const outboxDialog = await this.dialogRepository.getByUserPeer(
            peer.peerId,
            userId,
            peer.peerType
          )

          if (!outboxDialog) {
            throw new Error('Invalid peer') // TODO: move to errors
          }

          const replyMessage = await this.messageRepository.getByUserMessage(
            peer.peerId,
            maxId
          )

          if (!replyMessage)  {
            throw new Error('Invalid peer') // TODO: move to errors
          }

          if (maxId > outboxDialog.readOutboxMaxId) {
            await this.dialogRepository.save(this.dialogFactory.updateDialogReadOutboxMaxId(dialog, maxId))
          }          
        }
    }

    return {
        pts: await this.idGenPort.getNextPtsId(userId),
        ptsCount: 1
    }
    
  }
}
