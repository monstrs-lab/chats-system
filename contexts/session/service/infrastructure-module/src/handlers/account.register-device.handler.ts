import { BoolTrue }   from '@chats-system/tl'
import TL             from '@chats-system/tl'

import { RpcHandler } from '../rpc/index.js'

@RpcHandler(TL.account.RegisterDevice)
export class AccountRegisterDeviceHandler {
  async execute(): Promise<InstanceType<typeof BoolTrue>> {
    return new BoolTrue()
  }
}
