import type { SendCodeRequest, SignInRequest, SignUpRequest }             from '@chats-system/auth-rpc'
import type { ServiceImpl }                 from '@connectrpc/connect'

import type { HandlerContext } from '@connectrpc/connect'

import { ConnectRpcMethod }                 from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                from '@monstrs/nestjs-connectrpc'
import { Controller }                       from '@nestjs/common'
import { Ctx }                              from '@nestjs/microservices'

import { Payload }                     from '@nestjs/microservices'

import { SendCodeResponse, SignInResponse, SignUpResponse }                 from '@chats-system/auth-rpc'
import { AuthService }                      from '@chats-system/auth-rpc'
import { RpcMetadata }                      from '@chats-system/core-rpc'

import { UseCases }                         from '../use-cases/index.js'

@Controller()
@ConnectRpcService(AuthService)
export class AuthServiceController implements ServiceImpl<typeof AuthService> {
  constructor(private readonly useCases: UseCases) {}
  
  @ConnectRpcMethod()
  async sendCode(
    @Payload() request: SendCodeRequest,
    @Ctx() context: HandlerContext
  ): Promise<SendCodeResponse> {
    const sentCode = await this.useCases.sendCode.execute(
      request.phoneNumber,
      RpcMetadata.fromBinary(Buffer.from(context.requestHeader.get('metadata')!, 'base64'))
    )

    return new SendCodeResponse({
      sentCode
    })
  }

  @ConnectRpcMethod()
  async signIn(
    @Payload() request: SignInRequest,
    @Ctx() context: HandlerContext
  ): Promise<SignInResponse> {
    console.log(
      request,
      RpcMetadata.fromBinary(Buffer.from(context.requestHeader.get('metadata')!, 'base64'))
    )

    return new SignInResponse({
    })
  }

  @ConnectRpcMethod()
  async signUp(
    @Payload() request: SignUpRequest,
    @Ctx() context: HandlerContext
  ): Promise<SignInResponse> {
    const authorization = await this.useCases.signUp.execute(
      request.phoneNumber, request.phoneCodeHash, request.firstName, request.lastName,
      RpcMetadata.fromBinary(Buffer.from(context.requestHeader.get('metadata')!, 'base64'))
    )

    return new SignInResponse({
      authorization
    })
  }
}
