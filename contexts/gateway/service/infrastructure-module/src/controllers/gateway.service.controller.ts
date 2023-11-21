/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { SendDataRequest }       from '@chats-system/gateway-rpc'
import type { SendDataResponse }      from '@chats-system/gateway-rpc'
import type { ServiceImpl }           from '@connectrpc/connect'

import { ConnectRpcMethod }           from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }          from '@monstrs/nestjs-connectrpc'
import { Controller }                 from '@nestjs/common'

import { GatewayService }             from '@chats-system/gateway-rpc'

import { MTProtoGatewayClientSender } from '../gateway/index.js'

@Controller()
@ConnectRpcService(GatewayService)
export class GatewayServiceController implements ServiceImpl<typeof GatewayService> {
  constructor(private readonly clientSender: MTProtoGatewayClientSender) {}

  @ConnectRpcMethod()
  async sendData(request: SendDataRequest): Promise<SendDataResponse> {
    this.clientSender.sendToClient(
      request.authKeyId,
      request.sessionId,
      Buffer.from(request.payload)
    )

    return {} as any
  }
}
