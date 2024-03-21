import type { Dialog }                              from '@chats-system/messages-domain-module'
import type { PeerType }                            from '@chats-system/messages-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { DialogRepository }                         from '@chats-system/messages-application-module'

import { DialogEntity }                             from '../entities/index.js'
import { DialogMapper }                             from '../mappers/index.js'

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

  async save(dialog: Dialog): Promise<Dialog> {
    const exists = (await this.repository.findOne({ id: dialog.id })) || new DialogEntity()

    await this.em.persist(this.mapper.toPersistence(dialog, exists)).flush()

    return dialog
  }

  async findById(id: bigint): Promise<Dialog | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByUserPeer(
    userId: bigint,
    peerId: bigint,
    peerType: PeerType
  ): Promise<Dialog | undefined> {
    const entity = await this.repository.findOne({
      userId,
      peerId,
      peerType,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }
}
