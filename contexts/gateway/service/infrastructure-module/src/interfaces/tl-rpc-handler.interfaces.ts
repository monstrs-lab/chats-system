import type { TLObject } from '@monstrs/mtproto-tl-core'

export interface TLRpcMetadata {
  authKeyId: bigint
  sessionId: bigint
  userId: bigint
  clientMessageId: bigint
  permAuthKeyId: bigint
  receiveTime: number
}

export interface ITLRpcHandler {
  execute: (
    request: InstanceType<typeof TLObject>,
    metadata: TLRpcMetadata
  ) => Promise<InstanceType<typeof TLObject>>
}
