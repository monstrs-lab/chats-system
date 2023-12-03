import type { DialogId }     from '@chats-system/messages-domain-module'
import type { Message }      from '@chats-system/messages-domain-module'

import { EntityRepository }  from '@mikro-orm/core'
import { InjectRepository }  from '@mikro-orm/nestjs'
import { Injectable }        from '@nestjs/common'

import { MessageRepository } from '@chats-system/messages-application-module'

import { MessageEntity }     from '../entities/index.js'
import { MessageMapper }     from '../mappers/index.js'

@Injectable()
export class MessageRepositoryImpl extends MessageRepository {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly repository: EntityRepository<MessageEntity>,
    private readonly mapper: MessageMapper
  ) {
    super()
  }

  override async getByUserDialog(userId: bigint, dialogId: DialogId): Promise<Array<Message>> {
    const entities = await this.repository.find({
      userId,
      dialogId1: dialogId.a,
      dialogId2: dialogId.b,
    })

    return entities.map((entity) => this.mapper.fromPersistence(entity))
  }

  override async getByUserMessages(
    userId: bigint,
    messageIds: Array<number>
  ): Promise<Array<Message>> {
    const entities = await this.repository.find({
      userId,
      messageId: {
        $in: messageIds,
      },
    })

    return entities.map((entity) => this.mapper.fromPersistence(entity))
  }
}
