/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { CreateSessionRequest }     from '@chats-system/session-rpc'
import type { CloseSessionRequest }      from '@chats-system/session-rpc'
import type { GetAuthKeyRequest }        from '@chats-system/session-rpc'
import type { GetAuthKeyResponse }       from '@chats-system/session-rpc'
import type { CreateAuthKeyRequest }     from '@chats-system/session-rpc'
import type { SendDataToSessionRequest } from '@chats-system/session-rpc'
import type { ServiceImpl }              from '@connectrpc/connect'

import { ConnectRpcMethod }              from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }             from '@monstrs/nestjs-connectrpc'
import { Controller }                    from '@nestjs/common'

import { CreateAuthKeyResponse }         from '@chats-system/session-rpc'
import { CloseSessionResponse }          from '@chats-system/session-rpc'
import { CreateSessionResponse }         from '@chats-system/session-rpc'
import { SendDataToSessionResponse }     from '@chats-system/session-rpc'
import { SessionService }                from '@chats-system/session-rpc'
import { client }                        from '@chats-system/authkey-rpc-client'

import { SessionData }                   from '../data/index.js'
import { ConnectionData }                from '../data/index.js'
import { SessionProcessor }              from '../session/index.js'

@Controller()
@ConnectRpcService(SessionService)
export class SessionServiceController implements ServiceImpl<typeof SessionService> {
  constructor(private readonly sessionProcessor: SessionProcessor) {}

  @ConnectRpcMethod()
  async queryAuthKey(request: GetAuthKeyRequest): Promise<GetAuthKeyResponse> {
    return client.getAuthKey(request)
  }

  @ConnectRpcMethod()
  async setAuthKey(request: CreateAuthKeyRequest): Promise<CreateAuthKeyResponse> {
    return client.createAuthKey(request)
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
