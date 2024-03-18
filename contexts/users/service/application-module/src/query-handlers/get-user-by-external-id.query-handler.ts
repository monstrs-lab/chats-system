import type { User }                from '@chats-system/users-domain-module'
import type { IQueryHandler }       from '@nestjs/cqrs'

import { QueryHandler }             from '@nestjs/cqrs'

import { GetUserByExternalIdQuery } from '../queries/index.js'
import { UserRepository }           from '../repositories/index.js'

@QueryHandler(GetUserByExternalIdQuery)
export class GetUserByExternalIdQueryHandler implements IQueryHandler<GetUserByExternalIdQuery> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetUserByExternalIdQuery): Promise<User | undefined> {
    return this.userRepository.findByExternalId(query.externalId)
  }
}
