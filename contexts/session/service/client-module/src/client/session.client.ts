import type { PartialMessage }            from '@bufbuild/protobuf'
import type { CloseSessionRequest }       from '@chats-system/session-rpc-client'
import type { CloseSessionResponse }      from '@chats-system/session-rpc-client'
import type { CreateSessionRequest }      from '@chats-system/session-rpc-client'
import type { CreateSessionResponse }     from '@chats-system/session-rpc-client'
import type { SendDataToSessionRequest }  from '@chats-system/session-rpc-client'
import type { SendDataToSessionResponse } from '@chats-system/session-rpc-client'
import type { SessionService }            from '@chats-system/session-rpc-client'
import type { PromiseClient }             from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                         from '@nestjs/common'
import { Injectable }                     from '@nestjs/common'

import { SESSION_CLIENT_TOKEN }           from '../constants/index.js'

@Injectable()
export class SessionClient {
  constructor(
    @Inject(SESSION_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof SessionService>
  ) {}

  async createSession(
    request: PartialMessage<CreateSessionRequest>
  ): Promise<CreateSessionResponse> {
    return this.client.createSession(request)
  }

  async closeSession(request: PartialMessage<CloseSessionRequest>): Promise<CloseSessionResponse> {
    return this.client.closeSession(request)
  }

  async sendDataToSession(
    request: PartialMessage<SendDataToSessionRequest>
  ): Promise<SendDataToSessionResponse> {
    return this.client.sendDataToSession(request)
  }
}
