import type { AuthKey } from '@chats-system/authkey-domain-module'

import * as rpc         from '@chats-system/authkey-rpc/abstractions'

export class AuthKeySerializer extends rpc.AuthKey {
  constructor(private readonly authKey: AuthKey) {
    super()
  }

  get id(): bigint {
    return this.authKey.id
  }

  get key(): Buffer {
    return this.authKey.key
  }
}
