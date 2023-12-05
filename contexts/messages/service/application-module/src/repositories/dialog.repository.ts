import type { Dialog }   from '@chats-system/messages-domain-module'
import type { PeerType } from '@chats-system/messages-domain-module'

export abstract class DialogRepository {
  abstract save(dialog: Dialog): Promise<Dialog>
  
  abstract getByUserPeer(
    userId: bigint,
    peerId: bigint,
    peerType: PeerType
  ): Promise<Dialog | undefined>

  abstract getByUserFolder(userId: bigint, folderId: number): Promise<Array<Dialog>>
}
