import type { TLObject } from '@chats-system/tl'

export interface TLRpcSession {
  authKeyId: bigint
  sessionId: bigint
  gatewayId: string
  clientIp: string
  salt: bigint
  payload: Uint8Array
}

export interface TLRpcMetadata {
  authKeyId: bigint
  sessionId: bigint
  userId: bigint
  clientMessageId: bigint
  permAuthKeyId: bigint
  serverId: string
  clientIp: string
  receiveTime: number
  layer: number
  client: string
  langPack: string
}

export interface ITLRpcHandler {
  execute: (
    request: InstanceType<typeof TLObject>,
    session: TLRpcSession,
    metadata: TLRpcMetadata
  ) => Promise<InstanceType<typeof TLObject>>
}
