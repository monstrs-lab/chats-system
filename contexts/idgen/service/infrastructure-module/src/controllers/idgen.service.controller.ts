import type { ServiceImpl }        from '@connectrpc/connect'

import { ConnectRpcMethod }        from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }       from '@monstrs/nestjs-connectrpc'
import { Controller }              from '@nestjs/common'

import { GetCurrentSeqIdRequest }  from '@chats-system/idgen-rpc'
import { GetCurrentSeqIdResponse } from '@chats-system/idgen-rpc'
import { GetNextSeqIdRequest }     from '@chats-system/idgen-rpc'
import { GetNextSeqIdResponse }    from '@chats-system/idgen-rpc'
import { SetCurrentSeqIdRequest }  from '@chats-system/idgen-rpc'
import { SetCurrentSeqIdResponse } from '@chats-system/idgen-rpc'
import { IdGenService }            from '@chats-system/idgen-rpc'
import { GetNextIdResponse }       from '@chats-system/idgen-rpc'

import { SeqIdService }            from '../services/index.js'

@Controller()
@ConnectRpcService(IdGenService)
export class IdGenServiceController implements ServiceImpl<typeof IdGenService> {
  constructor(private readonly seqIdService: SeqIdService) {}

  @ConnectRpcMethod()
  getNextId(): GetNextIdResponse {
    return new GetNextIdResponse({
      nextId: this.seqIdService.nextId(),
    })
  }

  @ConnectRpcMethod()
  async getCurrentSeqId(request: GetCurrentSeqIdRequest): Promise<GetCurrentSeqIdResponse> {
    return new GetCurrentSeqIdResponse({
      seqId: await this.seqIdService.getCurrentSeqId(request.id!.key),
    })
  }

  @ConnectRpcMethod()
  async setCurrentSeqId(request: SetCurrentSeqIdRequest): Promise<SetCurrentSeqIdResponse> {
    await this.seqIdService.setCurrentSeqId(request.key, request.id)

    return new SetCurrentSeqIdResponse({ success: true })
  }

  @ConnectRpcMethod()
  async getNextSeqId(request: GetNextSeqIdRequest): Promise<GetNextSeqIdResponse> {
    return new GetNextSeqIdResponse({
      seqId: await this.seqIdService.getNextSeqId(request.key),
    })
  }
}
