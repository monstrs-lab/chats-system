import type { RpcMetadata }     from '@chats-system/core-rpc'

import type { SessionMetadata } from '../rpc/index.js'

import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.messages.GetDialogs)
export class MessagesGetDialogsHandler {
  async execute(
    _: TL.messages.GetDialogs,
    __: SessionMetadata,
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
