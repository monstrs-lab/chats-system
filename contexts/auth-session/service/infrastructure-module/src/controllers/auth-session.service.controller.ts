/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { GetAuthorizationsResponse }    from '@chats-system/auth-session-rpc'
import type { BindAuthKeyUserRequest }       from '@chats-system/auth-session-rpc'
import type { BindAuthKeyUserResponse }      from '@chats-system/auth-session-rpc'
import type { BindTempAuthKeyRequest }       from '@chats-system/auth-session-rpc'
import type { BindTempAuthKeyResponse }      from '@chats-system/auth-session-rpc'
import type { GeLayerResponse }              from '@chats-system/auth-session-rpc'
import type { GetAuthStateDataRequest }      from '@chats-system/auth-session-rpc'
import type { GetAuthStateDataResponse }     from '@chats-system/auth-session-rpc'
import type { GetAuthorizationRequest }      from '@chats-system/auth-session-rpc'
import type { GetAuthorizationResponse }     from '@chats-system/auth-session-rpc'
import type { GetAuthorizationsRequest }     from '@chats-system/auth-session-rpc'
import type { GetClientRequest }             from '@chats-system/auth-session-rpc'
import type { GetClientResponse }            from '@chats-system/auth-session-rpc'
import type { GetFutureSaltsRequest }        from '@chats-system/auth-session-rpc'
import type { GetFutureSaltsResponse }       from '@chats-system/auth-session-rpc'
import type { GetLangCodeRequest }           from '@chats-system/auth-session-rpc'
import type { GetLangCodeResponse }          from '@chats-system/auth-session-rpc'
import type { GetLangPackRequest }           from '@chats-system/auth-session-rpc'
import type { GetLangPackResponse }          from '@chats-system/auth-session-rpc'
import type { GetLayerRequest }              from '@chats-system/auth-session-rpc'
import type { GetPermAuthKeyIdRequest }      from '@chats-system/auth-session-rpc'
import type { GetPermAuthKeyIdResponse }     from '@chats-system/auth-session-rpc'
import type { GetUserIdRequest }             from '@chats-system/auth-session-rpc'
import type { GetUserIdResponse }            from '@chats-system/auth-session-rpc'
import type { QueryAuthKeyRequest }          from '@chats-system/auth-session-rpc'
import type { ResetAuthorizationRequest }    from '@chats-system/auth-session-rpc'
import type { ResetAuthorizationResponse }   from '@chats-system/auth-session-rpc'
import type { SetAuthKeyRequest }            from '@chats-system/auth-session-rpc'
import type { SetClientSessionInfoRequest }  from '@chats-system/auth-session-rpc'
import type { SetClientSessionInfoResponse } from '@chats-system/auth-session-rpc'
import type { SetInitConnectionRequest }     from '@chats-system/auth-session-rpc'
import type { SetInitConnectionResponse }    from '@chats-system/auth-session-rpc'
import type { SetLayerRequest }              from '@chats-system/auth-session-rpc'
import type { SetLayerResponse }             from '@chats-system/auth-session-rpc'
import type { UnbindAuthKeyUserRequest }     from '@chats-system/auth-session-rpc'
import type { UnbindAuthKeyUserResponse }    from '@chats-system/auth-session-rpc'
import type { ServiceImpl }                  from '@connectrpc/connect'

import { ConnectRpcMethod }                  from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                 from '@monstrs/nestjs-connectrpc'
import { Controller }                        from '@nestjs/common'

import { QueryAuthKeyResponse }              from '@chats-system/auth-session-rpc'
import { SetAuthKeyResponse }                from '@chats-system/auth-session-rpc'
import { AuthSessionService }                from '@chats-system/auth-session-rpc'

import { AuthKeyService }                    from '../services/index.js'

@Controller()
@ConnectRpcService(AuthSessionService)
export class AuthSessionServiceController implements ServiceImpl<typeof AuthSessionService> {
  constructor(private readonly authKeyService: AuthKeyService) {}

  @ConnectRpcMethod()
  async getAuthorization(request: GetAuthorizationRequest): Promise<GetAuthorizationResponse> {
    // eslint-disable-next-line
    console.log(request, 'getAuthorization')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getAuthorizations(request: GetAuthorizationsRequest): Promise<GetAuthorizationsResponse> {
    // eslint-disable-next-line
    console.log(request, 'getAuthorizations')

    return undefined as any
  }

  @ConnectRpcMethod()
  async resetAuthorization(
    request: ResetAuthorizationRequest
  ): Promise<ResetAuthorizationResponse> {
    // eslint-disable-next-line
    console.log(request, 'resetAuthorization')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getLayer(request: GetLayerRequest): Promise<GeLayerResponse> {
    // eslint-disable-next-line
    console.log(request, 'getLayer')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getLangPack(request: GetLangPackRequest): Promise<GetLangPackResponse> {
    // eslint-disable-next-line
    console.log(request, 'getLangPack')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getLangCode(request: GetLangCodeRequest): Promise<GetLangCodeResponse> {
    // eslint-disable-next-line
    console.log(request, 'getLangCode')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getClient(request: GetClientRequest): Promise<GetClientResponse> {
    // eslint-disable-next-line
    console.log(request, 'getClient')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getUserId(request: GetUserIdRequest): Promise<GetUserIdResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

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
  async getFutureSalts(request: GetFutureSaltsRequest): Promise<GetFutureSaltsResponse> {
    // eslint-disable-next-line
    console.log(request, 'getFutureSalts')

    return undefined as any
  }

  @ConnectRpcMethod()
  async queryAuthKey(request: QueryAuthKeyRequest): Promise<QueryAuthKeyResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    return new QueryAuthKeyResponse({
      authKey,
    })
  }

  @ConnectRpcMethod()
  async setAuthKey(request: SetAuthKeyRequest): Promise<SetAuthKeyResponse> {
    await this.authKeyService.setAuthKey(request.authKey!)

    return new SetAuthKeyResponse({ success: true })
  }

  @ConnectRpcMethod()
  async bindAuthKeyUser(request: BindAuthKeyUserRequest): Promise<BindAuthKeyUserResponse> {
    // eslint-disable-next-line
    console.log(request, 'bindAuthKeyUser')

    return undefined as any
  }

  @ConnectRpcMethod()
  async unbindAuthKeyUser(request: UnbindAuthKeyUserRequest): Promise<UnbindAuthKeyUserResponse> {
    // eslint-disable-next-line
    console.log(request, 'unbindAuthKeyUser')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getPermAuthKeyId(request: GetPermAuthKeyIdRequest): Promise<GetPermAuthKeyIdResponse> {
    // eslint-disable-next-line
    console.log(request, 'getPermAuthKeyId')

    return undefined as any
  }

  @ConnectRpcMethod()
  async bindTempAuthKey(request: BindTempAuthKeyRequest): Promise<BindTempAuthKeyResponse> {
    // eslint-disable-next-line
    console.log(request, 'bindTempAuthKey')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setClientSessionInfo(
    request: SetClientSessionInfoRequest
  ): Promise<SetClientSessionInfoResponse> {
    // eslint-disable-next-line
    console.log(request, 'setClientSessionInfo')

    return undefined as any
  }

  @ConnectRpcMethod()
  async getAuthStateData(request: GetAuthStateDataRequest): Promise<GetAuthStateDataResponse> {
    // eslint-disable-next-line
    console.log(request, 'getAuthStateData')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setLayer(request: SetLayerRequest): Promise<SetLayerResponse> {
    // eslint-disable-next-line
    console.log(request, 'setLayer')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setInitConnection(request: SetInitConnectionRequest): Promise<SetInitConnectionResponse> {
    // eslint-disable-next-line
    console.log(request, 'setInitConnection')

    return undefined as any
  }
}
