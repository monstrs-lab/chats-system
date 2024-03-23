import type { Dialog }   from '@chats-system/messages-domain-module'
import type { PeerType } from '@chats-system/messages-domain-module'
import type { Query }    from '@monstrs/query-types'

export interface DialogsQuery {
  id?: Query.BigIntType
  userId?: Query.BigIntType
}

export interface FindDialogsByQuery {
  pager?: Query.Pager
  order?: Query.Order
  query?: DialogsQuery
}

export interface FindDialogsByQueryResult {
  dialogs: Array<Dialog>
  hasNextPage: boolean
}

export abstract class DialogRepository {
  abstract save(dialog: Dialog): Promise<Dialog>

  abstract findById(dialogId: bigint): Promise<Dialog | undefined>

  abstract findByUserPeer(
    userId: bigint,
    peerId: bigint,
    peerType: PeerType
  ): Promise<Dialog | undefined>

  abstract findByQuery(query: FindDialogsByQuery): Promise<FindDialogsByQueryResult>
}
