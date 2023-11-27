import type { RpcMetadata }       from '@chats-system/core-rpc'
import type { TLObject }          from '@chats-system/tl'
import type { ExtractProperties } from '@monstrs/base-types'

export interface IRpcHandler {
  execute: (
    request: InstanceType<typeof TLObject>,
    session: SessionMetadata,
    metadata: ExtractProperties<RpcMetadata>
  ) => Promise<InstanceType<typeof TLObject>>
}

export interface SessionMetadata {
  authKeyId: bigint
  sessionId: bigint
  gatewayId: string
  clientIp: string
  salt: bigint
  payload: Uint8Array
}
