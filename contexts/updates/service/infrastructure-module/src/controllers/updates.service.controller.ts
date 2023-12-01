import type { ServiceImpl }  from '@connectrpc/connect'

import { ConnectRpcMethod }  from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService } from '@monstrs/nestjs-connectrpc'
import { Controller }        from '@nestjs/common'

import { IdGenClient }       from '@chats-system/idgen-client-module'
import { GetStateRequest }   from '@chats-system/updates-rpc'
import { State }             from '@chats-system/updates-rpc'
import { GetStateResponse }  from '@chats-system/updates-rpc'
import { UpdatesService }    from '@chats-system/updates-rpc'

@Controller()
@ConnectRpcService(UpdatesService)
export class UpdatesServiceController implements ServiceImpl<typeof UpdatesService> {
  constructor(private readonly idGenClient: IdGenClient) {}

  @ConnectRpcMethod()
  async getState(request: GetStateRequest): Promise<GetStateResponse> {
    let pts = await this.idGenClient.getCurrentPtsId(request.userId)

    if (pts === 0) {
      pts = await this.idGenClient.getNextPtsId(request.userId)
    }

    const seq = await this.idGenClient.getCurrentSequenceId(request.authKeyId)

    return new GetStateResponse({
      state: new State({
        pts,
        qts: 0,
        seq: seq === 0 ? -1 : seq,
        date: Math.floor(Date.now() / 1000),
        unreadCount: 0,
      }),
    })
  }
}
