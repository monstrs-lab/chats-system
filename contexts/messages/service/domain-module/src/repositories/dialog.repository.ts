import type { Dialog } from '../entities/index.js'

import { PeerType }    from '../enums/index.js'

export abstract class DialogRepository {
  abstract save(dialog: Dialog): Promise<Dialog>

  abstract getByUserAndPeer(
    userId: bigint,
    peerId: bigint,
    peerType: PeerType
  ): Promise<Dialog | undefined>

  abstract getByUserFolder(userId: bigint, folderId: number): Promise<Array<Dialog>>
}
