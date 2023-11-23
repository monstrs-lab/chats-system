import type { ServiceImpl }  from '@connectrpc/connect'

import { ConnectRpcMethod }  from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService } from '@monstrs/nestjs-connectrpc'
import { Controller }        from '@nestjs/common'

import { State }             from '@chats-system/updates-rpc'
import { GetStateResponse }  from '@chats-system/updates-rpc'
import { UpdatesService }    from '@chats-system/updates-rpc'

@Controller()
@ConnectRpcService(UpdatesService)
export class UpdatesServiceController implements ServiceImpl<typeof UpdatesService> {
  @ConnectRpcMethod()
  async getState(): Promise<GetStateResponse> {
    return new GetStateResponse({
      state: new State({
        pts: 0,
        qts: 0,
        seq: 0,
        date: Date.now() / 1000,
        unreadCount: 0,
      }),
    })
  }
}
