import type { RpcMetadata }  from '@chats-system/rpc'
import type { TLRpcSession } from '@chats-system/tl-rpc'

import { TLRpcHandler }      from '@chats-system/tl-rpc'
import { client as updates } from '@chats-system/updates-rpc-client'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.messages.GetPinnedDialogs)
export class MessagesGetPinnedDialogsHandler {
  async execute(
    _: TL.messages.GetPinnedDialogs,
    __: TLRpcSession,
    metadata: RpcMetadata
  ): Promise<TL.messages.PeerDialogs> {
    const { state } = await updates.getState({
      authKeyId: metadata.authKeyId,
      userId: metadata.userId,
    })

    return new TL.messages.PeerDialogs({
      dialogs: [],
      messages: [],
      chats: [],
      users: [],
      state: new TL.updates.State(state!),
    })
  }
}
