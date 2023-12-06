import type { Dialog }              from '@chats-system/messages-rpc-client'
import type { Peer }                from '@chats-system/messages-rpc-client'
import type { TLRpcSession }        from '@chats-system/tl-rpc'
import type { TLRpcMetadata }       from '@chats-system/tl-rpc'

import { PeerType }                 from '@chats-system/messages-rpc-client'
import { TLRpcHandler }             from '@chats-system/tl-rpc'
import { client as messagesClient } from '@chats-system/messages-rpc-client'
import { client as updatesClient }  from '@chats-system/updates-rpc-client'
import { client as userClient }     from '@chats-system/user-rpc-client'
import TL                           from '@chats-system/tl'

@TLRpcHandler(TL.messages.GetPeerDialogs)
export class MessagesGetPeerDialogsHandler {
  async execute(
    request: TL.messages.GetPeerDialogs,
    __: TLRpcSession,
    metadata: TLRpcMetadata
  ): Promise<TL.messages.PeerDialogs> {
    const { state } = await updatesClient.getState({
      authKeyId: metadata.authKeyId,
      userId: metadata.userId,
    })

    const { dialogs: allDialogs = [] } = await messagesClient.getUserDialogs({
      userId: metadata.userId,
    })

    const dialogs = allDialogs.filter((dialog) =>
      request.peers.find((peer) => (peer as any).userId === dialog.peer?.peerId))

    const { users } = await userClient.getUsers({
      userIds: dialogs.map((dialog) => dialog.peer!.peerId).concat([metadata.userId]),
    })

    const { messages } = await messagesClient.getUserMessages({
      userId: metadata.userId,
      messageIds: dialogs.map((dialog) => dialog.topMessage),
    })

    return new TL.messages.PeerDialogs({
      state: new TL.updates.State(state!),
      dialogs: dialogs.map(
        (dialog) =>
          new TL.Dialog({
            pinned: false,
            unreadMark: dialog.unreadMark,
            peer: this.getDialogPeer(dialog),
            topMessage: dialog.topMessage,
            readInboxMaxId: dialog.readInboxMaxId,
            readOutboxMaxId: dialog.readOutboxMaxId,
            unreadCount: dialog.unreadCount,
            unreadReactionsCount: 0,
            unreadMentionsCount: 0,
            notifySettings: new TL.PeerNotifySettings({
              silent: false,
            }),
            pts: 0,
            draft: undefined,
            folderId: dialog.folderId,
          })
      ),
      users: users.map((user) => new TL.User(user)),
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
            silent: false,
            post: undefined,
            fromScheduled: undefined,
            ttlPeriod: undefined,
          })
      ),
      chats: [],
    })
  }

  protected getDialogPeer(dialog: Dialog): TL.TypePeer {
    if (dialog.peer!.peerType === PeerType.USER) {
      return new TL.PeerUser({
        userId: dialog.peer!.peerId,
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
}
