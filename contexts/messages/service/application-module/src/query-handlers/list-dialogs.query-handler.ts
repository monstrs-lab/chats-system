import type { IQueryHandler }            from '@nestjs/cqrs'

import type { FindDialogsByQueryResult } from '../repositories/index.js'

import { QueryHandler }                  from '@nestjs/cqrs'

import { ListDialogsQuery }              from '../queries/index.js'
import { DialogRepository }              from '../repositories/index.js'

@QueryHandler(ListDialogsQuery)
export class ListDialogsQueryHandler implements IQueryHandler<ListDialogsQuery> {
  constructor(private readonly userRepository: DialogRepository) {}

  async execute({ pager, order, query }: ListDialogsQuery): Promise<FindDialogsByQueryResult> {
    return this.userRepository.findByQuery({
      pager,
      order,
      query,
    })
  }
}
