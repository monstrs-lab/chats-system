import type { ServiceImpl }              from '@connectrpc/connect'

import { ConnectRpcMethod }              from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }             from '@monstrs/nestjs-connectrpc'
import { Controller }                    from '@nestjs/common'

import { GetCurrentSequenceIdRequest }   from '@chats-system/idgen-rpc'
import { GetCurrentSequenceIdsRequest }  from '@chats-system/idgen-rpc'
import { GetCurrentSequenceIdsResponse } from '@chats-system/idgen-rpc'
import { GetNextSequenceIdsRequest }     from '@chats-system/idgen-rpc'
import { GetNextSequenceIdsResponse }    from '@chats-system/idgen-rpc'
import { GetCurrentSequenceIdResponse }  from '@chats-system/idgen-rpc'
import { GetNextSequenceIdRequest }      from '@chats-system/idgen-rpc'
import { GetNextSequenceIdResponse }     from '@chats-system/idgen-rpc'
import { SetCurrentSequenceIdRequest }   from '@chats-system/idgen-rpc'
import { SetCurrentSequenceIdResponse }  from '@chats-system/idgen-rpc'
import { IdGenService }                  from '@chats-system/idgen-rpc'

import { SequenceIdService }             from '../services/index.js'

@Controller()
@ConnectRpcService(IdGenService)
export class IdGenServiceController implements ServiceImpl<typeof IdGenService> {
  constructor(private readonly sequenceIdService: SequenceIdService) {}

  @ConnectRpcMethod()
  async setCurrentSequenceId(
    request: SetCurrentSequenceIdRequest
  ): Promise<SetCurrentSequenceIdResponse> {
    await this.sequenceIdService.setCurrentSequenceId(request.key, request.id)

    return new SetCurrentSequenceIdResponse({ success: true })
  }

  @ConnectRpcMethod()
  async getCurrentSequenceId(
    request: GetCurrentSequenceIdRequest
  ): Promise<GetCurrentSequenceIdResponse> {
    return new GetCurrentSequenceIdResponse({
      sequence: {
        id: await this.sequenceIdService.getCurrentSequenceId(request.query!.key),
        key: request.query!.key,
      },
    })
  }

  @ConnectRpcMethod()
  async getCurrentSequenceIds(
    request: GetCurrentSequenceIdsRequest
  ): Promise<GetCurrentSequenceIdsResponse> {
    const sequences = []

    for await (const query of request.queries) {
      sequences.push({
        id: await this.sequenceIdService.getCurrentSequenceId(query.key),
        key: query.key,
      })
    }

    return new GetCurrentSequenceIdsResponse({
      sequences,
    })
  }

  @ConnectRpcMethod()
  async getNextSequenceId(request: GetNextSequenceIdRequest): Promise<GetNextSequenceIdResponse> {
    return new GetNextSequenceIdResponse({
      sequence: {
        id: await this.sequenceIdService.getNextSequenceId(request.query!.key),
        key: request.query!.key,
      },
    })
  }

  @ConnectRpcMethod()
  async getNextSequenceIds(
    request: GetNextSequenceIdsRequest
  ): Promise<GetNextSequenceIdsResponse> {
    const sequences = []

    for await (const query of request.queries) {
      sequences.push({
        id: await this.sequenceIdService.getNextSequenceId(query.key, query.increment),
        key: query.key,
      })
    }

    return new GetNextSequenceIdsResponse({
      sequences,
    })
  }
}
