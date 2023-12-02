import type { User }                                from '@chats-system/user-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { UserRepository }                           from '@chats-system/user-domain-module'

import { UserEntity }                               from '../entities/index.js'
import { UserMapper }                               from '../mappers/index.js'

@Injectable()
export class UserRepositoryImpl extends UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: EntityRepository<UserEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: UserMapper
  ) {
    super()
  }

  override async save(user: User): Promise<User> {
    const exists = (await this.repository.findOne({ id: user.id })) || new UserEntity()

    await this.em.persist(this.mapper.toPersistence(user, exists)).flush()

    return user
  }

  override async getById(id: bigint): Promise<User | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  override async getByIds(userIds: Array<bigint>): Promise<Array<User>> {
    const entities = await this.repository.find({
      id: {
        $in: userIds,
      },
    })

    const entitiesById: Map<bigint, UserEntity> = entities.reduce((result, entity) => {
      result.set(entity.id, entity)

      return result
    }, new Map())

    return userIds.map((userId) => this.mapper.fromPersistence(entitiesById.get(userId)!))
  }

  override async getByPhone(phone: string): Promise<User | undefined> {
    const entity = await this.repository.findOne({
      phone,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  override async getByPhoneList(phones: Array<string>): Promise<Array<User>> {
    const entities = await this.repository.find({ phone: { $in: phones } })

    return entities.map((entity) => this.mapper.fromPersistence(entity))
  }
}
