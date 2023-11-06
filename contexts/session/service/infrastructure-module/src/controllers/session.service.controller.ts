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

import { TLAuthsessionQueryAuthKey }            from '@chats-system/auth-rpc-client'
import { BoolTrue }                             from '@chats-system/core-rpc'
import { BoolFalse }                            from '@chats-system/core-rpc'
import { SessionService }                       from '@chats-system/session-rpc'
import { client }                               from '@chats-system/auth-rpc-client'

import { AuthCache }                            from '../cache/index.js'
import { SessionsManager }                      from '../service/index.js'
import { AuthSessions }                         from '../service/index.js'

@Controller()
@ConnectRpcService(SessionService)
export class SessionServiceController implements ServiceImpl<typeof SessionService> {
  constructor(private readonly authCache: AuthCache) {}

  @ConnectRpcMethod()
  async queryAuthKey(request: TLSessionQueryAuthKey): Promise<AuthKeyInfo> {
    const authKey = await client.queryAuthKey(
      new TLAuthsessionQueryAuthKey({
        authKeyId: request.authKeyId,
      })
    )

    return authKey
  }

  @ConnectRpcMethod()
  async setAuthKey(request: TLSessionSetAuthKey): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'setAuthKey')

    return undefined as any
  }

  @ConnectRpcMethod()
  async createSession(request: TLSessionCreateSession): Promise<Bool> {
    console.log(request, 'createSession')
    if (!request.client?.authKeyId) {
      return BoolFalse
    }

    if (!SessionsManager.hasByAuthKeyId(request.client.authKeyId)) {
      const sessions = new AuthSessions(request.client.authKeyId, this.authCache)

      SessionsManager.setByAuthKeyId(request.client.authKeyId, sessions)
    }

    SessionsManager.getByAuthKeyId(request.client.authKeyId)!.sessionClientNew(
      request.client.serverId!,
      request.client.sessionId!
    )

    return BoolTrue
  }

  @ConnectRpcMethod()
  async sendDataToSession(request: TLSessionSendDataToSession): Promise<Bool> {
    console.log(
      request,
      Buffer.from(request.data!.payload!).toString('base64'),
      'sendDataToSession'
    )
    if (!request.data?.authKeyId) {
      return BoolFalse
    }

    if (!SessionsManager.hasByAuthKeyId(request.data.authKeyId)) {
      const sessions = new AuthSessions(request.data.authKeyId, this.authCache)

      SessionsManager.setByAuthKeyId(request.data.authKeyId, sessions)
    }

    SessionsManager.getByAuthKeyId(request.data.authKeyId)!.sessionDataArrived(
      request.data.serverId!,
      request.data.clientIp!,
      request.data.sessionId!,
      request.data.salt!,
      request.data.payload!
    )

    return BoolTrue
  }

  @ConnectRpcMethod()
  async sendHttpDataToSession(request: TLSessionSendHttpDataToSession): Promise<HttpSessionData> {
    // eslint-disable-next-line
    console.log(request, 'sendHttpDataToSession')

    return undefined as any
  }

  @ConnectRpcMethod()
  async closeSession(request: TLSessionCloseSession): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'closeSession')

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
