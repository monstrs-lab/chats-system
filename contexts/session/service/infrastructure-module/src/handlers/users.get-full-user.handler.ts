import type { RpcMetadata }     from '@chats-system/core-rpc'

import type { SessionMetadata } from '../rpc/index.js'

import { client }               from '@chats-system/user-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.users.GetFullUser)
export class UsersGetFullUserHandler {
  async execute(
    request: TL.users.GetFullUser,
    __: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.users.UserFull> {
    const { peerId } = this.getPeerId(request, metadata)

    const { user } = await client.getUser({
      userId: peerId,
    })

    return new TL.users.UserFull({
      chats: [],
      users: [new TL.User(user!)],
      // @ts-expect-error
      fullUser: new TL.UserFull(user),
    })
  }

  protected getPeerId(
    request: TL.users.GetFullUser,
    metadata: RpcMetadata
  ): { peerId: bigint; accessHash?: bigint } {
    if (request.id instanceof TL.InputUserSelf) {
      return { peerId: metadata.userId }
    }

    if (request.id instanceof TL.InputUser) {
      return { peerId: request.id.userId, accessHash: request.id.accessHash }
    }

    throw new Error('Invalid user id')
  }
}
