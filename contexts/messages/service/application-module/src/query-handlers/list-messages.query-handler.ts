import type { IQueryHandler }             from '@nestjs/cqrs'

import type { FindMessagesByQueryResult } from '../repositories/index.js'

import { QueryHandler }                   from '@nestjs/cqrs'

import { ListMessagesQuery }              from '../queries/index.js'
import { MessageRepository }              from '../repositories/index.js'

@QueryHandler(ListMessagesQuery)
export class ListMessagesQueryHandler implements IQueryHandler<ListMessagesQuery> {
  constructor(private readonly userRepository: MessageRepository) {}

  async execute({ pager, order, query }: ListMessagesQuery): Promise<FindMessagesByQueryResult> {
    return this.userRepository.findByQuery({
      pager,
      order,
      query,
    })
  }
}
