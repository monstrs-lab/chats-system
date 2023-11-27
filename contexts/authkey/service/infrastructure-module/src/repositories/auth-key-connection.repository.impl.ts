import type { AuthKeyConnection }                   from '@chats-system/authkey-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { AuthKeyConnectionRepository }              from '@chats-system/authkey-domain-module'

import { AuthKeyConnectionEntity }                  from '../entities/index.js'
import { AuthKeyConnectionMapper }                  from '../mappers/index.js'

@Injectable()
export class AuthKeyConnectionRepositoryImpl extends AuthKeyConnectionRepository {
  constructor(
    @InjectRepository(AuthKeyConnectionEntity)
    private readonly repository: EntityRepository<AuthKeyConnectionEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: AuthKeyConnectionMapper
  ) {
    super()
  }

  async save(authKeyConnection: AuthKeyConnection): Promise<AuthKeyConnection> {
    const exists =
      (await this.repository.findOne({ authKeyId: authKeyConnection.authKeyId })) ||
      new AuthKeyConnectionEntity()

    await this.em.persist(this.mapper.toPersistence(authKeyConnection, exists)).flush()

    return authKeyConnection
  }

  async getById(authKeyId: bigint): Promise<AuthKeyConnection | undefined> {
    const entity = await this.repository.findOne({
      authKeyId,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }
}
