import { EntityRepository, QueryOrder }                         from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { Injectable }                               from '@nestjs/common'

import { ContactData } from '@chats-system/user-rpc'

import { UserContactEntity }                               from '../entities/index.js'

@Injectable()
export class UserContactRepository {
  constructor(
    @InjectRepository(UserContactEntity)
    private readonly userContactRepository: EntityRepository<UserContactEntity>,
  ) {}

  async getUserContactsIds(ownerUserId: bigint): Promise<Array<bigint>> {
    const userContactEntities = await this.userContactRepository.find({
        isDeleted: false,
        ownerUserId,
    }, {
        orderBy: { contactUserId: QueryOrder.ASC },
    })

    return userContactEntities.map(userContactEntity => userContactEntity.contactUserId)
  }

  async getUserContactsByContactsIds(ownerUserId: bigint, contacts: Array<bigint>) {
    const userContactEntities = await this.userContactRepository.find({
        isDeleted: false,
        ownerUserId,
        contactUserId: {
            $in: contacts
        }
    })

    return userContactEntities.map(userContactEntity => new ContactData({
        userId:        ownerUserId,
        contactUserId: userContactEntity.contactUserId,
        firstName:     userContactEntity.contactFirstName,
        lastName:      userContactEntity.contactLastName,
        phone:        userContactEntity.contactPhone,
        mutualContact: userContactEntity.mutual,
    }))
  }

}
