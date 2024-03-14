import type { AuthKeyUser }          from '@chats-system/authkey-domain-module'

import { CreateAuthKeyUserResponse } from '@chats-system/authkey-rpc/abstractions'

import { AuthKeyUserSerializer }     from './auth-key-user.serializer.js'

export class CreateAuthKeyUserSerializer extends CreateAuthKeyUserResponse {
  constructor(private readonly serializable: AuthKeyUser) {
    super()
  }

  get authKeyUser(): AuthKeyUserSerializer {
    return new AuthKeyUserSerializer(this.serializable)
  }
}
