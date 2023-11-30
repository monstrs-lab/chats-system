import type { PeerType }                    from '../enums/index.js'

import type { MessageFilterType } from '../enums/index.js'

export class CreateMessageDto {
  constructor(
    public readonly userId: bigint,
    public readonly userMessageBoxId: bigint,
    public readonly dialogId1: bigint,
    public readonly dialogId2: bigint,
    public readonly dialogMessageId: bigint,
    public readonly senderUserId: bigint,
    public readonly peerType: PeerType,
    public readonly peerId: bigint,
    public readonly messageFilterType: MessageFilterType,
    public readonly messageData: object,
    public readonly message: string,
    public readonly date: bigint,
    public readonly mentioned?: boolean,
    public readonly mediaUnread?: boolean,
    public readonly pinned?: boolean,
    public readonly deleted?: boolean
  ) {}
}
