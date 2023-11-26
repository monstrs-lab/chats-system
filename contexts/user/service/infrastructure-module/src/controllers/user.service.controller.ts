import type { ServiceImpl }                                                from '@connectrpc/connect'

import { ConnectRpcMethod }                                                from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                                               from '@monstrs/nestjs-connectrpc'
import { Controller }                                                      from '@nestjs/common'

import { GetImmutableUserByPhoneRequest, CreateUserRequest }                                  from '@chats-system/user-rpc'
import { GetImmutableUserByPhoneResponse, CreateUserResponse } from '@chats-system/user-rpc'
import { UserService }                                                     from '@chats-system/user-rpc'

import { UseCases } from '../use-cases/index.js'

@Controller()
@ConnectRpcService(UserService)
export class UserServiceController implements ServiceImpl<typeof UserService> {
  constructor(private readonly useCases: UseCases) {}

  @ConnectRpcMethod()
  async getImmutableUserByPhone(
    request: GetImmutableUserByPhoneRequest
  ): Promise<GetImmutableUserByPhoneResponse> {
    const immutableUser = await this.useCases.getImmutableUserByPhone.execute(request.phoneNumber)

    return new GetImmutableUserByPhoneResponse({
      immutableUser
    })
  }

  @ConnectRpcMethod()
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const immutableUser = await this.useCases.createUser.execute(
      request.phone,
      request.secretKeyId,
      request.firstName,
      request.lastName,
      request.countryCode
    )

    return new CreateUserResponse({
      immutableUser
    })
  }
}
