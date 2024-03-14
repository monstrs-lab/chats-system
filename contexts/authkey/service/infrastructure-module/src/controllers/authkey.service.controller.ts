/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { PartialMessage }            from '@bufbuild/protobuf'
import type { AuthKey }                   from '@chats-system/authkey-domain-module'
import type { AuthKeyUser }               from '@chats-system/authkey-domain-module'
import type { CreateAuthKeyRequest }      from '@chats-system/authkey-rpc'
import type { GetAuthKeyUserRequest }     from '@chats-system/authkey-rpc'
import type { CreateAuthKeyUserRequest }  from '@chats-system/authkey-rpc'
import type { GetAuthKeyRequest }         from '@chats-system/authkey-rpc'
import type { ServiceImpl }               from '@connectrpc/connect'

import { CreateRequestContext }           from '@mikro-orm/core'
import { MikroORM }                       from '@mikro-orm/core'
import { ConnectRpcMethod }               from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }              from '@monstrs/nestjs-connectrpc'
import { Validator }                      from '@monstrs/nestjs-validation'
import { Controller }                     from '@nestjs/common'
import { QueryBus }                       from '@nestjs/cqrs'
import { CommandBus }                     from '@nestjs/cqrs'
import random                             from 'crypto-random-bigint'

import { CreateAuthKeyCommand }           from '@chats-system/authkey-application-module'
import { CreateAuthKeyUserCommand }       from '@chats-system/authkey-application-module'
import { GetAuthKeyByIdQuery }            from '@chats-system/authkey-application-module'
import { GetAuthKeyUserByAuthKeyIdQuery } from '@chats-system/authkey-application-module'
import { GetAuthKeyResponse }             from '@chats-system/authkey-rpc'
import { GetAuthKeyUserResponse }         from '@chats-system/authkey-rpc'
import { CreateAuthKeyResponse }          from '@chats-system/authkey-rpc'
import { CreateAuthKeyUserResponse }      from '@chats-system/authkey-rpc'
import { AuthKeyService }                 from '@chats-system/authkey-rpc'

import { CreateAuthKeyPayload }           from '../payloads/index.js'
import { CreateAuthKeyUserPayload }       from '../payloads/index.js'
import { GetAuthKeyPayload }              from '../payloads/index.js'
import { GetAuthKeyUserPayload }          from '../payloads/index.js'
import { CreateAuthKeySerializer }        from '../serializers/index.js'
import { CreateAuthKeyUserSerializer }    from '../serializers/index.js'
import { GetAuthKeySerializer }           from '../serializers/index.js'

@Controller()
@ConnectRpcService(AuthKeyService)
export class AuthKeyServiceController implements ServiceImpl<typeof AuthKeyService> {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly validator: Validator,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createAuthKey(
    request: CreateAuthKeyRequest
  ): Promise<PartialMessage<CreateAuthKeyResponse>> {
    const payload = new CreateAuthKeyPayload(request)

    await this.validator.validate(payload)

    await this.commandBus.execute(new CreateAuthKeyCommand(payload.id, payload.key))

    return new CreateAuthKeySerializer(
      await this.queryBus.execute<GetAuthKeyByIdQuery, AuthKey>(new GetAuthKeyByIdQuery(payload.id))
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createAuthKeyUser(
    request: CreateAuthKeyUserRequest
  ): Promise<PartialMessage<CreateAuthKeyUserResponse>> {
    const payload = new CreateAuthKeyUserPayload(request)

    await this.validator.validate(payload)

    await this.commandBus.execute(
      new CreateAuthKeyUserCommand(random(63), payload.authKeyId, payload.userId)
    )

    return new CreateAuthKeyUserSerializer(
      await this.queryBus.execute<GetAuthKeyUserByAuthKeyIdQuery, AuthKeyUser>(
        new GetAuthKeyUserByAuthKeyIdQuery(payload.authKeyId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getAuthKey(request: GetAuthKeyRequest): Promise<PartialMessage<GetAuthKeyResponse>> {
    const payload = new GetAuthKeyPayload(request)

    await this.validator.validate(payload)

    return new GetAuthKeySerializer(
      await this.queryBus.execute<GetAuthKeyByIdQuery, AuthKey>(
        new GetAuthKeyByIdQuery(payload.authKeyId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getAuthKeyUser(
    request: GetAuthKeyUserRequest
  ): Promise<PartialMessage<GetAuthKeyUserResponse>> {
    const payload = new GetAuthKeyUserPayload(request)

    await this.validator.validate(payload)

    return new CreateAuthKeyUserSerializer(
      await this.queryBus.execute<GetAuthKeyUserByAuthKeyIdQuery, AuthKeyUser>(
        new GetAuthKeyUserByAuthKeyIdQuery(payload.authKeyId)
      )
    )
  }
}
