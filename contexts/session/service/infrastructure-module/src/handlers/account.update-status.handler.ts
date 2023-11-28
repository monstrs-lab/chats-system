import { BoolTrue }   from '@chats-system/tl'
import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.account.UpdateStatus)
export class AccountUpdateStatusHandler {
  async execute(): Promise<InstanceType<typeof BoolTrue>> {
    return new BoolTrue()
  }
}
