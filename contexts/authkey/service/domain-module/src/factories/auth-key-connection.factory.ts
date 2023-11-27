import type { CreateAuthKeyConnectionDto } from '../dtos/index.js'
import type { UpdateAuthKeyConnectionDto } from '../dtos/index.js'

import { Injectable }                      from '@nestjs/common'

import { AuthKeyConnection }               from '../entities/index.js'

@Injectable()
export class AuthKeyConnectionFactory {
  createAuthKeyConnection(
    createAuthKeyConnectionDto: CreateAuthKeyConnectionDto
  ): AuthKeyConnection {
    return new AuthKeyConnection(
      createAuthKeyConnectionDto.authKeyId,
      createAuthKeyConnectionDto.layer,
      createAuthKeyConnectionDto.apiId,
      createAuthKeyConnectionDto.deviceModel,
      createAuthKeyConnectionDto.systemVersion,
      createAuthKeyConnectionDto.appVersion,
      createAuthKeyConnectionDto.systemLangCode,
      createAuthKeyConnectionDto.langPack,
      createAuthKeyConnectionDto.langCode,
      createAuthKeyConnectionDto.clientIp,
      new Date(),
      false,
      createAuthKeyConnectionDto.params
    )
  }

  updateAuthKeyConnection(
    authKeyConnection: AuthKeyConnection,
    updateAuthKeyConnectionDto: UpdateAuthKeyConnectionDto
  ): AuthKeyConnection {
    return new AuthKeyConnection(
      authKeyConnection.authKeyId,
      updateAuthKeyConnectionDto.layer || authKeyConnection.layer,
      updateAuthKeyConnectionDto.apiId || authKeyConnection.apiId,
      updateAuthKeyConnectionDto.deviceModel || authKeyConnection.deviceModel,
      updateAuthKeyConnectionDto.systemVersion || authKeyConnection.systemVersion,
      updateAuthKeyConnectionDto.appVersion || authKeyConnection.appVersion,
      updateAuthKeyConnectionDto.systemLangCode || authKeyConnection.systemLangCode,
      updateAuthKeyConnectionDto.langPack || authKeyConnection.langPack,
      updateAuthKeyConnectionDto.langCode || authKeyConnection.langCode,
      updateAuthKeyConnectionDto.clientIp || authKeyConnection.clientIp,
      authKeyConnection.dateActive,
      authKeyConnection.deleted,
      updateAuthKeyConnectionDto.params || authKeyConnection.params
    )
  }
}
