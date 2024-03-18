import type { FindUsersByQueryResult }              from '@chats-system/users-application-module'
import type { FindUsersByQuery }                    from '@chats-system/users-application-module'
import type { User }                                from '@chats-system/users-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { MikroORMQueryBuilder }                     from '@monstrs/mikro-orm-query-builder'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { UserRepository }                           from '@chats-system/users-application-module'

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

  async save(authKey: User): Promise<User> {
    const exists = (await this.repository.findOne({ id: authKey.id })) || new UserEntity()

    await this.em.persist(this.mapper.toPersistence(authKey, exists)).flush()

    return authKey
  }

  async findById(id: bigint): Promise<User | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByExternalId(externalId: string): Promise<User | undefined> {
    const entity = await this.repository.findOne({
      externalId,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByQuery({ pager, order, query }: FindUsersByQuery): Promise<FindUsersByQueryResult> {
    const [users, hasNextPage] = await new MikroORMQueryBuilder<UserEntity>(
      this.em.createQueryBuilder(UserEntity)
    )
      .bigint('id', query?.id)
      .id('externalId', query?.externalId)
      .order(order)
      .pager(pager)
      .execute()

    return {
      users: users.map((user) => this.mapper.fromPersistence(user)),
      hasNextPage,
    }
  }
}
