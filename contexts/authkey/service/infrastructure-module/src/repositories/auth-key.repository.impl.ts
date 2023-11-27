import type { AuthKey }                             from '@chats-system/authkey-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { AuthKeyRepository }                        from '@chats-system/authkey-domain-module'

import { AuthKeyEntity }                            from '../entities/index.js'
import { AuthKeyMapper }                            from '../mappers/index.js'

@Injectable()
export class AuthKeyRepositoryImpl extends AuthKeyRepository {
  constructor(
    @InjectRepository(AuthKeyEntity)
    private readonly repository: EntityRepository<AuthKeyEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: AuthKeyMapper
  ) {
    super()
  }

  async save(authKey: AuthKey): Promise<AuthKey> {
    const exists =
      (await this.repository.findOne({ authKeyId: authKey.authKeyId })) || new AuthKeyEntity()

    await this.em.persist(this.mapper.toPersistence(authKey, exists)).flush()

    return authKey
  }

  async getById(authKeyId: bigint): Promise<AuthKey | undefined> {
    const entity = await this.repository.findOne({
      authKeyId,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }
}
