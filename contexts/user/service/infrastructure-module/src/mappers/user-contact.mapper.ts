/* eslint-disable no-param-reassign */

import type { UserContactEntity } from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { UserContact }            from '@chats-system/user-domain-module'

@Injectable()
export class UserContactMapper {
  fromPersistence(entity: UserContactEntity): UserContact {
    return new UserContact(
      entity.id,
      entity.ownerUserId,
      entity.contactUserId,
      entity.contactPhone,
      entity.contactFirstName,
      entity.contactLastName,
      entity.mutual,
      entity.isDeleted
    )
  }

  toPersistence(userContact: UserContact, entity: UserContactEntity): UserContactEntity {
    entity.id = userContact.id
    entity.ownerUserId = userContact.ownerUserId
    entity.contactUserId = userContact.contactUserId
    entity.contactPhone = userContact.contactPhone
    entity.contactFirstName = userContact.contactFirstName
    entity.contactLastName = userContact.contactLastName
    entity.mutual = userContact.mutual
    entity.isDeleted = userContact.isDeleted

    return entity
  }
}
