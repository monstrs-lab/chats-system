/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { SendDataRequest } from '@chats-system/gateway-rpc'
import type { ServiceImpl }     from '@connectrpc/connect'

import { ConnectRpcMethod }     from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }    from '@monstrs/nestjs-connectrpc'
import { Controller }           from '@nestjs/common'

import { SendDataResponse }     from '@chats-system/gateway-rpc'
import { GatewayService }       from '@chats-system/gateway-rpc'

import { ConnectionRegistry }   from '../connection/index.js'

@Controller()
@ConnectRpcService(GatewayService)
export class GatewayServiceController implements ServiceImpl<typeof GatewayService> {
  constructor(private readonly connectionRegistry: ConnectionRegistry) {}

  @ConnectRpcMethod()
  async sendData(request: SendDataRequest): Promise<SendDataResponse> {
    await this.connectionRegistry.sendToClient(
      request.authKeyId,
      request.sessionId,
      Buffer.from(request.payload)
    )

    return new SendDataResponse({ success: true })
  }
}
