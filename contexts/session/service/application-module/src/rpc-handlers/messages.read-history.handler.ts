import type { Peer }            from '@chats-system/messages-rpc-client'
import type { TLRpcSession }    from '@chats-system/tl-rpc'
import type { TLRpcMetadata }   from '@chats-system/tl-rpc'

import { PeerType }             from '@chats-system/messages-rpc-client'
import { TLRpcHandler }         from '@chats-system/tl-rpc'
import { client }               from '@chats-system/messages-rpc-client'
import { client as userClient } from '@chats-system/user-rpc-client'
import TL                       from '@chats-system/tl'

import { SessionPort }          from '../ports/index.js'

@TLRpcHandler(TL.messages.ReadHistory)
export class MessagesReadHistoryHandler {
  constructor(private readonly sessionPort: SessionPort) {}

  async execute(
    request: TL.messages.ReadHistory,
    __: TLRpcSession,
    metadata: TLRpcMetadata
  ): Promise<TL.messages.AffectedMessages> {
    const { ptsCount, pts, stillUnreadCount, maxId } = await client.readUserMessages({
      userId: metadata.userId,
      peer: this.getPeer(request.peer),
      maxId: request.maxId,
    })

    const { users } = await userClient.getUsers({
      userIds: [metadata.userId, this.getPeer(request.peer).peerId],
    })

    await this.sessionPort.send(
      this.getPeer(request.peer).peerId,
      new TL.Updates({
        updates: [
          new TL.UpdateReadHistoryOutbox({
            peer: this.getTLInputPeer(request.peer),
            pts,
            ptsCount,
            maxId,
          }),
        ],
        users: users.map((user) => new TL.User(user)),
        chats: [],
        date: Math.floor(Date.now() / 1000),
        seq: 1,
      })
    )

    await this.sessionPort.send(
      metadata.userId,
      new TL.Updates({
        updates: [
          new TL.UpdateReadHistoryInbox({
            peer: new TL.PeerUser({
              userId: metadata.userId,
            }),
            pts,
            ptsCount,
            maxId,
            stillUnreadCount,
          }),
        ],
        users: users.map((user) => new TL.User(user)),
        chats: [],
        date: Math.floor(Date.now() / 1000),
        seq: 1,
      })
    )

    return new TL.messages.AffectedMessages({
      pts,
      ptsCount,
    })
  }

  protected getTLInputPeer(inputPeer: TL.TypeInputPeer): TL.TypePeer {
    if (inputPeer instanceof TL.InputPeerUser) {
      return new TL.PeerUser({
        userId: inputPeer.userId,
      })
    }

    throw new Error('Invalid peer type')
  }

  protected getTLPeer(peer: Peer): TL.TypePeer {
    if (peer.peerType === PeerType.USER) {
      return new TL.PeerUser({
        userId: peer.peerId,
      })
    }

    throw new Error('Invalid peer type')
  }

  protected getPeer(inputPeer: TL.TypeInputPeer): {
    peerId: bigint
    peerType: PeerType
    accessHash?: bigint
  } {
    if (inputPeer instanceof TL.InputPeerUser) {
      return {
        peerType: PeerType.USER,
        peerId: inputPeer.userId,
        accessHash: inputPeer.accessHash,
      }
    }

    if (inputPeer instanceof TL.InputPeerChat) {
      return {
        peerType: PeerType.CHAT,
        peerId: inputPeer.chatId,
      }
    }

    throw new Error('Invalid peer type')
  }
}
