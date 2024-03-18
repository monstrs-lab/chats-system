/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@monstrs/base-types'

import type { UserEntity }        from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { User }                   from '@chats-system/users-domain-module'

@Injectable()
export class UserMapper {
  fromPersistence(entity: UserEntity): User {
    const properties: Omit<ExtractProperties<User>, 'autoCommit'> = {
      id: entity.id,
      externalId: entity.externalId,
      firstName: entity.firstName,
      lastName: entity.lastName,
      createdAt: entity.createdAt,
    }

    return Object.assign(new User(), properties)
  }

  toPersistence(user: User, entity: UserEntity): UserEntity {
    entity.id = user.id
    entity.externalId = user.externalId
    entity.firstName = user.firstName
    entity.lastName = user.lastName
    entity.createdAt = user.createdAt

    return entity
  }
}
