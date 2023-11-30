import type { RpcMetadata }     from '@chats-system/core-rpc'

import type { SessionMetadata } from '../rpc/index.js'

import { client as updates }    from '@chats-system/updates-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.messages.GetPinnedDialogs)
export class MessagesGetPinnedDialogsHandler {
  async execute(
    _: TL.messages.GetPinnedDialogs,
    __: SessionMetadata,
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
