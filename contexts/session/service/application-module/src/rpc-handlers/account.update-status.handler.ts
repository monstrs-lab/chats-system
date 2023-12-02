import { BoolTrue }     from '@chats-system/tl'
import { TLRpcHandler } from '@chats-system/tl-rpc'
import TL               from '@chats-system/tl'

@TLRpcHandler(TL.account.UpdateStatus)
export class AccountUpdateStatusHandler {
  async execute(): Promise<InstanceType<typeof BoolTrue>> {
    return new BoolTrue()
  }
}
