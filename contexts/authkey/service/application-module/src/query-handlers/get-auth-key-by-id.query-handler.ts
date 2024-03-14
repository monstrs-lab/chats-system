import type { AuthKey }        from '@chats-system/authkey-domain-module'
import type { IQueryHandler }  from '@nestjs/cqrs'

import { QueryHandler }        from '@nestjs/cqrs'

import { GetAuthKeyByIdQuery } from '../queries/index.js'
import { AuthKeyRepository }   from '../repositories/index.js'

@QueryHandler(GetAuthKeyByIdQuery)
export class GetAuthKeyByIdQueryHandler implements IQueryHandler<GetAuthKeyByIdQuery> {
  constructor(private readonly authKeyRepository: AuthKeyRepository) {}

  async execute(query: GetAuthKeyByIdQuery): Promise<AuthKey | undefined> {
    return this.authKeyRepository.findById(query.authKeyId)
  }
}
