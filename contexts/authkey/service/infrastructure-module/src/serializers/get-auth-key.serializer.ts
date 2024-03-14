import type { AuthKey }       from '@chats-system/authkey-domain-module'

import { GetAuthKeyResponse } from '@chats-system/authkey-rpc/abstractions'

import { AuthKeySerializer }  from './auth-key.serializer.js'

export class GetAuthKeySerializer extends GetAuthKeyResponse {
  constructor(private readonly serializable: AuthKey) {
    super()
  }

  get authKey(): AuthKeySerializer {
    return new AuthKeySerializer(this.serializable)
  }
}
