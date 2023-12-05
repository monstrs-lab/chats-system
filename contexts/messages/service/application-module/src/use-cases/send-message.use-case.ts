import type { Dialog }             from '@chats-system/messages-domain-module'
import type { Message }            from '@chats-system/messages-domain-module'
import type { PeerType }           from '@chats-system/messages-domain-module'

import { Injectable }              from '@nestjs/common'

import { DialogId }                from '@chats-system/messages-domain-module'
import { MessageFilterType }       from '@chats-system/messages-domain-module'
import { DialogFactory }           from '@chats-system/messages-domain-module'
import { MessageFactory }          from '@chats-system/messages-domain-module'

import { IdGenPort }               from '../ports/index.js'
import { TransactionalRepository } from '../repositories/index.js'
import { DialogRepository }        from '../repositories/index.js'

@Injectable()
export class SendMessageUseCase {
  constructor(
    private readonly transactionalRepository: TransactionalRepository,
    private readonly dialogRepository: DialogRepository,
    private readonly dialogFactory: DialogFactory,
    private readonly messageFactory: MessageFactory,
    private readonly idGenPort: IdGenPort
  ) {}

  async execute(
    fromId: bigint,
    peerId: bigint,
    peerType: PeerType,
    randomId: bigint,
    message: string
  ): Promise<{
    outboxMessage: Message
    inboxMessage: Message
    ptsCount: number
    pts: number
  }> {
    const date = Math.floor(Date.now() / 1000) // TODO: change to date

    const { dialogMessageId, outboxMessageId, inboxMessageId, pts } =
      await this.idGenPort.createMessageIds(fromId, peerId)

    if (dialogMessageId === 0n || outboxMessageId === 0 || inboxMessageId === 0) {
      throw new Error('Internal server error: nullable id')
    }

    const dialogId = DialogId.create(peerType, fromId, peerId)

    const outboxMessage = await this.createOutboxMessage(
      fromId,
      peerId,
      peerType,
      dialogId,
      dialogMessageId,
      outboxMessageId,
      { message },
      message,
      date
    )

    const inboxMessage = await this.createInboxMessage(
      fromId,
      peerId,
      peerType,
      dialogId,
      dialogMessageId,
      randomId,
      inboxMessageId,
      { message },
      message,
      date
    )

    const outboxDialog = await this.createDialog(fromId, peerId, peerType, outboxMessageId, date, 0)
    const inboxDialog = await this.createDialog(peerId, fromId, peerType, inboxMessageId, date, 1)

    await this.transactionalRepository.saveMessagesWithDialogs(
      [outboxMessage, inboxMessage],
      [outboxDialog, inboxDialog]
    )

    return {
      outboxMessage,
      inboxMessage,
      ptsCount: 1,
      pts,
    }
  }

  async createDialog(
    fromId: bigint,
    peerId: bigint,
    peerType: PeerType,
    topMessage: number,
    date: number,
    unreadCount: number = 0
  ): Promise<Dialog> {
    const dialog = await this.dialogRepository.getByUserPeer(fromId, peerId, peerType)

    if (!dialog) {
      return this.dialogFactory.createDialog({
        userId: fromId,
        peerType,
        peerId,
        topMessage,
        unreadCount,
        date: BigInt(date),
      })
    }

    return this.dialogFactory.updateDialog(
      dialog,
      topMessage,
      BigInt(date),
      unreadCount > 0 ? dialog.unreadCount + unreadCount : unreadCount
    )
  }

  async createOutboxMessage(
    fromId: bigint,
    peerId: bigint,
    peerType: PeerType,
    dialogId: DialogId,
    dialogMessageId: bigint,
    messageId: number,
    messageData: object,
    message: string,
    date: number
  ): Promise<Message> {
    return this.messageFactory.createMessage({
      messageId,
      userId: fromId,
      dialogId1: dialogId.a,
      dialogId2: dialogId.b,
      dialogMessageId,
      peerType,
      peerId,
      senderUserId: fromId,
      messageFilterType: MessageFilterType.EMPTY,
      messageData,
      message,
      date,
      mentioned: false,
      mediaUnread: false,
    })
  }

  async createInboxMessage(
    fromId: bigint,
    peerId: bigint,
    peerType: PeerType,
    dialogId: DialogId,
    dialogMessageId: bigint,
    randomId: bigint,
    messageId: number,
    messageData: object,
    message: string,
    date: number
  ): Promise<Message> {
    return this.messageFactory.createMessage({
      messageId,
      userId: peerId,
      dialogId1: dialogId.a,
      dialogId2: dialogId.b,
      dialogMessageId,
      randomId,
      peerType,
      peerId,
      senderUserId: fromId,
      messageFilterType: MessageFilterType.EMPTY,
      messageData,
      message,
      date,
      mentioned: false,
      mediaUnread: false,
    })
  }
}
