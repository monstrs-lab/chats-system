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

import { SessionService }                       from '@chats-system/session-rpc'

@Controller()
@ConnectRpcService(SessionService)
export class SessionServiceController implements ServiceImpl<typeof SessionService> {
  @ConnectRpcMethod()
  async queryAuthKey(request: TLSessionQueryAuthKey): Promise<AuthKeyInfo> {
    // eslint-disable-next-line
    console.log(request, 'queryAuthKey')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setAuthKey(request: TLSessionSetAuthKey): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'setAuthKey')

    return undefined as any
  }

  @ConnectRpcMethod()
  async createSession(request: TLSessionCreateSession): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'createSession')

    return undefined as any
  }

  @ConnectRpcMethod()
  async sendDataToSession(request: TLSessionSendDataToSession): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'sendDataToSession')

    return undefined as any
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
