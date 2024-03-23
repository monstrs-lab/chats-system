/* eslint-disable max-classes-per-file */

import type { ListDialogsRequest_DialogsQuery } from '@chats-system/messages-rpc/interfaces'
import type { ListDialogsRequest }              from '@chats-system/messages-rpc/interfaces'

import { OrderPayload }                         from '@monstrs/rpc-query-payloads'
import { PagerPayload }                         from '@monstrs/rpc-query-payloads'
import { BigIntQueryPayload }                   from '@monstrs/rpc-query-payloads'
import { IsOptional }                           from 'class-validator'
import { ValidateNested }                       from 'class-validator'

export class ListDialogsQueryPayload {
  constructor(private readonly query: ListDialogsRequest_DialogsQuery) {}

  @IsOptional()
  @ValidateNested()
  get id(): BigIntQueryPayload {
    return new BigIntQueryPayload(this.query.id)
  }

  @IsOptional()
  @ValidateNested()
  get userId(): BigIntQueryPayload {
    return new BigIntQueryPayload(this.query.userId)
  }
}

export class ListDialogsPayload {
  constructor(private readonly request: ListDialogsRequest) {}

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
  get query(): ListDialogsQueryPayload | undefined {
    return this.request.query ? new ListDialogsQueryPayload(this.request.query) : undefined
  }
}
