import type { PartialMessage }   from '@bufbuild/protobuf'
import type { GatewayService }   from '@chats-system/gateway-rpc-client'
import type { SendDataRequest }  from '@chats-system/gateway-rpc-client'
import type { SendDataResponse } from '@chats-system/gateway-rpc-client'
import type { PromiseClient }    from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                from '@nestjs/common'
import { Injectable }            from '@nestjs/common'

import { GATEWAY_CLIENT_TOKEN }  from '../constants/index.js'

@Injectable()
export class GatewayClient {
  constructor(
    @Inject(GATEWAY_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof GatewayService>
  ) {}

  async sendData(request: PartialMessage<SendDataRequest>): Promise<SendDataResponse> {
    return this.client.sendData(request)
  }
}
