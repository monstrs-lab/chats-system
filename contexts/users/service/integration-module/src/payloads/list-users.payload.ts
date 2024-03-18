/* eslint-disable max-classes-per-file */

import type { ListUsersRequest_UsersQuery } from '@chats-system/users-rpc/interfaces'
import type { ListUsersRequest }            from '@chats-system/users-rpc/interfaces'

import { OrderPayload }                     from '@monstrs/rpc-query-payloads'
import { PagerPayload }                     from '@monstrs/rpc-query-payloads'
import { BigIntQueryPayload }               from '@monstrs/rpc-query-payloads'
import { IdQueryPayload }                   from '@monstrs/rpc-query-payloads'
import { IsOptional }                       from 'class-validator'
import { ValidateNested }                   from 'class-validator'

export class ListUsersQueryPayload {
  constructor(private readonly query: ListUsersRequest_UsersQuery) {}

  @IsOptional()
  @ValidateNested()
  get id(): BigIntQueryPayload {
    return new BigIntQueryPayload(this.query.id)
  }

  @IsOptional()
  @ValidateNested()
  get externalId(): IdQueryPayload {
    return new IdQueryPayload(this.query.externalId)
  }
}

export class ListUsersPayload {
  constructor(private readonly request: ListUsersRequest) {}

  @IsOptional()
  @ValidateNested()
  get pager(): PagerPayload | undefined {
    return this.request.pager ? new PagerPayload(this.request.pager) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get order(): OrderPayload | undefined {
    return this.request.order ? new OrderPayload(this.request.order) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get query(): ListUsersQueryPayload | undefined {
    return this.request.query ? new ListUsersQueryPayload(this.request.query) : undefined
  }
}
