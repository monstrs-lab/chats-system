/* eslint-disable max-classes-per-file */

import type { ListMessagesRequest_MessagesQuery } from '@chats-system/messages-rpc/interfaces'
import type { ListMessagesRequest }               from '@chats-system/messages-rpc/interfaces'

import { OrderPayload }                           from '@monstrs/rpc-query-payloads'
import { PagerPayload }                           from '@monstrs/rpc-query-payloads'
import { BigIntQueryPayload }                     from '@monstrs/rpc-query-payloads'
import { IsOptional }                             from 'class-validator'
import { ValidateNested }                         from 'class-validator'

export class ListMessagesQueryPayload {
  constructor(private readonly query: ListMessagesRequest_MessagesQuery) {}

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

  @IsOptional()
  @ValidateNested()
  get dialogId1(): BigIntQueryPayload {
    return new BigIntQueryPayload(this.query.dialogId1)
  }

  @IsOptional()
  @ValidateNested()
  get dialogId2(): BigIntQueryPayload {
    return new BigIntQueryPayload(this.query.dialogId2)
  }
}

export class ListMessagesPayload {
  constructor(private readonly request: ListMessagesRequest) {}

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
  get query(): ListMessagesQueryPayload | undefined {
    return this.request.query ? new ListMessagesQueryPayload(this.request.query) : undefined
  }
}
