import type { PeerType } from '../enums/index.js'

export class DialogCreatedEvent {
  constructor(
    public readonly dialogId: bigint,
    public readonly userId: bigint,
    public readonly peerType: PeerType,
    public readonly peerId: bigint,
    public readonly topMessageId: bigint,
    public readonly readInboxMaxId: bigint,
    public readonly readOutboxMaxId: bigint,
    public readonly unreadCount: number,
    public readonly createdAt: Date
  ) {}
}
