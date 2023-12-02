import type { IdGenClient } from '@chats-system/idgen-client-module'

import { IdGenPort }        from '@chats-system/updates-domain-module'

export class IdGenPortImpl extends IdGenPort {
  constructor(private readonly idGenClient: IdGenClient) {
    super()
  }

  override async getCurrentSequenceId(key: bigint): Promise<number> {
    return this.idGenClient.getCurrentSequenceId(key)
  }

  override async getCurrentPtsId(key: bigint): Promise<number> {
    return this.idGenClient.getCurrentPtsId(key)
  }

  override async getNextPtsId(key: bigint): Promise<number> {
    return this.idGenClient.getNextPtsId(key)
  }
}
