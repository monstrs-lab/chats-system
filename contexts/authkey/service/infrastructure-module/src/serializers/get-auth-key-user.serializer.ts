import type { AuthKeyUser }       from '@chats-system/authkey-domain-module'

import { GetAuthKeyUserResponse } from '@chats-system/authkey-rpc/abstractions'

import { AuthKeyUserSerializer }  from './auth-key-user.serializer.js'

export class GetAuthKeyUserSerializer extends GetAuthKeyUserResponse {
  constructor(private readonly serializable: AuthKeyUser) {
    super()
  }

  get authKeyUser(): AuthKeyUserSerializer {
    return new AuthKeyUserSerializer(this.serializable)
  }
}
