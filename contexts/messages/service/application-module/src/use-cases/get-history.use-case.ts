import { Injectable }                                                          from '@nestjs/common'

import  type { Message }                                         from '@chats-system/messages-domain-module'

import { MessageRepository }                     from '@chats-system/messages-domain-module'
import { PeerType, DialogId }                               from '@chats-system/messages-domain-module'

@Injectable()
export class GetHistoryUseCase {
  constructor(
    private readonly messageRepository: MessageRepository,
  ) {}

  async execute(
    userId: bigint,
    peer: { peerId: bigint; peerType: PeerType },
  ): Promise<Array<Message>> {
    return this.messageRepository.getByUserDialog(userId, DialogId.create(peer.peerType, userId, peer.peerId)!)
  }
}
