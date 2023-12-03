import type { IdGenClient } from '@chats-system/idgen-client-module'

import { IdGenPort }        from '@chats-system/messages-application-module'

export class IdGenPortImpl extends IdGenPort {
  constructor(private readonly idGenClient: IdGenClient) {
    super()
  }

  override async createMessageIds(
    fromId: bigint,
    toId: bigint
  ): Promise<{
    dialogMessageId: bigint
    outboxMessageId: number
    inboxMessageId: number
    pts: number
  }> {
    const [dialogMessageId, outboxMessageId, inboxMessageId, pts] = await Promise.all([
      this.idGenClient.getRandomId(),
      this.idGenClient.getNextMessageBoxId(fromId),
      this.idGenClient.getNextMessageBoxId(toId),
      this.idGenClient.getNextPtsId(fromId),
    ])

    return {
      dialogMessageId: dialogMessageId || 0n,
      outboxMessageId: outboxMessageId || 0,
      inboxMessageId: inboxMessageId || 0,
      pts: pts || 0,
    }
  }
}
