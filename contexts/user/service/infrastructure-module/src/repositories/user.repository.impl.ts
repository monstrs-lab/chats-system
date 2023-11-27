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

  async save(user: User): Promise<User> {
    const exists = (await this.repository.findOne({ id: user.id })) || new UserEntity()

    await this.em.persist(this.mapper.toPersistence(user, exists)).flush()

    return user
  }

  async getById(id: bigint): Promise<User | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }
}
