import type { ServiceImpl }  from '@connectrpc/connect'

import { ConnectRpcMethod }  from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService } from '@monstrs/nestjs-connectrpc'
import { Controller }        from '@nestjs/common'

import { UpdatesUseCases }   from '@chats-system/updates-application-module'
import { GetStateRequest }   from '@chats-system/updates-rpc'
import { GetStateResponse }  from '@chats-system/updates-rpc'
import { UpdatesService }    from '@chats-system/updates-rpc'

@Controller()
@ConnectRpcService(UpdatesService)
export class UpdatesServiceController implements ServiceImpl<typeof UpdatesService> {
  constructor(private readonly updatesUseCases: UpdatesUseCases) {}

  @ConnectRpcMethod()
  async getState(request: GetStateRequest): Promise<GetStateResponse> {
    return new GetStateResponse({
      state: await this.updatesUseCases.getState.execute(request.authKeyId, request.userId),
    })
  }
}
