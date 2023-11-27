/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { SendCodeRequest } from '@chats-system/auth-rpc'
import type { ServiceImpl }     from '@connectrpc/connect'
import type { HandlerContext }  from '@connectrpc/connect'

import { CreateRequestContext } from '@mikro-orm/core'
import { MikroORM }             from '@mikro-orm/core'
import { ConnectRpcMethod }     from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }    from '@monstrs/nestjs-connectrpc'
import { Controller }           from '@nestjs/common'
import { Ctx }                  from '@nestjs/microservices'
import { Payload }              from '@nestjs/microservices'

import { AuthUseCases }         from '@chats-system/auth-application-module'
import { SendCodeResponse }     from '@chats-system/auth-rpc'
import { AuthService }          from '@chats-system/auth-rpc'
import { RpcMetadata }          from '@chats-system/core-rpc'

@Controller()
@ConnectRpcService(AuthService)
export class AuthServiceController implements ServiceImpl<typeof AuthService> {
  constructor(
    private readonly authUseCases: AuthUseCases,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async sendCode(
    @Payload() request: SendCodeRequest,
    @Ctx() context: HandlerContext
  ): Promise<SendCodeResponse> {
    const sentCode = await this.authUseCases.sendCode.execute(
      request.phone,
      RpcMetadata.fromBinary(Buffer.from(context.requestHeader.get('metadata')!, 'base64'))
    )

    return new SendCodeResponse({
      sentCode,
    })
  }
}
