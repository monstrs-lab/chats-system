import type { RpcMetadata }     from '@chats-system/core-rpc'

import type { SessionMetadata } from '../rpc/index.js'

import { client }               from '@chats-system/updates-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandler }           from '../rpc/index.js'

@RpcHandler(TL.updates.GetState)
export class UpdatesGetState {
  async execute(
    _: TL.updates.GetState,
    __: SessionMetadata,
    metadata: RpcMetadata
  ): Promise<TL.updates.State> {
    const response = await client.getState({
      authKeyId: metadata.authKeyId,
      userId: metadata.userId,
    })

    return new TL.updates.State(response.state!)
  }
}
