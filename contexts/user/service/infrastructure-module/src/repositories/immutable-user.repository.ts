import { EntityRepository, EntityManager }                         from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { Injectable , Inject}                               from '@nestjs/common'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'

import { UserData }                                 from '@chats-system/user-rpc'

import random                                   from 'crypto-random-bigint'

import { EmojiStatus, RestrictionReason, ImmutableUser, PrivacyKeyType, UserType }                    from '@chats-system/user-rpc'

import { UserEntity }                               from '../entities/index.js'

import { UserPrivacyRepository} from './user-privacy.repository.js'
import { UserPresenceRepository } from './user-presence.repository.js'
import { UserContactRepository } from './user-contact.repository.js'

@Injectable()
export class ImmutableUserRepository {
  constructor(
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
    private readonly userPrivacyRepository: UserPrivacyRepository,
    private readonly userPresenceRepository: UserPresenceRepository,
    private readonly userContactRepository: UserContactRepository
  ) {}

  async getById(id: bigint, privacy: boolean = false, contacts: Array<bigint> = []): Promise<ImmutableUser | undefined> {
    const userEntity = await this.userRepository.findOne(id)

    if (!userEntity) {
      return undefined
    }

    const userData = new UserData({
      id: userEntity.id,
      accessHash: userEntity.accessHash,
      deleted: userEntity.deleted,
      userType: userEntity.userType,
      sceretKeyId: userEntity.secretKeyId,
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      username: userEntity.username,
      phone: userEntity.phone,
      profilePhoto: undefined,
      bot: undefined,
      countryCode: userEntity.countryCode,
      verified: userEntity.verified,
      support: userEntity.support,
      scam: userEntity.scam,
      fake: userEntity.fake,
      about: userEntity.about,
      restricted: userEntity.restricted,
      restrictionReason: userEntity.restrictionReason.map(restrictionReason => new RestrictionReason(restrictionReason)),
      contactsVersion: 1,
      privaciesVersion: 1,
      botAttachMenu: false,
      premium: userEntity.premium,
      emojiStatus: this.makeEmojiStatus(
        userEntity.emojiStatusDocumentId,
        userEntity.emojiStatusUntil
      ),
    })

    const immutableUser = new ImmutableUser({
      user: userData,
    })

    if (userEntity.photoId) {
      // TODO
    }

    if (userEntity.userType === UserType.BOT) {
      // TODO
    }

    if (userEntity.userType === UserType.UNKNOWN || userEntity.userType === UserType.DELETED) {
      return immutableUser
    }

    immutableUser.lastSeenAt = await this.userPresenceRepository.getLastSeenAt(userEntity.id)

    if (contacts.length > 0) {
      const userContactsIds = await this.userContactRepository.getUserContactsIds(userEntity.id)

      if (userContactsIds.length > 0) {
        const existsContactsIds = contacts.filter(contactId => contactId !== userEntity.id && userContactsIds.includes(contactId))

        if (existsContactsIds.length > 0) {
          immutableUser.contacts = await this.userContactRepository.getUserContactsByContactsIds(userEntity.id, existsContactsIds)
        }
      }
    }

    if (privacy) {
      immutableUser.keysPrivacyRules = await this.userPrivacyRepository.getByUserIdAndKeyTypes(
        userEntity.id,
        [PrivacyKeyType.STATUS_TIMESTAMP, PrivacyKeyType.PROFILE_PHOTO, PrivacyKeyType.PHONE_NUMBER]
      )
    }

    return immutableUser
  }

  async getByPhone(phone: string): Promise<ImmutableUser | undefined> {
    const userEntity = await this.userRepository.findOne({
      phone,
    })

    if (userEntity) {
      return this.getById(userEntity.id)
    }

    return undefined
  }

  async create(phone: string, secretKeyId:    bigint, firstName:      string, lastName: string, countryCode:    string): Promise<ImmutableUser> {
    const userEntity = new UserEntity()

    userEntity.phone = phone
    userEntity.secretKeyId = secretKeyId
    userEntity.firstName = firstName
    userEntity.lastName = lastName
    userEntity.countryCode = countryCode
    userEntity.accountDaysTtl = 180
    userEntity.userType =      UserType.REGULAR
    userEntity.accessHash = random(63)

    await this.em.persist(userEntity).flush()

    const userData = new UserData({
      id: userEntity.id,
      accessHash: userEntity.accessHash,
      deleted: userEntity.deleted,
      userType: userEntity.userType,
      sceretKeyId: userEntity.secretKeyId,
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      username: userEntity.username,
      phone: userEntity.phone,
      profilePhoto: undefined,
      bot: undefined,
      countryCode: userEntity.countryCode,
      verified: userEntity.verified,
      support: userEntity.support,
      scam: userEntity.scam,
      fake: userEntity.fake,
      about: userEntity.about,
      restricted: userEntity.restricted,
      restrictionReason: userEntity.restrictionReason.map(restrictionReason => new RestrictionReason(restrictionReason)),
      contactsVersion: 1,
      privaciesVersion: 1,
      botAttachMenu: false,
      premium: userEntity.premium,
      emojiStatus: this.makeEmojiStatus(
        userEntity.emojiStatusDocumentId,
        userEntity.emojiStatusUntil
      ),
    })

    return new ImmutableUser({
      user: userData,
    })
  }

  protected makeEmojiStatus(documentId: bigint, until: number): EmojiStatus | undefined {
    if (!documentId || documentId === 0n) {
      return undefined
    }

    if (until > 0) {
      return new EmojiStatus({ documentId })
    }

    return new EmojiStatus({ documentId, until })
  }
}
