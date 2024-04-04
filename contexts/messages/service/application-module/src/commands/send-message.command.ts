import type { PeerType } from '@chats-system/messages-domain-module'

export class SendMessageCommand {
  constructor(
    public readonly randomId: bigint,
    public readonly fromId: bigint,
    public readonly peerType: PeerType,
    public readonly peerId: bigint,
    public readonly message: string
  ) {}
}
