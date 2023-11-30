import type { DialogId, Message }                         from '@chats-system/messages-domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { MessageRepository }                    from '@chats-system/messages-domain-module'

import { MessageEntity }                        from '../entities/index.js'
import { MessageMapper }                        from '../mappers/index.js'

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

  async save(userContact: Message): Promise<Message> {
    const exists =
      (await this.repository.findOne({ id: userContact.id })) || new MessageEntity()

    await this.em.persist(this.mapper.toPersistence(userContact, exists)).flush()

    return userContact
  }

  override async getByUserDialog(userId: bigint, dialogId: DialogId): Promise<Array<Message>> {
    const entities = await this.repository.find({
      userId,
      dialogId1: dialogId.a,
      dialogId2: dialogId.b
    })

    return entities.map(entity => this.mapper.fromPersistence(entity))
    
  }
}
