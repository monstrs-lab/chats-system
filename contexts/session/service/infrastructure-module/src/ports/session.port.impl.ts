import type { TLObject }             from '@chats-system/tl'

import type { SessionData }          from '../data/session.data.js'
import type { SessionRegistry }      from '../registry/index.js'
import type { SessionResponseQueue } from '../session/index.js'

import { MTProtoMessageId }          from '@monstrs/mtproto-core'

import { SessionPort }               from '@chats-system/session-application-module'

export class SessionPortImpl extends SessionPort {
  constructor(
    private readonly responseQueue: SessionResponseQueue,
    private readonly sessionRegistry: SessionRegistry
  ) {
    super()
  }

  override async send(userId: bigint, message: InstanceType<typeof TLObject>): Promise<void> {
    const session = this.sessionRegistry.get(userId)

    if (session) {
      const bytes = message.write()

      const response = {
        seqNo: 0,
        messageId: MTProtoMessageId.generate().value,
        messageLength: bytes.length,
        message: bytes,
      }

      this.responseQueue.push(session as SessionData, response)
    }
  }
}
