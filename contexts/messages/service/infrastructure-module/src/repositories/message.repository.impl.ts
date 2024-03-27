import type { FindMessagesByQuery }                 from '@chats-system/messages-application-module'
import type { FindMessagesByQueryResult }           from '@chats-system/messages-application-module'
import type { Message }                             from '@chats-system/messages-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { MikroORMQueryBuilder }                     from '@monstrs/mikro-orm-query-builder'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'
import { EventBus }                                 from '@nestjs/cqrs'

import { MessageRepository }                        from '@chats-system/messages-application-module'

import { MessageEntity }                            from '../entities/index.js'
import { MessageMapper }                            from '../mappers/index.js'

@Injectable()
export class MessageRepositoryImpl extends MessageRepository {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly repository: EntityRepository<MessageEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: MessageMapper,
    private readonly eventBus: EventBus
  ) {
    super()
  }

  async save(message: Message): Promise<Message> {
    const exists = (await this.repository.findOne({ id: message.id })) || new MessageEntity()

    await this.em.persist(this.mapper.toPersistence(message, exists)).flush()

    if (message.getUncommittedEvents().length > 0) {
      this.eventBus.publishAll(message.getUncommittedEvents())
    }

    return message
  }

  async findById(id: bigint): Promise<Message | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByQuery({
    pager,
    order,
    query,
  }: FindMessagesByQuery): Promise<FindMessagesByQueryResult> {
    const [messages, hasNextPage] = await new MikroORMQueryBuilder<MessageEntity>(
      this.em.createQueryBuilder(MessageEntity)
    )
      .bigint('id', query?.id)
      .bigint('userId', query?.userId)
      .bigint('dialogId1', query?.dialogId1)
      .bigint('dialogId2', query?.dialogId2)
      .order(order)
      .pager(pager)
      .execute()

    return {
      messages: messages.map((message) => this.mapper.fromPersistence(message)),
      hasNextPage,
    }
  }
}
