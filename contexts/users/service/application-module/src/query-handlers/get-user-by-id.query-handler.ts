import type { User }          from '@chats-system/users-domain-module'
import type { IQueryHandler } from '@nestjs/cqrs'

import { QueryHandler }       from '@nestjs/cqrs'

import { GetUserByIdQuery }   from '../queries/index.js'
import { UserRepository }     from '../repositories/index.js'

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdQueryHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetUserByIdQuery): Promise<User | undefined> {
    return this.userRepository.findById(query.userId)
  }
}
