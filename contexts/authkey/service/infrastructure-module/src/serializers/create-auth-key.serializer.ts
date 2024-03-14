import type { AuthKey }          from '@chats-system/authkey-domain-module'

import { CreateAuthKeyResponse } from '@chats-system/authkey-rpc/abstractions'

import { AuthKeySerializer }     from './auth-key.serializer.js'

export class CreateAuthKeySerializer extends CreateAuthKeyResponse {
  constructor(private readonly serializable: AuthKey) {
    super()
  }

  get authKey(): AuthKeySerializer {
    return new AuthKeySerializer(this.serializable)
  }
}
