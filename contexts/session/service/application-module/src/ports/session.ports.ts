import type { TLObject } from '@chats-system/tl'

export abstract class SessionPort {
  abstract send(userId: bigint, message: InstanceType<typeof TLObject>): Promise<void>
}
