/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { CreateUserRequest }      from '@chats-system/user-rpc'
import type { GetUserContactsRequest } from '@chats-system/user-rpc'
import type { ImportContactsRequest }  from '@chats-system/user-rpc'
import type { GetUserRequest }         from '@chats-system/user-rpc'
import type { ServiceImpl }            from '@connectrpc/connect'
import type { HandlerContext }         from '@connectrpc/connect'

import { CreateRequestContext }        from '@mikro-orm/core'
import { MikroORM }                    from '@mikro-orm/core'
import { ConnectRpcMethod }            from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }           from '@monstrs/nestjs-connectrpc'
import { Controller }                  from '@nestjs/common'
import { Ctx }                         from '@nestjs/microservices'
import { Payload }                     from '@nestjs/microservices'

import { RpcMetadata }                 from '@chats-system/core-rpc'
import { UserUseCases }                from '@chats-system/user-application-module'
import { GetUserResponse }             from '@chats-system/user-rpc'
import { ImportContactsResponse }      from '@chats-system/user-rpc'
import { CreateUserResponse }          from '@chats-system/user-rpc'
import { GetUserContactsResponse }     from '@chats-system/user-rpc'
import { UserService }                 from '@chats-system/user-rpc'

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
    const user = await this.userUseCases.getUser.execute(request.userId, request.phone)

    return new GetUserResponse({
      user,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getUserContacts(request: GetUserContactsRequest): Promise<GetUserContactsResponse> {
    const userContacts = await this.userUseCases.getUserContacts.execute(request.userId)

    return new GetUserContactsResponse({
      userContacts,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async importContacts(
    @Payload() request: ImportContactsRequest,
    @Ctx() context: HandlerContext
  ): Promise<ImportContactsResponse> {
    const metadata = RpcMetadata.fromBinary(
      Buffer.from(context.requestHeader.get('metadata')!, 'base64')
    )

    const importedContacts = await this.userUseCases.importUserContacts.execute(
      metadata.userId,
      request.contacts
    )

    return new ImportContactsResponse({
      importedContacts,
    })
  }
}
