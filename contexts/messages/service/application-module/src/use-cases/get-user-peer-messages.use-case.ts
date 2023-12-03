import type { Message }      from '@chats-system/messages-domain-module'
import type { PeerType }     from '@chats-system/messages-domain-module'

import { Injectable }        from '@nestjs/common'

import { DialogId }          from '@chats-system/messages-domain-module'

import { MessageRepository } from '../repositories/index.js'

@Injectable()
export class GetUserPeerMessagesUseCase {
  constructor(private readonly messageRepository: MessageRepository) {}

  async execute(
    userId: bigint,
    peer: { peerId: bigint; peerType: PeerType }
  ): Promise<Array<Message>> {
    return this.messageRepository.getByUserDialog(
      userId,
      DialogId.create(peer.peerType, userId, peer.peerId)!
    )
  }
}
