/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { CreateUserRequest } from '@chats-system/user-rpc'
import type { GetUserRequest }    from '@chats-system/user-rpc'
import type { ServiceImpl }       from '@connectrpc/connect'

import { CreateRequestContext }   from '@mikro-orm/core'
import { MikroORM }               from '@mikro-orm/core'
import { ConnectRpcMethod }       from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }      from '@monstrs/nestjs-connectrpc'
import { Controller }             from '@nestjs/common'

import { UserUseCases }           from '@chats-system/user-application-module'
import { GetUserResponse }        from '@chats-system/user-rpc'
import { CreateUserResponse }     from '@chats-system/user-rpc'
import { UserService }            from '@chats-system/user-rpc'

@Controller()
@ConnectRpcService(UserService)
export class UserServiceController implements ServiceImpl<typeof UserService> {
  constructor(
    private readonly userUseCases: UserUseCases,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const user = await this.userUseCases.createUser.execute({
      secretKeyId: request.secretKeyId,
      firstName: request.firstName,
      lastName: request.lastName,
      phone: request.phone,
    })

    return new CreateUserResponse({
      user,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.userUseCases.getUserById.execute(request.userId)

    return new GetUserResponse({
      user,
    })
  }
}
