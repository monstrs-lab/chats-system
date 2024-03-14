import type { AuthKeyUser } from '@chats-system/authkey-domain-module'

import * as rpc             from '@chats-system/authkey-rpc/abstractions'

export class AuthKeyUserSerializer extends rpc.AuthKeyUser {
  constructor(private readonly authKeyUser: AuthKeyUser) {
    super()
  }

  get id(): bigint {
    return this.authKeyUser.id
  }

  get authKeyId(): bigint {
    return this.authKeyUser.authKeyId
  }

  get userId(): bigint {
    return this.authKeyUser.userId
  }
}
