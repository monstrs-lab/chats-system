/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@monstrs/base-types'

import type { AuthKeyUserEntity } from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { AuthKeyUser }            from '@chats-system/authkey-domain-module'

@Injectable()
export class AuthKeyUserMapper {
  fromPersistence(entity: AuthKeyUserEntity): AuthKeyUser {
    const properties: Omit<ExtractProperties<AuthKeyUser>, 'autoCommit'> = {
      id: entity.id,
      authKeyId: entity.authKeyId,
      userId: entity.userId,
      createdAt: entity.createdAt,
    }

    return Object.assign(new AuthKeyUser(), properties)
  }

  toPersistence(authKeyUser: AuthKeyUser, entity: AuthKeyUserEntity): AuthKeyUserEntity {
    entity.id = authKeyUser.id
    entity.authKeyId = authKeyUser.authKeyId
    entity.userId = authKeyUser.userId
    entity.createdAt = authKeyUser.createdAt

    return entity
  }
}
