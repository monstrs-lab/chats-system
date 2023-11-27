/* eslint-disable no-param-reassign */

import type { AuthKeyEntity } from '../entities/index.js'

import { Injectable }         from '@nestjs/common'

import { AuthKey }            from '@chats-system/authkey-domain-module'

@Injectable()
export class AuthKeyMapper {
  fromPersistence(entity: AuthKeyEntity): AuthKey {
    return new AuthKey(
      entity.authKeyId,
      entity.authKeyType,
      Buffer.from(entity.authKey, 'base64'),
      entity.permAuthKeyId,
      entity.tempAuthKeyId,
      entity.mediaTempAuthKeyId,
      entity.deleted
    )
  }

  toPersistence(authKey: AuthKey, entity: AuthKeyEntity): AuthKeyEntity {
    entity.authKeyId = authKey.authKeyId
    entity.authKeyType = authKey.authKeyType
    entity.authKey = authKey.authKey.toString('base64')
    entity.permAuthKeyId = authKey.permAuthKeyId
    entity.tempAuthKeyId = authKey.tempAuthKeyId
    entity.mediaTempAuthKeyId = authKey.mediaTempAuthKeyId
    entity.deleted = authKey.deleted

    return entity
  }
}
