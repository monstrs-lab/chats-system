import type { Peer }            from '@chats-system/messages-rpc-client'
import type { TLRpcSession }    from '@chats-system/tl-rpc'
import type { TLRpcMetadata }   from '@chats-system/tl-rpc'

import { PeerType }             from '@chats-system/messages-rpc-client'
import { TLRpcHandler }         from '@chats-system/tl-rpc'
import { client }               from '@chats-system/messages-rpc-client'
import { client as userClient } from '@chats-system/user-rpc-client'
import TL                       from '@chats-system/tl'

import { SessionPort }          from '../ports/index.js'

@TLRpcHandler(TL.messages.SendMessage)
export class MessagesSendMessageHandler {
  constructor(private readonly sessionPort: SessionPort) {}

  async execute(
    request: TL.messages.SendMessage,
    __: TLRpcSession,
    metadata: TLRpcMetadata
  ): Promise<TL.Updates> {
    const { outboxMessage, inboxMessage, ptsCount, pts } = await client.sendMessage({
      userId: metadata.userId,
      peer: this.getPeer(request.peer),
      randomId: request.randomId,
      message: request.message,
    })

    const { users } = await userClient.getUsers({
      userIds: [metadata.userId, this.getPeer(request.peer).peerId],
    })

    await this.sessionPort.send(
      this.getPeer(request.peer).peerId,
      new TL.Updates({
        updates: [
          new TL.UpdateNewMessage({
            message: new TL.Message({
              id: inboxMessage!.messageId,
              message: inboxMessage!.message,
              fromId: this.getTLPeer(inboxMessage!.from!),
              peerId: this.getTLPeer(inboxMessage!.peer!),
              out: false,
              date: inboxMessage!.date,
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
            }),
            ptsCount,
            pts,
          }),
        ],
        users: users.map((user) => new TL.User(user)),
        chats: [],
        date: Math.floor(Date.now() / 1000),
        seq: 1,
      })
    )

    return new TL.Updates({
      updates: [
        new TL.UpdateMessageID({
          id: outboxMessage!.messageId,
          randomId: request.randomId,
        }),
      ],
      users: [],
      chats: [],
      date: Math.floor(Date.now() / 1000),
      seq: 0,
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
