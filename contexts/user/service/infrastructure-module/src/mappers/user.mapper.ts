/* eslint-disable no-param-reassign */

import type { UserEntity } from '../entities/index.js'

import { Injectable }      from '@nestjs/common'

import { User }            from '@chats-system/user-domain-module'

@Injectable()
export class UserMapper {
  fromPersistence(entity: UserEntity): User {
    return new User(
      entity.id,
      entity.accessHash,
      entity.secretKeyId,
      entity.firstName,
      entity.lastName,
      entity.phone,
      entity.username
    )
  }

  toPersistence(user: User, entity: UserEntity): UserEntity {
    entity.id = user.id
    entity.accessHash = user.accessHash
    entity.secretKeyId = user.secretKeyId
    entity.firstName = user.firstName
    entity.lastName = user.lastName
    entity.phone = user.phone
    entity.username = user.username

    return entity
  }
}
