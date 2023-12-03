import type { Dialog }                              from '@chats-system/messages-domain-module'
import type { Message }                             from '@chats-system/messages-domain-module'

import { EntityManager }                            from '@mikro-orm/core'
import { EntityRepository }                         from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { TransactionalRepository }                  from '@chats-system/messages-application-module'

import { DialogEntity }                             from '../entities/index.js'
import { MessageEntity }                            from '../entities/index.js'
import { DialogMapper }                             from '../mappers/index.js'
import { MessageMapper }                            from '../mappers/index.js'

@Injectable()
export class TransactionalRepositoryImpl extends TransactionalRepository {
  constructor(
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    @InjectRepository(MessageEntity)
    private readonly messageRepository: EntityRepository<MessageEntity>,
    @InjectRepository(DialogEntity)
    private readonly dialogRepository: EntityRepository<DialogEntity>,
    private readonly messageMapper: MessageMapper,
    private readonly dialogMapper: DialogMapper
  ) {
    super()
  }

  override async saveMessagesWithDialogs(
    messages: Array<Message>,
    dialogs: Array<Dialog>
  ): Promise<void> {
    const messageEntities = await this.messageRepository.find({
      id: {
        $in: messages.map((message) => message.id),
      },
    })

    const dialogEntities = await this.dialogRepository.find({
      id: {
        $in: dialogs.map((dialog) => dialog.id),
      },
    })

    messages.forEach((message) => {
      this.em.persist(
        this.messageMapper.toPersistence(
          message,
          messageEntities.find((messageEntity) => messageEntity.id === message.id) ||
            new MessageEntity()
        )
      )
    })

    dialogs.forEach((dialog) => {
      this.em.persist(
        this.dialogMapper.toPersistence(
          dialog,
          dialogEntities.find((dialogEntity) => dialogEntity.id === dialog.id) || new DialogEntity()
        )
      )
    })

    await this.em.flush()
  }
}
