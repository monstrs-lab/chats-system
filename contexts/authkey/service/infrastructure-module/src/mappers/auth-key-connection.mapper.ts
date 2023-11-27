/* eslint-disable no-param-reassign */

import type { AuthKeyConnectionEntity } from '../entities/index.js'

import { Injectable }                   from '@nestjs/common'

import { AuthKeyConnection }            from '@chats-system/authkey-domain-module'

@Injectable()
export class AuthKeyConnectionMapper {
  fromPersistence(entity: AuthKeyConnectionEntity): AuthKeyConnection {
    return new AuthKeyConnection(
      entity.authKeyId,
      entity.layer,
      entity.apiId,
      entity.deviceModel,
      entity.systemVersion,
      entity.appVersion,
      entity.systemLangCode,
      entity.langPack,
      entity.langCode,
      entity.clientIp,
      entity.dateActive,
      entity.deleted,
      entity.params
    )
  }

  toPersistence(
    authKeyConnection: AuthKeyConnection,
    entity: AuthKeyConnectionEntity
  ): AuthKeyConnectionEntity {
    entity.authKeyId = authKeyConnection.authKeyId
    entity.layer = authKeyConnection.layer
    entity.apiId = authKeyConnection.apiId
    entity.deviceModel = authKeyConnection.deviceModel
    entity.systemVersion = authKeyConnection.systemVersion
    entity.appVersion = authKeyConnection.appVersion
    entity.systemLangCode = authKeyConnection.systemLangCode
    entity.langPack = authKeyConnection.langPack
    entity.langCode = authKeyConnection.langCode
    entity.clientIp = authKeyConnection.clientIp
    entity.dateActive = authKeyConnection.dateActive
    entity.deleted = authKeyConnection.deleted
    entity.params = authKeyConnection.params || {}

    return entity
  }
}
