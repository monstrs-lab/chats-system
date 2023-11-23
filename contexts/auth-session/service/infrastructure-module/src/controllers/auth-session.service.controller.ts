/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { GetAuthorizationsResponse }   from '@chats-system/auth-session-rpc'
import type { BindAuthKeyUserRequest }      from '@chats-system/auth-session-rpc'
import type { BindAuthKeyUserResponse }     from '@chats-system/auth-session-rpc'
import type { BindTempAuthKeyRequest }      from '@chats-system/auth-session-rpc'
import type { BindTempAuthKeyResponse }     from '@chats-system/auth-session-rpc'
import type { GetAuthStateDataRequest }     from '@chats-system/auth-session-rpc'
import type { GetAuthStateDataResponse }    from '@chats-system/auth-session-rpc'
import type { GetAuthorizationRequest }     from '@chats-system/auth-session-rpc'
import type { GetAuthorizationResponse }    from '@chats-system/auth-session-rpc'
import type { GetAuthorizationsRequest }    from '@chats-system/auth-session-rpc'
import type { GetClientRequest }            from '@chats-system/auth-session-rpc'
import type { GetFutureSaltsRequest }       from '@chats-system/auth-session-rpc'
import type { GetFutureSaltsResponse }      from '@chats-system/auth-session-rpc'
import type { GetLangCodeRequest }          from '@chats-system/auth-session-rpc'
import type { GetLangPackRequest }          from '@chats-system/auth-session-rpc'
import type { GetLayerRequest }             from '@chats-system/auth-session-rpc'
import type { GetPermAuthKeyIdRequest }     from '@chats-system/auth-session-rpc'
import type { GetPermAuthKeyIdResponse }    from '@chats-system/auth-session-rpc'
import type { GetUserIdRequest }            from '@chats-system/auth-session-rpc'
import type { QueryAuthKeyRequest }         from '@chats-system/auth-session-rpc'
import type { ResetAuthorizationRequest }   from '@chats-system/auth-session-rpc'
import type { ResetAuthorizationResponse }  from '@chats-system/auth-session-rpc'
import type { SetAuthKeyRequest }           from '@chats-system/auth-session-rpc'
import type { SetClientSessionInfoRequest } from '@chats-system/auth-session-rpc'
import type { SetInitConnectionRequest }    from '@chats-system/auth-session-rpc'
import type { SetLayerRequest }             from '@chats-system/auth-session-rpc'
import type { UnbindAuthKeyUserRequest }    from '@chats-system/auth-session-rpc'
import type { UnbindAuthKeyUserResponse }   from '@chats-system/auth-session-rpc'
import type { ServiceImpl }                 from '@connectrpc/connect'

import { ConnectRpcMethod }                 from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                from '@monstrs/nestjs-connectrpc'
import { Controller }                       from '@nestjs/common'

import { GeLayerResponse }                  from '@chats-system/auth-session-rpc'
import { GetClientResponse }                from '@chats-system/auth-session-rpc'
import { GetLangCodeResponse }              from '@chats-system/auth-session-rpc'
import { GetLangPackResponse }              from '@chats-system/auth-session-rpc'
import { GetUserIdResponse }                from '@chats-system/auth-session-rpc'
import { SetClientSessionInfoResponse }     from '@chats-system/auth-session-rpc'
import { SetInitConnectionResponse }        from '@chats-system/auth-session-rpc'
import { SetLayerResponse }                 from '@chats-system/auth-session-rpc'
import { QueryAuthKeyResponse }             from '@chats-system/auth-session-rpc'
import { SetAuthKeyResponse }               from '@chats-system/auth-session-rpc'
import { AuthSessionService }               from '@chats-system/auth-session-rpc'
import { Exceptions }                       from '@chats-system/tl'

import { AuthKeyService }                   from '../services/index.js'
import { AuthsService }                     from '../services/index.js'

@Controller()
@ConnectRpcService(AuthSessionService)
export class AuthSessionServiceController implements ServiceImpl<typeof AuthSessionService> {
  constructor(
    private readonly authKeyService: AuthKeyService,
    private readonly authsService: AuthsService
  ) {}

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
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    return new GeLayerResponse({
      layer: await this.authsService.getApiLayer(request.authKeyId),
    })
  }

  @ConnectRpcMethod()
  async getLangPack(request: GetLangPackRequest): Promise<GetLangPackResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    return new GetLangPackResponse({
      langPack: await this.authsService.getLangPack(request.authKeyId),
    })
  }

  @ConnectRpcMethod()
  async getLangCode(request: GetLangCodeRequest): Promise<GetLangCodeResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    return new GetLangCodeResponse({
      langCode: await this.authsService.getLangCode(request.authKeyId),
    })
  }

  @ConnectRpcMethod()
  async getClient(request: GetClientRequest): Promise<GetClientResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    return new GetClientResponse({
      client: await this.authsService.getClient(request.authKeyId),
    })
  }

  @ConnectRpcMethod()
  async getUserId(request: GetUserIdRequest): Promise<GetUserIdResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    return new GetUserIdResponse({
      userId: await this.authsService.getAuthKeyUserId(request.authKeyId),
    })
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
    if (!request.data) {
      throw new Exceptions.BadRequest.BadRequest()
    }
    const authKey = await this.authKeyService.getAuthKey(request.data.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    await this.authsService.setClientSessionInfo(
      authKey.authKeyId,
      request.data.layer,
      request.data.apiId,
      request.data.deviceModel,
      request.data.systemVersion,
      request.data.appVersion,
      request.data.systemLangCode,
      request.data.langPack,
      request.data.langCode,
      request.data.ip,
      request.data.proxy,
      request.data.params
    )

    return new SetClientSessionInfoResponse({ success: true })
  }

  @ConnectRpcMethod()
  async getAuthStateData(request: GetAuthStateDataRequest): Promise<GetAuthStateDataResponse> {
    // eslint-disable-next-line
    console.log(request, 'Method getAuthStateData not implemented')

    return undefined as any
  }

  @ConnectRpcMethod()
  async setLayer(request: SetLayerRequest): Promise<SetLayerResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    await this.authsService.setLayer(request.authKeyId, request.layer, request.ip)

    return new SetLayerResponse({
      success: true,
    })
  }

  @ConnectRpcMethod()
  async setInitConnection(request: SetInitConnectionRequest): Promise<SetInitConnectionResponse> {
    const authKey = await this.authKeyService.getAuthKey(request.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new Exceptions.Unauthorized.AuthKeyPermEmpty()
    }

    await this.authsService.setInitConnection(
      request.authKeyId,
      request.apiId,
      request.deviceModel,
      request.systemVersion,
      request.appVersion,
      request.systemLangCode,
      request.langPack,
      request.langCode,
      request.ip
    )

    return new SetInitConnectionResponse({
      success: true,
    })
  }
}
