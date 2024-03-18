/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { PartialMessage }    from '@bufbuild/protobuf'
import type { User }              from '@chats-system/users-domain-module'
import type { CreateUserRequest } from '@chats-system/users-rpc'
import type { ListUsersRequest }  from '@chats-system/users-rpc'
import type { ServiceImpl }       from '@connectrpc/connect'

import { CreateRequestContext }   from '@mikro-orm/core'
import { MikroORM }               from '@mikro-orm/core'
import { ConnectRpcMethod }       from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }      from '@monstrs/nestjs-connectrpc'
import { Validator }              from '@monstrs/nestjs-validation'
import { Controller }             from '@nestjs/common'
import { QueryBus }               from '@nestjs/cqrs'
import { CommandBus }             from '@nestjs/cqrs'
import random                     from 'crypto-random-bigint'

import { CreateUserCommand }      from '@chats-system/users-application-module'
import { FindUsersByQueryResult } from '@chats-system/users-application-module'
import { GetUserByIdQuery }       from '@chats-system/users-application-module'
import { ListUsersQuery }         from '@chats-system/users-application-module'
import { ListUsersResponse }      from '@chats-system/users-rpc'
import { CreateUserResponse }     from '@chats-system/users-rpc'
import { UsersService }           from '@chats-system/users-rpc'

import { CreateUserPayload }      from '../payloads/index.js'
import { ListUsersPayload }       from '../payloads/index.js'
import { CreateUserSerializer }   from '../serializers/index.js'
import { ListUsersSerializer }    from '../serializers/index.js'

@Controller()
@ConnectRpcService(UsersService)
export class UsersServiceController implements ServiceImpl<typeof UsersService> {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly validator: Validator,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createUser(request: CreateUserRequest): Promise<PartialMessage<CreateUserResponse>> {
    const payload = new CreateUserPayload(request)

    await this.validator.validate(payload)

    const command = new CreateUserCommand(
      random(63),
      payload.externalId,
      payload.firstName,
      payload.lastName
    )

    await this.commandBus.execute(command)

    return new CreateUserSerializer(
      await this.queryBus.execute<GetUserByIdQuery, User>(new GetUserByIdQuery(command.userId))
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async listUsers(request: ListUsersRequest): Promise<PartialMessage<ListUsersResponse>> {
    const payload = new ListUsersPayload(request)

    await this.validator.validate(payload)

    return new ListUsersSerializer(
      await this.queryBus.execute<ListUsersQuery, FindUsersByQueryResult>(
        new ListUsersQuery(payload.pager, payload.order, payload.query)
      )
    )
  }
}
