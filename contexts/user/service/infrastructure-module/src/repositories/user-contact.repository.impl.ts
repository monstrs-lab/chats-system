import type { UserContact }                         from '@chats-system/user-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { UserContactRepository }                    from '@chats-system/user-domain-module'

import { UserContactEntity }                        from '../entities/index.js'
import { UserContactMapper }                        from '../mappers/index.js'

@Injectable()
export class UserContactRepositoryImpl extends UserContactRepository {
  constructor(
    @InjectRepository(UserContactEntity)
    private readonly repository: EntityRepository<UserContactEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: UserContactMapper
  ) {
    super()
  }

  async save(userContact: UserContact): Promise<UserContact> {
    const exists =
      (await this.repository.findOne({ id: userContact.id })) || new UserContactEntity()

    await this.em.persist(this.mapper.toPersistence(userContact, exists)).flush()

    return userContact
  }

  async getById(id: bigint): Promise<UserContact | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  override async getByUserId(userId: bigint): Promise<Array<UserContact>> {
    const entities = await this.repository.find({
      ownerUserId: userId,
    })

    return entities.map((entity) => this.mapper.fromPersistence(entity))
  }

  override async getByUserIdList(userId: bigint, ids: Array<bigint>): Promise<Array<UserContact>> {
    const entities = await this.repository.find({
      ownerUserId: userId,
      contactUserId: {
        $in: ids,
      },
    })

    return entities.map((entity) => this.mapper.fromPersistence(entity))
  }

  override async getMyContactById(
    userId: bigint,
    contactId: bigint
  ): Promise<UserContact | undefined> {
    const entity = await this.repository.findOne({
      ownerUserId: userId,
      contactUserId: contactId,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }
}
