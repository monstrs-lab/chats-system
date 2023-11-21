/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { String as CoreString }            from '@chats-system/core-rpc'
import type { AuthKeyInfo }                     from '@chats-system/core-rpc'
import type { Bool }                            from '@chats-system/core-rpc'
import type { TLSessionCreateSession }          from '@chats-system/session-rpc'
import type { TLSessionQueryAuthKey }           from '@chats-system/session-rpc'
import type { TLSessionSetAuthKey }             from '@chats-system/session-rpc'
import type { TLSessionSendDataToSession }      from '@chats-system/session-rpc'
import type { TLSessionSendHttpDataToSession }  from '@chats-system/session-rpc'
import type { TLSessionCloseSession }           from '@chats-system/session-rpc'
import type { TLSessionPushUpdatesData }        from '@chats-system/session-rpc'
import type { TLSessionPushSessionUpdatesData } from '@chats-system/session-rpc'
import type { TLSessionPushRpcResultData }      from '@chats-system/session-rpc'
import type { HttpSessionData }                 from '@chats-system/session-rpc'
import type { ServiceImpl }                     from '@connectrpc/connect'

import { ConnectRpcMethod }                     from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                    from '@monstrs/nestjs-connectrpc'
import { Controller }                           from '@nestjs/common'

import { TLBoolTrue }                           from '@chats-system/core-rpc'
import { TLBoolFalse }                          from '@chats-system/core-rpc'
import { SessionService }                       from '@chats-system/session-rpc'
import { client }                               from '@chats-system/auth-rpc-client'

import { AuthCache }                            from '../cache/index.js'
import { SessionData }                          from '../data/index.js'
import { ConnectionData }                       from '../data/index.js'
import { SessionsManager }                      from '../service/index.js'
import { AuthSessions }                         from '../service/index.js'
import { SessionProcessor }                     from '../session/index.js'

@Controller()
@ConnectRpcService(SessionService)
export class SessionServiceController implements ServiceImpl<typeof SessionService> {
  constructor(
    private readonly authCache: AuthCache,
    private readonly sessionProcessor: SessionProcessor
  ) {}

  @ConnectRpcMethod()
  async queryAuthKey(request: TLSessionQueryAuthKey): Promise<AuthKeyInfo> {
    return client.queryAuthKey({
      authKeyId: request.authKeyId!,
    })
  }

  @ConnectRpcMethod()
  async setAuthKey(request: TLSessionSetAuthKey): Promise<Bool> {
    return client.setAuthKey({
      authKey: request.authKey,
      futureSalt: request.futureSalt,
      expiresIn: request.expiresIn,
    })
  }

  @ConnectRpcMethod()
  async createSession(request: TLSessionCreateSession): Promise<Bool> {
    if (!request.client?.authKeyId) {
      // @ts-expect-error
      return TLBoolFalse
    }

    this.sessionProcessor.processSessionNew(
      new ConnectionData(
        request.client.authKeyId,
        request.client.sessionId!,
        request.client.serverId!
      )
    )

    // @ts-expect-error
    return TLBoolTrue
  }

  @ConnectRpcMethod()
  async closeSession(request: TLSessionCloseSession): Promise<Bool> {
    if (!request.client?.authKeyId) {
      // @ts-expect-error
      return TLBoolFalse
    }

    this.sessionProcessor.processSessionClose(
      new ConnectionData(
        request.client.authKeyId,
        request.client.sessionId!,
        request.client.serverId!
      )
    )

    // @ts-expect-error
    return TLBoolTrue
  }

  @ConnectRpcMethod()
  async sendDataToSession(request: TLSessionSendDataToSession): Promise<Bool> {
    if (!request.data?.authKeyId) {
      // @ts-expect-error
      return TLBoolFalse
    }

    this.sessionProcessor.processSessionData(
      new SessionData(
        request.data.authKeyId,
        request.data.sessionId!,
        request.data.serverId!,
        request.data.clientIp!,
        request.data.salt!,
        request.data.payload!
      )
    )

    // @ts-expect-error
    return TLBoolTrue
  }

  @ConnectRpcMethod()
  async sendHttpDataToSession(request: TLSessionSendHttpDataToSession): Promise<HttpSessionData> {
    // eslint-disable-next-line
    console.log(request, 'sendHttpDataToSession')

    return undefined as any
  }

  @ConnectRpcMethod()
  async pushUpdatesData(request: TLSessionPushUpdatesData): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'pushUpdatesData')

    return undefined as any
  }

  @ConnectRpcMethod()
  async pushSessionUpdatesData(request: TLSessionPushSessionUpdatesData): Promise<CoreString> {
    // eslint-disable-next-line
    console.log(request, 'pushSessionUpdatesData')

    return undefined as any
  }

  @ConnectRpcMethod()
  async pushRpcResultData(request: TLSessionPushRpcResultData): Promise<CoreString> {
    // eslint-disable-next-line
    console.log(request, 'getLangCode')

    return undefined as any
  }
}
