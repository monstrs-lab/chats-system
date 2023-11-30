import type { Dialog }                                from '@chats-system/messages-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import {  DialogRepository, PeerType }                           from '@chats-system/messages-domain-module'

import { DialogEntity }                               from '../entities/index.js'
import { DialogMapper }                               from '../mappers/index.js'

@Injectable()
export class DialogRepositoryImpl extends DialogRepository {
  constructor(
    @InjectRepository(DialogEntity)
    private readonly repository: EntityRepository<DialogEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: DialogMapper
  ) {
    super()
  }

  async save(user: Dialog): Promise<Dialog> {
    const exists = (await this.repository.findOne({ id: user.id })) || new DialogEntity()

    await this.em.persist(this.mapper.toPersistence(user, exists)).flush()

    return user
  }

  override async  getByUserAndPeer(userId: bigint, peerId: bigint, peerType: PeerType): Promise<Dialog | undefined> {
    const entity = await this.repository.findOne({
      userId,
      peerId,
      peerType
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  override async getByUserFolder(userId: bigint, folderId: number): Promise<Array<Dialog>> {
    const entities = await this.repository.find({ userId, folderId })

    return entities.map(entity => this.mapper.fromPersistence(entity))
  }
}
