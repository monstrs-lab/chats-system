/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { SendCodeRequest }    from '@chats-system/auth-rpc'
import type { SignUpRequest }      from '@chats-system/auth-rpc'
import type { SignInRequest }      from '@chats-system/auth-rpc'
import type { ServiceImpl }        from '@connectrpc/connect'
import type { HandlerContext }     from '@connectrpc/connect'

import { CreateRequestContext }    from '@mikro-orm/core'
import { MikroORM }                from '@mikro-orm/core'
import { ConnectRpcMethod }        from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }       from '@monstrs/nestjs-connectrpc'
import { Controller }              from '@nestjs/common'
import { UseFilters }              from '@nestjs/common'
import { Ctx }                     from '@nestjs/microservices'
import { Payload }                 from '@nestjs/microservices'

import { AuthUseCases }            from '@chats-system/auth-application-module'
import { SendCodeResponse }        from '@chats-system/auth-rpc'
import { SignUpResponse }          from '@chats-system/auth-rpc'
import { SignInResponse }          from '@chats-system/auth-rpc'
import { AuthService }             from '@chats-system/auth-rpc'
import { RpcErrorExceptionFilter } from '@chats-system/core-errors'
import { RpcMetadata }             from '@chats-system/rpc'

@Controller()
@ConnectRpcService(AuthService)
@UseFilters(RpcErrorExceptionFilter)
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
    const metadata = RpcMetadata.fromBinary(
      Buffer.from(context.requestHeader.get('metadata')!, 'base64')
    )

    const sentCode = await this.authUseCases.sendCode.execute(
      request.phone,
      metadata.authKeyId,
      metadata.sessionId
    )

    return new SendCodeResponse({
      sentCode,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async signIn(
    @Payload() request: SignInRequest,
    @Ctx() context: HandlerContext
  ): Promise<SignInResponse> {
    const metadata = RpcMetadata.fromBinary(
      Buffer.from(context.requestHeader.get('metadata')!, 'base64')
    )

    const authorization = await this.authUseCases.signIn.execute(
      request.phone,
      request.phoneCode,
      request.phoneCodeHash,
      metadata.authKeyId
    )

    return new SignInResponse({
      authorization,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async signUp(
    @Payload() request: SignUpRequest,
    @Ctx() context: HandlerContext
  ): Promise<SignUpResponse> {
    const authorization = await this.authUseCases.signUp.execute(
      request.phone,
      request.phoneCodeHash,
      request.firstName,
      request.lastName,
      RpcMetadata.fromBinary(Buffer.from(context.requestHeader.get('metadata')!, 'base64'))
    )

    return new SignUpResponse({
      authorization,
    })
  }
}
