import { Injectable }                                                          from '@nestjs/common'

import { MessageRepository }                                                   from '@chats-system/messages-domain-module'
import { DialogId }                                         from '@chats-system/messages-domain-module'
import { PeerType }                               from '@chats-system/messages-domain-module'
import { IdGenPort }                    from '@chats-system/messages-domain-module'
import { MessageFilterType } from '@chats-system/messages-domain-module'
import { MessageFactory }                                                      from '@chats-system/messages-domain-module'

import { DialogFactory }                                       from '@chats-system/messages-domain-module'

import { DialogRepository }                     from '@chats-system/messages-domain-module'

interface OutboxMessage {
  message: {
    message: string
    date: bigint
  }
}

@Injectable()
export class CreateMessageUseCase {
  constructor(
    private readonly messageRepository: MessageRepository,
    private readonly messageFactory: MessageFactory,
    private readonly dialogRepository: DialogRepository,
    private readonly dialogFactory: DialogFactory,
    private readonly idGenPort: IdGenPort
  ) {}

  async execute(
    fromId: bigint,
    peer: { peerId: bigint; peerType: PeerType },
    outboxMessage: OutboxMessage
  ): Promise<{}> {
    if (peer.peerType === PeerType.USER) {
        return this.sendUserOutgoingMessage(fromId, peer, outboxMessage)
    }  

    throw new Error('Invalid peer type')
  }

  async sendUserOutgoingMessage(fromId: bigint,
    peer: { peerId: bigint; peerType: PeerType },
    outboxMessage: OutboxMessage
  ): Promise<{}> {
    return this.sendMessageToOutbox(fromId, peer, outboxMessage)
  }

  async sendMessageToOutbox(
    fromId: bigint,
    peer: { peerId: bigint; peerType: PeerType },
    outboxMessage: OutboxMessage
  ): Promise<{}> {
    const dialogId = DialogId.create(peer.peerType, fromId, peer.peerId)

    if (!dialogId) {
      throw new Error('Internal server error')
    }

    const { dialogMessageId, outboxMessageId, pts } = await this.idGenPort.createMessageIds(fromId)

    if (dialogMessageId === 0n || outboxMessageId === 0n || pts === 0n) {
      throw new Error('Internal server error')
    }

    // @ts-expect-error
    const message = await this.messageRepository.save(
      this.messageFactory.createMessage({
        userId: fromId,
        userMessageBoxId: outboxMessageId,
        dialogId1: dialogId.a,
        dialogId2: dialogId.b,
        dialogMessageId: dialogMessageId,
        senderUserId: fromId,
        peerType: peer.peerType,
        peerId: peer.peerId,
        messageFilterType: MessageFilterType.EMPTY,
        messageData: outboxMessage.message,
        message: outboxMessage.message.message,
        date: outboxMessage.message.date,
        mentioned: false,
        mediaUnread: false,
      })
    )

    if (!(peer.peerType === PeerType.USER || peer.peerType === PeerType.CHAT)) {
      throw new Error('Invalid peer type')
    }

    const dialog = await this.dialogRepository.getByUserAndPeer(fromId, peer.peerId, peer.peerType)

    if (!dialog) {
      await this.dialogRepository.save(
        this.dialogFactory.createDialog({
          userId: fromId,
          peerType: peer.peerType,
          peerId: peer.peerId,
          topMessage: outboxMessageId,
          unreadCount: 0,
          date: outboxMessage.message.date,
        })
      )
    } else {
      // TODO: update
    }

    return {}
  }
}
