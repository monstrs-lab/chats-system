import { Injectable }            from '@nestjs/common'

import { PeerType }              from '@chats-system/messages-domain-module'
import { DialogId }              from '@chats-system/messages-domain-module'
import { DialogFactory }         from '@chats-system/messages-domain-module'
import { PeerIdInvalidError }    from '@chats-system/messages-domain-module'
import { MessageIdInvalidError } from '@chats-system/messages-domain-module'

import { IdGenPort }             from '../ports/index.js'
import { MessageRepository }     from '../repositories/index.js'
import { DialogRepository }      from '../repositories/index.js'

@Injectable()
export class ReadUserMessagesUseCase {
  constructor(
    private readonly messageRepository: MessageRepository,
    private readonly dialogRepository: DialogRepository,
    private readonly dialogFactory: DialogFactory,
    private readonly idGenPort: IdGenPort
  ) {}

  async execute(
    userId: bigint,
    peer: { peerId: bigint; peerType: PeerType },
    maxId: number
  ): Promise<{ pts: number; ptsCount: number; stillUnreadCount: number; maxId: number }> {
    const dialogId = DialogId.create(peer.peerType, userId, peer.peerId)

    const dialog = await this.dialogRepository.getByUserPeer(userId, peer.peerId, peer.peerType)

    if (!dialog) {
      throw new PeerIdInvalidError()
    }

    if (maxId === 0 || maxId >= 1000000000) {
      maxId = dialog.topMessage // eslint-disable-line no-param-reassign
    }

    if (dialog.unreadCount > 0 || maxId > dialog.readInboxMaxId) {
      const [maxInboxMessage] = await this.messageRepository.getByUserMessages(userId, [maxId])

      if (!maxInboxMessage) {
        throw new MessageIdInvalidError()
      }

      if (maxInboxMessage.senderUserId === userId) {
        maxId = 0 // eslint-disable-line no-param-reassign
      }
    }

    if (dialog.readInboxMaxId >= maxId || dialog.unreadCount === 0) {
      const pts = await this.idGenPort.getCurrentPtsId(userId)

      return {
        pts,
        ptsCount: 0,
        stillUnreadCount: 0,
        maxId,
      }
    }

    const readCount = await this.messageRepository.getUserDialogUnreadCount(
      userId,
      dialogId,
      dialog.readInboxMaxId,
      maxId
    )

    const stillUnreadCount = dialog.unreadCount - readCount < 0 ? 0 : dialog.unreadCount - readCount

    await this.dialogRepository.save(
      this.dialogFactory.updateDialogInboxRead(dialog, maxId, stillUnreadCount)
    )

    if (PeerType.USER === peer.peerType) {
      const outboxDialog = await this.dialogRepository.getByUserPeer(
        peer.peerId,
        userId,
        peer.peerType
      )

      if (!outboxDialog) {
        throw new PeerIdInvalidError()
      }

      const [replyMessage] = await this.messageRepository.getByUserMessages(peer.peerId, [maxId])

      if (!replyMessage) {
        throw new PeerIdInvalidError()
      }

      if (maxId > outboxDialog.readOutboxMaxId) {
        await this.dialogRepository.save(
          this.dialogFactory.updateDialogOutboxRead(outboxDialog, maxId)
        )
      }
    }

    return {
      pts: await this.idGenPort.getNextPtsId(userId),
      stillUnreadCount,
      ptsCount: 1,
      maxId,
    }
  }
}
