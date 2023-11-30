import type { PeerType } from '../enums/index.js'

export class Dialog {
  constructor(
    public readonly id: bigint,
    public readonly userId: bigint,
    public readonly peerType: PeerType,
    public readonly peerId: bigint,
    public readonly peerDialogId: bigint,
    public readonly date: bigint,
    public readonly pinned: boolean,
    public readonly topMessage: bigint,
    public readonly readInboxMaxId: number,
    public readonly readOutboxMaxId: number,
    public readonly unreadCount: number,
    public readonly unreadMark: boolean,
    public readonly unreadMentionsCount: number,
    public readonly unreadReactionsCount: number,
    public readonly folderId?: number,
    public readonly folderPinned?: bigint
  ) {}
}
