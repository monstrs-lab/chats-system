import type { Message }                             from '@chats-system/messages-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

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
    private readonly mapper: MessageMapper
  ) {
    super()
  }

  async save(message: Message): Promise<Message> {
    const exists = (await this.repository.findOne({ id: message.id })) || new MessageEntity()

    await this.em.persist(this.mapper.toPersistence(message, exists)).flush()

    return message
  }

  async findById(id: bigint): Promise<Message | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }
}
