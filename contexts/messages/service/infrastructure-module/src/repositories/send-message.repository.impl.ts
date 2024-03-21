import type { Dialog }                              from '@chats-system/messages-domain-module'
import type { Message }                             from '@chats-system/messages-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { SendMessageRepository }                    from '@chats-system/messages-application-module'

import { DialogEntity }                             from '../entities/index.js'
import { MessageEntity }                            from '../entities/index.js'
import { DialogMapper }                             from '../mappers/index.js'
import { MessageMapper }                            from '../mappers/index.js'

@Injectable()
export class SendMessageRepositoryImpl extends SendMessageRepository {
  constructor(
    @InjectRepository(DialogEntity)
    private readonly dialogRepository: EntityRepository<DialogEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly messageMapper: MessageMapper,
    private readonly dialogMapper: DialogMapper
  ) {
    super()
  }

  async save(
    outboxMessage: Message,
    inboxMessage: Message,
    outboxDialog: Dialog,
    inboxDialog: Dialog
  ): Promise<void> {
    const [existsOutboxDialog, existsInboxDialog] = await this.dialogRepository.find({
      id: {
        $in: [outboxDialog.id, inboxDialog.id],
      },
    })

    await this.em.persist(
      this.dialogMapper.toPersistence(outboxDialog, existsOutboxDialog || new DialogEntity())
    )
    await this.em.persist(
      this.dialogMapper.toPersistence(inboxDialog, existsInboxDialog || new DialogEntity())
    )

    await this.em.persist(this.messageMapper.toPersistence(outboxMessage, new MessageEntity()))
    await this.em.persist(this.messageMapper.toPersistence(inboxMessage, new MessageEntity()))

    await this.em.flush()
  }
}
