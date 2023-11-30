import type { Peer, RpcMetadata }     from '@chats-system/core-rpc'

import type { SessionMetadata } from '../rpc/index.js'

import TL                       from '@chats-system/tl'
import { client, Message }    from '@chats-system/messages-rpc-client'
import { client as userClient  } from '@chats-system/user-rpc-client'
import { PeerType } from '@chats-system/core-rpc'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.messages.GetHistory)
export class MessagesGetHistoryHandler {
  async execute(
    request: TL.messages.GetHistory,
    __: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.messages.Messages> {
    const { messages = [] } = await client.getHistory({
      userId: metadata.userId,
      peer: this.getPeer(request.peer)
    })

    const userIds = Array.from(
        new Set(
            messages.map(message => ([message.from!.peerId, message.peer!.peerId])).flat().concat([metadata.userId])
        )
    )

    const users = await Promise.all(userIds.map(async (userId) => {
      const { user } = await userClient.getUser({ userId })

      return user!
    }))
    
    return new TL.messages.Messages({
      //messages: {
        // @ts-expect-error
        messages: messages.map(message => new TL.Message({
            //...message,
            id: Math.floor(Date.now() /  1000), //Number(message.id),
            fromId: this.getTLPeer(message.from!),
            peerId: this.getTLPeer(message.peer!),
            date: Math.floor(Date.now() /  1000), //Number(message.date),
            fwdFrom: undefined,
            replyTo: undefined,
            media: undefined,
            replyMarkup: undefined,
            entities: undefined,
            replies: undefined,
            reactions: undefined,
            restrictionReason: undefined
        })),
        users: users.map(user => new TL.User(user)),
        chats: [],
      //}
    })
  }

  protected getTLPeer(peer: Peer): TL.TypePeer {
    if (peer.peerType === PeerType.USER) {
      return new TL.PeerUser({
        userId: peer.peerId
      })
    }

    throw new Error('Invalid peer type')
  }

  protected getPeer(inputPeer: TL.TypeInputPeer): { peerId: bigint, peerType: PeerType, accessHash?: bigint } {
    if (inputPeer instanceof TL.InputPeerUser) {
        return {
            peerType: PeerType.USER,
            peerId: inputPeer.userId,
            accessHash: inputPeer.accessHash
            
        }
    }

    if (inputPeer instanceof TL.InputPeerChat) {
        return {
            peerType: PeerType.CHAT,
            peerId: inputPeer.chatId
        }
    }

    throw new Error('Invalid peer type')
  }
}
