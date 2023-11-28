import type { SessionMetadata } from '../rpc/index.js'

import { RpcMetadata }          from '@chats-system/core-rpc'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.messages.GetDialogs)
export class MessagesGetDialogsHandler {
  async execute(
    request: TL.auth.SendCode,
    _: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.messages.Dialogs> {
    // eslint-disable-next-line
    console.log(request, metadata)

    return new TL.messages.Dialogs({
      dialogs: [],
      messages: [],
      chats: [],
      users: [],
    })
  }
}
