/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { CreateAuthKeyRequest }           from '@chats-system/authkey-rpc'
import type { GetAuthKeyUserRequest }          from '@chats-system/authkey-rpc'
import type { CreateAuthKeyConnectionRequest } from '@chats-system/authkey-rpc'
import type { UpdateAuthKeyConnectionRequest } from '@chats-system/authkey-rpc'
import type { CreateAuthKeyUserRequest }       from '@chats-system/authkey-rpc'
import type { GetAuthKeyRequest }              from '@chats-system/authkey-rpc'
import type { GetAuthKeyConnectionRequest }    from '@chats-system/authkey-rpc'
import type { ServiceImpl }                    from '@connectrpc/connect'

import { CreateRequestContext }                from '@mikro-orm/core'
import { MikroORM }                            from '@mikro-orm/core'
import { ConnectRpcMethod }                    from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                   from '@monstrs/nestjs-connectrpc'
import { Controller }                          from '@nestjs/common'

import { AuthKeyUseCases }                     from '@chats-system/authkey-application-module'
import { GetAuthKeyResponse }                  from '@chats-system/authkey-rpc'
import { GetAuthKeyUserResponse }              from '@chats-system/authkey-rpc'
import { GetAuthKeyConnectionResponse }        from '@chats-system/authkey-rpc'
import { CreateAuthKeyResponse }               from '@chats-system/authkey-rpc'
import { CreateAuthKeyConnectionResponse }     from '@chats-system/authkey-rpc'
import { UpdateAuthKeyConnectionResponse }     from '@chats-system/authkey-rpc'
import { CreateAuthKeyUserResponse }           from '@chats-system/authkey-rpc'
import { AuthKeyService }                      from '@chats-system/authkey-rpc'

@Controller()
@ConnectRpcService(AuthKeyService)
export class AuthKeyServiceController implements ServiceImpl<typeof AuthKeyService> {
  constructor(
    private readonly authKeyUseCases: AuthKeyUseCases,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createAuthKey(request: CreateAuthKeyRequest): Promise<CreateAuthKeyResponse> {
    const authKey = await this.authKeyUseCases.createAuthKey.execute({
      authKeyId: request.authKeyId,
      authKeyType: request.authKeyType,
      authKey: Buffer.from(request.authKey),
    })

    return new CreateAuthKeyResponse({
      authKey,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createAuthKeyConnection(
    request: CreateAuthKeyConnectionRequest
  ): Promise<CreateAuthKeyConnectionResponse> {
    const authKeyConnection = await this.authKeyUseCases.createAuthKeyConnection.execute({
      authKeyId: request.authKeyId,
      layer: request.layer,
      apiId: request.apiId,
      deviceModel: request.deviceModel,
      systemVersion: request.systemVersion,
      appVersion: request.appVersion,
      systemLangCode: request.systemLangCode,
      langPack: request.langPack,
      langCode: request.langCode,
      clientIp: request.clientIp,
      params: JSON.parse(request.params || '{}'),
    })

    return new CreateAuthKeyConnectionResponse({
      authKeyConnection: {
        authKeyId: authKeyConnection.authKeyId,
        layer: authKeyConnection.layer,
        apiId: authKeyConnection.apiId,
        deviceModel: authKeyConnection.deviceModel,
        systemVersion: authKeyConnection.systemVersion,
        appVersion: authKeyConnection.appVersion,
        systemLangCode: authKeyConnection.systemLangCode,
        langPack: authKeyConnection.langPack,
        langCode: authKeyConnection.langCode,
        clientIp: authKeyConnection.clientIp,
        params: JSON.stringify(authKeyConnection.params || {}),
      },
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async updateAuthKeyConnection(
    request: UpdateAuthKeyConnectionRequest
  ): Promise<UpdateAuthKeyConnectionResponse> {
    const authKeyConnection = await this.authKeyUseCases.updateAuthKeyConnection.execute(
      request.authKeyId,
      {
        layer: request.layer,
        apiId: request.apiId,
        deviceModel: request.deviceModel,
        systemVersion: request.systemVersion,
        appVersion: request.appVersion,
        systemLangCode: request.systemLangCode,
        langPack: request.langPack,
        langCode: request.langCode,
        clientIp: request.clientIp,
        params: JSON.parse(request.params || '{}'),
      }
    )

    if (!authKeyConnection) {
      return new UpdateAuthKeyConnectionResponse({})
    }

    return new UpdateAuthKeyConnectionResponse({
      authKeyConnection: {
        authKeyId: authKeyConnection.authKeyId,
        layer: authKeyConnection.layer,
        apiId: authKeyConnection.apiId,
        deviceModel: authKeyConnection.deviceModel,
        systemVersion: authKeyConnection.systemVersion,
        appVersion: authKeyConnection.appVersion,
        systemLangCode: authKeyConnection.systemLangCode,
        langPack: authKeyConnection.langPack,
        langCode: authKeyConnection.langCode,
        clientIp: authKeyConnection.clientIp,
        params: JSON.stringify(authKeyConnection.params || {}),
      },
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createAuthKeyUser(request: CreateAuthKeyUserRequest): Promise<CreateAuthKeyUserResponse> {
    const authKeyUser = await this.authKeyUseCases.createAuthKeyUser.execute(request)

    return new CreateAuthKeyUserResponse({
      hash: authKeyUser.hash,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getAuthKey(request: GetAuthKeyRequest): Promise<GetAuthKeyResponse> {
    const authKey = await this.authKeyUseCases.getAuthKeyById.execute(request.authKeyId)

    return new GetAuthKeyResponse({
      authKey,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getAuthKeyConnection(
    request: GetAuthKeyConnectionRequest
  ): Promise<GetAuthKeyConnectionResponse> {
    const authKeyConnection = await this.authKeyUseCases.getAuthKeyConnectionKeyById.execute(
      request.authKeyId
    )

    if (!authKeyConnection) {
      return new GetAuthKeyConnectionResponse({})
    }

    return new GetAuthKeyConnectionResponse({
      authKeyConnection: {
        authKeyId: authKeyConnection.authKeyId,
        layer: authKeyConnection.layer,
        apiId: authKeyConnection.apiId,
        deviceModel: authKeyConnection.deviceModel,
        systemVersion: authKeyConnection.systemVersion,
        appVersion: authKeyConnection.appVersion,
        systemLangCode: authKeyConnection.systemLangCode,
        langPack: authKeyConnection.langPack,
        langCode: authKeyConnection.langCode,
        clientIp: authKeyConnection.clientIp,
        params: JSON.stringify(authKeyConnection.params || {}),
      },
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getAuthKeyUser(request: GetAuthKeyUserRequest): Promise<GetAuthKeyUserResponse> {
    const authKeyUser = await this.authKeyUseCases.getAuthKeyUserKeyById.execute(request.authKeyId)

    return new GetAuthKeyUserResponse({
      authKeyUser,
    })
  }
}
