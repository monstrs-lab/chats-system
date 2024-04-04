import type { Message } from '@chats-system/messages-domain-module'
import type { Query }   from '@monstrs/query-types'

export interface MessagesQuery {
  id?: Query.BigIntType
  userId?: Query.BigIntType
  dialogId1?: Query.BigIntType
  dialogId2?: Query.BigIntType
}

export interface FindMessagesByQuery {
  pager?: Query.Pager
  order?: Query.Order
  query?: MessagesQuery
}

export interface FindMessagesByQueryResult {
  messages: Array<Message>
  hasNextPage: boolean
}

export abstract class MessageRepository {
  abstract save(message: Message): Promise<Message>

  abstract findById(messageId: bigint): Promise<Message | undefined>

  abstract findByQuery(query: FindMessagesByQuery): Promise<FindMessagesByQueryResult>
}
