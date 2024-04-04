import { Injectable }  from '@nestjs/common'

import { IdGenClient } from '@chats-system/idgen-client-module'
import { IdGenPort }   from '@chats-system/messages-application-module'

@Injectable()
export class IdGenPortImpl extends IdGenPort {
  constructor(private readonly idGenClient: IdGenClient) {
    super()
  }

  async createMessageIds(
    fromId: bigint,
    toId: bigint
  ): Promise<{
    dialogMessageId: bigint
    outboxMessageId: bigint
    inboxMessageId: bigint
  }> {
    const [dialogMessageId, outboxMessageId, inboxMessageId] = await Promise.all([
      this.idGenClient.getRandomId(),
      this.idGenClient.getNextMessageBoxId(fromId),
      this.idGenClient.getNextMessageBoxId(toId),
    ])

    return {
      dialogMessageId: dialogMessageId || 0n,
      outboxMessageId: outboxMessageId || 0n,
      inboxMessageId: inboxMessageId || 0n,
    }
  }
}
