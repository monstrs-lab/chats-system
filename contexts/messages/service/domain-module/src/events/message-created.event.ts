import type { PeerType } from '../enums/index.js'

export class MessageCreatedEvent {
  constructor(
    public readonly id: bigint,
    public readonly messageId: bigint,
    public readonly randomId: bigint,
    public readonly fromId: bigint,
    public readonly userId: bigint,
    public readonly peerType: PeerType,
    public readonly peerId: bigint,
    public readonly dialogId1: bigint,
    public readonly dialogId2: bigint,
    public readonly message: string,
    public readonly createdAt: Date
  ) {}
}
