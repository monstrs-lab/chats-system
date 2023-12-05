import type { Dialog }              from '@chats-system/messages-rpc-client'
import type { Peer }                from '@chats-system/messages-rpc-client'
import type { TLRpcSession }        from '@chats-system/tl-rpc'
import type { TLRpcMetadata }       from '@chats-system/tl-rpc'

import { PeerType }                 from '@chats-system/messages-rpc-client'
import { TLRpcHandler }             from '@chats-system/tl-rpc'
import { client as messagesClient } from '@chats-system/messages-rpc-client'
import { client as userClient }     from '@chats-system/user-rpc-client'
import TL                           from '@chats-system/tl'

@TLRpcHandler(TL.messages.GetDialogs)
export class MessagesGetDialogsHandler {
  async execute(
    _: TL.messages.GetDialogs,
    __: TLRpcSession,
    metadata: TLRpcMetadata
  ): Promise<TL.messages.Dialogs> {
    const { dialogs = [] } = await messagesClient.getUserDialogs({
      userId: metadata.userId,
    })

    const { users } = await userClient.getUsers({
      userIds: dialogs.map((dialog) => dialog.peer!.peerId).concat([metadata.userId]),
    })

    const { messages } = await messagesClient.getUserMessages({
      userId: metadata.userId,
      messageIds: dialogs.map((dialog) => dialog.topMessage),
    })

    return new TL.messages.Dialogs({
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
            out: message.peer?.peerId !== metadata.userId,
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
