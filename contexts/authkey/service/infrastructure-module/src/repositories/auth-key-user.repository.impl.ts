import type { AuthKeyUser }                         from '@chats-system/authkey-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { AuthKeyUserRepository }                    from '@chats-system/authkey-application-module'

import { AuthKeyUserEntity }                        from '../entities/index.js'
import { AuthKeyUserMapper }                        from '../mappers/index.js'

@Injectable()
export class AuthKeyUserRepositoryImpl extends AuthKeyUserRepository {
  constructor(
    @InjectRepository(AuthKeyUserEntity)
    private readonly repository: EntityRepository<AuthKeyUserEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: AuthKeyUserMapper
  ) {
    super()
  }

  async save(authKeyUser: AuthKeyUser): Promise<AuthKeyUser> {
    const exists =
      (await this.repository.findOne({ id: authKeyUser.id })) || new AuthKeyUserEntity()

    await this.em.persist(this.mapper.toPersistence(authKeyUser, exists)).flush()

    return authKeyUser
  }

  async findByAuthKeyId(authKeyId: bigint): Promise<AuthKeyUser | undefined> {
    const entity = await this.repository.findOne({
      authKeyId,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }
}
