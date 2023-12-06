import type { Peer }                from '@chats-system/messages-rpc-client'
import type { TLRpcSession }        from '@chats-system/tl-rpc'
import type { TLRpcMetadata }       from '@chats-system/tl-rpc'

import { PeerType }                 from '@chats-system/messages-rpc-client'
import { TLRpcHandler }             from '@chats-system/tl-rpc'
import { client as messagesClient } from '@chats-system/messages-rpc-client'
import { client as userClient }     from '@chats-system/user-rpc-client'
import TL                           from '@chats-system/tl'

@TLRpcHandler(TL.messages.GetHistory)
export class MessagesGetHistoryHandler {
  async execute(
    request: TL.messages.GetHistory,
    __: TLRpcSession,
    metadata: TLRpcMetadata
  ): Promise<TL.messages.Messages> {
    const { messages = [] } = await messagesClient.getUserPeerMessages({
      userId: metadata.userId,
      peer: this.getPeer(request.peer),
    })

    const { users } = await userClient.getUsers({
      userIds: Array.from(
        new Set(
          messages
            .map((message) => [message.from!.peerId, message.peer!.peerId])
            .flat()
            .concat([metadata.userId])
        )
      ),
    })

    return new TL.messages.Messages({
      messages: messages.map(
        (message) =>
          new TL.Message({
            id: message.messageId,
            message: message.message,
            fromId: this.getTLPeer(message.from!),
            peerId: this.getTLPeer(message.peer!),
            out: message.senderUserId === metadata.userId,
            date: message.date,
            fwdFrom: undefined,
            replyTo: undefined,
            media: undefined,
            replyMarkup: undefined,
            entities: undefined,
            replies: undefined,
            reactions: undefined,
            restrictionReason: undefined,
            mentioned: undefined,
            mediaUnread: undefined,
            silent: undefined,
            post: undefined,
            fromScheduled: undefined,
            ttlPeriod: undefined,
          })
      ),
      users: users.map((user) => new TL.User(user)),
      chats: [],
    })
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
