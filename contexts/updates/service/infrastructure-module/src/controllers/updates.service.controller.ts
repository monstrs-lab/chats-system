import type { ServiceImpl }  from '@connectrpc/connect'

import { ConnectRpcMethod }  from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService } from '@monstrs/nestjs-connectrpc'
import { Controller }        from '@nestjs/common'

import { IdGen }             from '@chats-system/idgen'
import { GetStateRequest }   from '@chats-system/updates-rpc'
import { State }             from '@chats-system/updates-rpc'
import { GetStateResponse }  from '@chats-system/updates-rpc'
import { UpdatesService }    from '@chats-system/updates-rpc'

const bigintToNumber = (target: bigint): number => {
  const buf = Buffer.alloc(9)
  buf.writeBigInt64BE(target)

  return Math.round(buf.readInt32BE())
}

@Controller()
@ConnectRpcService(UpdatesService)
export class UpdatesServiceController implements ServiceImpl<typeof UpdatesService> {
  constructor(private readonly idGen: IdGen) {}

  @ConnectRpcMethod()
  async getState(request: GetStateRequest): Promise<GetStateResponse> {
    let pts = await this.idGen.getCurrentPtsId(request.userId)

    if (!pts || pts === 0n) {
      pts = await this.idGen.getNextPtsId(request.userId)
    }

    let seq = await this.idGen.getCurrentSeqId(request.authKeyId)

    if (!seq || seq === 0n) {
      seq = -1n
    }

    return new GetStateResponse({
      state: new State({
        pts: pts ? bigintToNumber(pts) : 0,
        qts: 0,
        seq: bigintToNumber(seq),
        date: Date.now() / 1000,
        unreadCount: 0,
      }),
    })
  }
}
