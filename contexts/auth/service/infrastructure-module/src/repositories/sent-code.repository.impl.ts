import type { SentCode }                            from '@chats-system/auth-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { SentCodeRepository }                       from '@chats-system/auth-domain-module'

import { SentCodeEntity }                           from '../entities/index.js'
import { SentCodeMapper }                           from '../mappers/index.js'

@Injectable()
export class SentCodeRepositoryImpl extends SentCodeRepository {
  constructor(
    @InjectRepository(SentCodeEntity)
    private readonly repository: EntityRepository<SentCodeEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: SentCodeMapper
  ) {
    super()
  }

  async save(sentCode: SentCode): Promise<SentCode> {
    const exists = (await this.repository.findOne({ id: sentCode.id })) || new SentCodeEntity()

    await this.em.persist(this.mapper.toPersistence(sentCode, exists)).flush()

    return sentCode
  }

  async getByCodeHash(phoneCodeHash: string): Promise<SentCode | undefined> {
    const entity = await this.repository.findOne({
      phoneCodeHash,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  override async removeById(id: bigint): Promise<void> {
    const entity = await this.repository.findOne({ id })

    if (entity) {
      await this.em.remove(entity).flush()
    }
  }
}
