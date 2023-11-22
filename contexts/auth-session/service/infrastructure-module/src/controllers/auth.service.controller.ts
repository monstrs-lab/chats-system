/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { TLAuthsessionGetAuthorizations }    from '@chats-system/auth-session-rpc'
import type { TLAuthsessionResetAuthorization }   from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetLayer }             from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetLangPack }          from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetClient }            from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetLangCode }          from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetUserId }            from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetPushSessionId }     from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetFutureSalts }       from '@chats-system/auth-session-rpc'
import type { TLAuthsessionQueryAuthKey }         from '@chats-system/auth-session-rpc'
import type { TLAuthsessionSetAuthKey }           from '@chats-system/auth-session-rpc'
import type { TLAuthsessionBindAuthKeyUser }      from '@chats-system/auth-session-rpc'
import type { TLAuthsessionUnbindAuthKeyUser }    from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetPermAuthKeyId }     from '@chats-system/auth-session-rpc'
import type { TLAuthsessionBindTempAuthKey }      from '@chats-system/auth-session-rpc'
import type { TLAuthsessionSetClientSessionInfo } from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetAuthorization }     from '@chats-system/auth-session-rpc'
import type { TLAuthsessionGetAuthStateData }     from '@chats-system/auth-session-rpc'
import type { TLAuthsessionSetLayer }             from '@chats-system/auth-session-rpc'
import type { TLAuthsessionSetInitConnection }    from '@chats-system/auth-session-rpc'
import type { AuthKeyStateData }                  from '@chats-system/auth-session-rpc'
import type { VectorLong }                        from '@chats-system/auth-session-rpc'
import type { AccountAuthorizations }             from '@chats-system/core-rpc'
import type { Authorization }                     from '@chats-system/core-rpc'
import type { Int32 }                             from '@chats-system/core-rpc'
import type { String as CoreString }              from '@chats-system/core-rpc'
import type { Int64 }                             from '@chats-system/core-rpc'
import type { FutureSalt }                        from '@chats-system/core-rpc'
import type { AuthKeyInfo }                       from '@chats-system/core-rpc'
import type { Bool }                              from '@chats-system/core-rpc'
import type { ServiceImpl }                       from '@connectrpc/connect'

import { ConnectRpcMethod }                       from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                      from '@monstrs/nestjs-connectrpc'
import { Controller }                             from '@nestjs/common'

import { AuthSessionService }                     from '@chats-system/auth-session-rpc'

import { AuthKeyService }                         from '../services/index.js'

@Controller()
@ConnectRpcService(AuthSessionService)
export class AuthSessionServiceController implements ServiceImpl<typeof AuthSessionService> {
  constructor(private readonly authKeyService: AuthKeyService) {}

  @ConnectRpcMethod()
  async getAuthorization(request: TLAuthsessionGetAuthorization): Promise<Authorization> {
    // eslint-disable-next-line
    console.log(request, 'getAuthorization')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getAuthorizations(request: TLAuthsessionGetAuthorizations): Promise<AccountAuthorizations> {
    // eslint-disable-next-line
    console.log(request, 'getAuthorizations')

    return undefined as any
  }

  @ConnectRpcMethod()
  async resetAuthorization(request: TLAuthsessionResetAuthorization): Promise<VectorLong> {
    // eslint-disable-next-line
    console.log(request, 'resetAuthorization')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getLayer(request: TLAuthsessionGetLayer): Promise<Int32> {
    // eslint-disable-next-line
    console.log(request, 'getLayer')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getLangPack(request: TLAuthsessionGetLangPack): Promise<CoreString> {
    // eslint-disable-next-line
    console.log(request, 'getLangPack')

    return {} as CoreString
  }

  @ConnectRpcMethod()
  async getClient(request: TLAuthsessionGetClient): Promise<CoreString> {
    // eslint-disable-next-line
    console.log(request, 'getClient')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getLangCode(request: TLAuthsessionGetLangCode): Promise<CoreString> {
    // eslint-disable-next-line
    console.log(request, 'getLangCode')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getUserId(request: TLAuthsessionGetUserId): Promise<Int64> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId!)

    if (!authKey) {
      throw new Error('Auth key not found')
    }

    if (authKey.permAuthKeyId === 0n) {
      throw new Error('PermAuthKeyId is empty')
    }

    // eslint-disable-next-line
    console.log('query user id by auth key')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getPushSessionId(request: TLAuthsessionGetPushSessionId): Promise<Int64> {
    // eslint-disable-next-line
    console.log(request, 'getPushSessionId')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getFutureSalts(request: TLAuthsessionGetFutureSalts): Promise<FutureSalt> {
    // eslint-disable-next-line
    console.log(request, 'getFutureSalts')

    return undefined as any
  }

  @ConnectRpcMethod()
  async queryAuthKey(request: TLAuthsessionQueryAuthKey): Promise<AuthKeyInfo> {
    // @ts-expect-error
    return this.authKeyService.getAuthKey(request.authKeyId!)
  }

  @ConnectRpcMethod()
  async setAuthKey(request: TLAuthsessionSetAuthKey): Promise<Bool> {
    await this.authKeyService.setAuthKey(request.authKey!)

    // TODO: fix
    // @ts-expect-error
    return true
  }

  @ConnectRpcMethod()
  async bindAuthKeyUser(request: TLAuthsessionBindAuthKeyUser): Promise<Int64> {
    // eslint-disable-next-line
    console.log(request, 'bindAuthKeyUser')

    return undefined as any
  }

  @ConnectRpcMethod()
  async unbindAuthKeyUser(request: TLAuthsessionUnbindAuthKeyUser): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'unbindAuthKeyUser')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getPermAuthKeyId(request: TLAuthsessionGetPermAuthKeyId): Promise<Int64> {
    // eslint-disable-next-line
    console.log(request, 'getPermAuthKeyId')

    return undefined as any
  }

  @ConnectRpcMethod()
  async bindTempAuthKey(request: TLAuthsessionBindTempAuthKey): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'bindTempAuthKey')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setClientSessionInfo(request: TLAuthsessionSetClientSessionInfo): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'setClientSessionInfo')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getAuthStateData(request: TLAuthsessionGetAuthStateData): Promise<AuthKeyStateData> {
    // eslint-disable-next-line
    console.log(request, 'getAuthStateData')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setLayer(request: TLAuthsessionSetLayer): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'setLayer')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setInitConnection(request: TLAuthsessionSetInitConnection): Promise<Bool> {
    // eslint-disable-next-line
    console.log(request, 'setInitConnection')

    return undefined as any
  }
}
