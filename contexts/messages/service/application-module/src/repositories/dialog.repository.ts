import type { Dialog }   from '@chats-system/messages-domain-module'
import type { PeerType } from '@chats-system/messages-domain-module'

export abstract class DialogRepository {
  abstract save(dialog: Dialog): Promise<Dialog>

  abstract findById(dialogId: bigint): Promise<Dialog | undefined>

  abstract findByUserPeer(
    userId: bigint,
    peerId: bigint,
    peerType: PeerType
  ): Promise<Dialog | undefined>
}
