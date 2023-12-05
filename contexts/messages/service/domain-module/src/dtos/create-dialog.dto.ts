import type { PeerType } from '../enums/index.js'

export class CreateDialogDto {
  constructor(
    public readonly userId: bigint,
    public readonly peerType: PeerType,
    public readonly peerId: bigint,
    public readonly date: bigint,
    public readonly topMessage: number,
    public readonly unreadCount: number
  ) {}
}
