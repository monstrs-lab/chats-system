import type { RpcMetadata }  from '@chats-system/rpc'
import type { TLRpcSession } from '@chats-system/tl-rpc'

import { TLRpcHandler }      from '@chats-system/tl-rpc'
import { UpdatesClient }     from '@chats-system/updates-client-module'
import TL                    from '@chats-system/tl'

@TLRpcHandler(TL.updates.GetState)
export class UpdatesGetState {
  constructor(private readonly updateClient: UpdatesClient) {}

  async execute(
    _: TL.updates.GetState,
    __: TLRpcSession,
    metadata: RpcMetadata
  ): Promise<TL.updates.State> {
    const response = await this.updateClient.getState({
      authKeyId: metadata.authKeyId,
      userId: metadata.userId,
    })

    return new TL.updates.State(response.state!)
  }
}
