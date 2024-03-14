import type { AuthKeyUser }               from '@chats-system/authkey-domain-module'
import type { IQueryHandler }             from '@nestjs/cqrs'

import { QueryHandler }                   from '@nestjs/cqrs'

import { GetAuthKeyUserByAuthKeyIdQuery } from '../queries/index.js'
import { AuthKeyUserRepository }          from '../repositories/index.js'

@QueryHandler(GetAuthKeyUserByAuthKeyIdQuery)
export class GetAuthKeyUserByAuthKeyIdQueryHandler
  implements IQueryHandler<GetAuthKeyUserByAuthKeyIdQuery>
{
  constructor(private readonly authKeyUserRepository: AuthKeyUserRepository) {}

  async execute(query: GetAuthKeyUserByAuthKeyIdQuery): Promise<AuthKeyUser | undefined> {
    return this.authKeyUserRepository.findByAuthKeyId(query.authKeyId)
  }
}
