import { EntityRepository, EntityManager }                         from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { Injectable }                               from '@nestjs/common'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Inject }                                   from '@nestjs/common'

import { UserPresenceEntity }                               from '../entities/index.js'

@Injectable()
export class UserPresenceRepository {
  constructor(
    @InjectRepository(UserPresenceEntity)
    private readonly userPresenceRepository: EntityRepository<UserPresenceEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
  ) {}

  async getLastSeenAt(userId: bigint): Promise<bigint | undefined> {
    const userPresenceEntity = await this.userPresenceRepository.findOne({
        userId,
    })

    return userPresenceEntity?.lastSeenAt
  }

  async setLastSeenAt(userId: bigint, lastSeenAt: bigint, expires: number): Promise<void> {
    const userPresenceEntity = (await this.userPresenceRepository.findOne({ userId })) || new UserPresenceEntity()

    userPresenceEntity.lastSeenAt = lastSeenAt
    userPresenceEntity.expires = expires

    await this.em.persist(userPresenceEntity).flush()
  }
}
