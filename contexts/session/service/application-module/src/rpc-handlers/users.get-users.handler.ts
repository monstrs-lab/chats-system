import type { RpcMetadata }  from '@chats-system/rpc'
import type { TLRpcSession } from '@chats-system/tl-rpc'

import { TLRpcHandler }      from '@chats-system/tl-rpc'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.users.GetUsers)
export class UsersGetUsersHandler {
  async execute(
    _: TL.updates.GetState,
    __: TLRpcSession,
    ___: RpcMetadata
  ): Promise<Array<TL.User>> {
    return []
  }
}
