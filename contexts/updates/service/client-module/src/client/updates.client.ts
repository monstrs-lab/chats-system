import type { PartialMessage }   from '@bufbuild/protobuf'
import type { UpdatesService }   from '@chats-system/updates-rpc-client'
import type { GetStateRequest }  from '@chats-system/updates-rpc-client'
import type { GetStateResponse } from '@chats-system/updates-rpc-client'
import type { PromiseClient }    from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                from '@nestjs/common'
import { Injectable }            from '@nestjs/common'

import { UPDATES_CLIENT_TOKEN }  from '../constants/index.js'

@Injectable()
export class UpdatesClient {
  constructor(
    @Inject(UPDATES_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof UpdatesService>
  ) {}

  async getState(request: PartialMessage<GetStateRequest>): Promise<GetStateResponse> {
    return this.client.getState(request)
  }
}
