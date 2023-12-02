import { BoolTrue }     from '@chats-system/tl'
import { TLRpcHandler } from '@chats-system/tl-rpc'
import TL               from '@chats-system/tl'

@TLRpcHandler(TL.account.UnregisterDevice)
export class AccountUnregisterDeviceHandler {
  async execute(): Promise<InstanceType<typeof BoolTrue>> {
    return new BoolTrue()
  }
}
