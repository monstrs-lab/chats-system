import type { RpcMetadata }  from '@chats-system/core-rpc'
import type { TLRpcSession } from '@chats-system/tl-rpc'

import { TLRpcHandler }      from '@chats-system/tl-rpc'
import { client }            from '@chats-system/updates-rpc-client'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.updates.GetState)
export class UpdatesGetState {
  async execute(
    _: TL.updates.GetState,
    __: TLRpcSession,
    metadata: RpcMetadata
  ): Promise<TL.updates.State> {
    const response = await client.getState({
      authKeyId: metadata.authKeyId,
      userId: metadata.userId,
    })

    return new TL.updates.State(response.state!)
  }
}
