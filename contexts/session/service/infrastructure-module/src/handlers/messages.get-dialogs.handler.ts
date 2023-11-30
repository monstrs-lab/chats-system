import type { RpcMetadata }     from '@chats-system/core-rpc'

import type { SessionMetadata } from '../rpc/index.js'

import TL                       from '@chats-system/tl'
import { client, Dialog }    from '@chats-system/messages-rpc-client'
import { client as userClient  } from '@chats-system/user-rpc-client'
import { PeerType } from '@chats-system/core-rpc'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.messages.GetDialogs)
export class MessagesGetDialogsHandler {
  async execute(
    _: TL.messages.GetDialogs,
    __: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.messages.Dialogs> {
    const { dialogs = [] } = await client.getDialogs({
      userId: metadata.userId
    })

    const dialogUsers = await Promise.all(dialogs.map(async (dialog) => {
      const { user } = await userClient.getUser({ userId: dialog.peerId })

      return user!
    }))
    
    const { user: me } = await userClient.getUser({ userId: metadata.userId })

    return new TL.messages.Dialogs({
      dialogs: dialogs.map(dialog => new TL.Dialog({
        pinned:              false,
		    unreadMark:          dialog.unreadMark,
        peer: this.getDialogPeer(dialog),
        topMessage:          Number(dialog.topMessage),
        readInboxMaxId:      dialog.readInboxMaxId,
        readOutboxMaxId:     dialog.readOutboxMaxId,
        unreadCount:         dialog.unreadCount,
        unreadReactionsCount: 0,
        unreadMentionsCount: 0,
        notifySettings:      new TL.PeerNotifySettings({

        }),
        pts:                 undefined,
        draft:               undefined,
        folderId: dialog.folderId
    })),
      users: dialogUsers.concat([me!]).map(u => new TL.User(u)),
      messages: [],
      chats: [],
    })
  }

  protected getDialogPeer(dialog: Dialog): TL.TypePeer {
    if (dialog.peerType === PeerType.USER) {
      return new TL.PeerUser({
        userId: dialog.peerId
      })
    }

    throw new Error('Invalid peer type')
  }
}
