/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { CreateSessionRequest }     from '@chats-system/session-rpc'
import type { CloseSessionRequest }      from '@chats-system/session-rpc'
import type { QueryAuthKeyRequest }      from '@chats-system/session-rpc'
import type { QueryAuthKeyResponse }     from '@chats-system/session-rpc'
import type { SetAuthKeyRequest }        from '@chats-system/session-rpc'
import type { SetAuthKeyResponse }       from '@chats-system/session-rpc'
import type { SendDataToSessionRequest } from '@chats-system/session-rpc'
import type { ServiceImpl }              from '@connectrpc/connect'

import { ConnectRpcMethod }              from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }             from '@monstrs/nestjs-connectrpc'
import { Controller }                    from '@nestjs/common'

import { CloseSessionResponse }          from '@chats-system/session-rpc'
import { CreateSessionResponse }         from '@chats-system/session-rpc'
import { SendDataToSessionResponse }     from '@chats-system/session-rpc'
import { SessionService }                from '@chats-system/session-rpc'
import { client }                        from '@chats-system/auth-session-rpc-client'

import { SessionData }                   from '../data/index.js'
import { ConnectionData }                from '../data/index.js'
import { SessionProcessor }              from '../session/index.js'

@Controller()
@ConnectRpcService(SessionService)
export class SessionServiceController implements ServiceImpl<typeof SessionService> {
  constructor(private readonly sessionProcessor: SessionProcessor) {}

  @ConnectRpcMethod()
  async queryAuthKey(request: QueryAuthKeyRequest): Promise<QueryAuthKeyResponse> {
    return client.queryAuthKey({
      authKeyId: request.authKeyId,
    })
  }

  @ConnectRpcMethod()
  async setAuthKey(request: SetAuthKeyRequest): Promise<SetAuthKeyResponse> {
    return client.setAuthKey({
      authKey: request.authKey,
      futureSalt: request.futureSalt,
      expiresIn: request.expiresIn,
    })
  }

  @ConnectRpcMethod()
  async createSession(request: CreateSessionRequest): Promise<CreateSessionResponse> {
    if (!request.client?.authKeyId) {
      return new CreateSessionResponse({ success: false })
    }

    this.sessionProcessor.processSessionNew(
      new ConnectionData(
        request.client.authKeyId,
        request.client.sessionId,
        request.client.serverId
      )
    )

    return new CreateSessionResponse({ success: true })
  }

  @ConnectRpcMethod()
  async closeSession(request: CloseSessionRequest): Promise<CloseSessionResponse> {
    if (!request.client?.authKeyId) {
      return new CloseSessionResponse({ success: false })
    }

    this.sessionProcessor.processSessionClose(
      new ConnectionData(
        request.client.authKeyId,
        request.client.sessionId,
        request.client.serverId
      )
    )

    return new CloseSessionResponse({ success: true })
  }

  @ConnectRpcMethod()
  async sendDataToSession(request: SendDataToSessionRequest): Promise<SendDataToSessionResponse> {
    if (!request.data?.authKeyId) {
      return new SendDataToSessionResponse({ success: false })
    }

    this.sessionProcessor.processSessionData(
      new SessionData(
        request.data.authKeyId,
        request.data.sessionId,
        request.data.serverId,
        request.data.clientIp,
        request.data.salt,
        request.data.payload
      )
    )

    return new SendDataToSessionResponse({ success: true })
  }
}
