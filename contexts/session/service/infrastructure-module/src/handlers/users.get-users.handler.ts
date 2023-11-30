import type { RpcMetadata }     from '@chats-system/core-rpc'

import type { SessionMetadata } from '../rpc/index.js'

import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.users.GetUsers)
export class UsersGetUsersHandler {
  async execute(
    _: TL.updates.GetState,
    __: SessionMetadata,
    ___: RpcMetadata
  ): Promise<Array<TL.User>> {
    return []
  }
}
