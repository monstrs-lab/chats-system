import type { RpcMetadata }  from '@chats-system/core-rpc'
import type { TLRpcSession } from '@chats-system/tl-rpc'

import { TLRpcHandler }      from '@chats-system/tl-rpc'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.messages.GetDialogs)
export class MessagesGetDialogsHandler {
  async execute(
    _: TL.messages.GetDialogs,
    __: TLRpcSession,
    ___: RpcMetadata
  ): Promise<TL.messages.Dialogs> {
    return new TL.messages.Dialogs({
      dialogs: [],
      messages: [],
      chats: [],
      users: [],
    })
  }
}
