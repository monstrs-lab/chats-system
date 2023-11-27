/* eslint-disable no-param-reassign */

import type { AuthKeyUserEntity } from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { AuthKeyUser }            from '@chats-system/authkey-domain-module'

@Injectable()
export class AuthKeyUserMapper {
  fromPersistence(entity: AuthKeyUserEntity): AuthKeyUser {
    return new AuthKeyUser(
      entity.id,
      entity.authKeyId,
      entity.userId,
      entity.hash,
      entity.deleted,
      entity.dateCreated,
      entity.dateActive
    )
  }

  toPersistence(authKeyUser: AuthKeyUser, entity: AuthKeyUserEntity): AuthKeyUserEntity {
    entity.id = authKeyUser.id
    entity.authKeyId = authKeyUser.authKeyId
    entity.userId = authKeyUser.userId
    entity.hash = authKeyUser.hash
    entity.deleted = authKeyUser.deleted
    entity.dateCreated = authKeyUser.dateCreated
    entity.dateActive = authKeyUser.dateActive

    return entity
  }
}
