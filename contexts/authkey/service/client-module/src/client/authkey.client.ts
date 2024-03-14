import type { PartialMessage }            from '@bufbuild/protobuf'
import type { AuthKeyService }            from '@chats-system/authkey-rpc-client'
import type { CreateAuthKeyUserResponse } from '@chats-system/authkey-rpc-client'
import type { GetAuthKeyRequest }         from '@chats-system/authkey-rpc-client'
import type { GetAuthKeyResponse }        from '@chats-system/authkey-rpc-client'
import type { GetAuthKeyUserRequest }     from '@chats-system/authkey-rpc-client'
import type { GetAuthKeyUserResponse }    from '@chats-system/authkey-rpc-client'
import type { CreateAuthKeyRequest }      from '@chats-system/authkey-rpc-client'
import type { CreateAuthKeyResponse }     from '@chats-system/authkey-rpc-client'
import type { CreateAuthKeyUserRequest }  from '@chats-system/authkey-rpc-client'
import type { PromiseClient }             from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                         from '@nestjs/common'
import { Injectable }                     from '@nestjs/common'

import { AUTH_KEY_CLIENT_TOKEN }          from '../constants/index.js'

@Injectable()
export class AuthKeyClient {
  constructor(
    @Inject(AUTH_KEY_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof AuthKeyService>
  ) {}

  async createAuthKey(
    request: PartialMessage<CreateAuthKeyRequest>
  ): Promise<CreateAuthKeyResponse> {
    return this.client.createAuthKey(request)
  }

  async createAuthKeyUser(
    request: PartialMessage<CreateAuthKeyUserRequest>
  ): Promise<CreateAuthKeyUserResponse> {
    return this.client.createAuthKeyUser(request)
  }

  async getAuthKey(request: PartialMessage<GetAuthKeyRequest>): Promise<GetAuthKeyResponse> {
    return this.client.getAuthKey(request)
  }

  async getAuthKeyUser(
    request: PartialMessage<GetAuthKeyUserRequest>
  ): Promise<GetAuthKeyUserResponse> {
    return this.client.getAuthKeyUser(request)
  }
}
