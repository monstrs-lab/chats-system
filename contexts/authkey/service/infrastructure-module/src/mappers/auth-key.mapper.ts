/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@monstrs/base-types'

import type { AuthKeyEntity }     from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { AuthKey }                from '@chats-system/authkey-domain-module'

@Injectable()
export class AuthKeyMapper {
  fromPersistence(entity: AuthKeyEntity): AuthKey {
    const properties: Omit<ExtractProperties<AuthKey>, 'autoCommit'> = {
      id: entity.id,
      key: Buffer.from(entity.key, 'base64'),
      createdAt: entity.createdAt,
    }

    return Object.assign(new AuthKey(), properties)
  }

  toPersistence(authKey: AuthKey, entity: AuthKeyEntity): AuthKeyEntity {
    entity.id = authKey.id
    entity.key = authKey.key.toString('base64')
    entity.createdAt = authKey.createdAt

    return entity
  }
}
