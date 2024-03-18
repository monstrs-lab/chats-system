import type { IQueryHandler }          from '@nestjs/cqrs'

import type { FindUsersByQueryResult } from '../repositories/index.js'

import { QueryHandler }                from '@nestjs/cqrs'

import { ListUsersQuery }              from '../queries/index.js'
import { UserRepository }              from '../repositories/index.js'

@QueryHandler(ListUsersQuery)
export class ListUsersQueryHandler implements IQueryHandler<ListUsersQuery> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ pager, order, query }: ListUsersQuery): Promise<FindUsersByQueryResult> {
    return this.userRepository.findByQuery({
      pager,
      order,
      query,
    })
  }
}
