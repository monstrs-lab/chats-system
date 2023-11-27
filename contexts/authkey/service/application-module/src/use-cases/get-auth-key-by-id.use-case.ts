import type { AuthKey }      from '@chats-system/authkey-domain-module'

import { Injectable }        from '@nestjs/common'

import { AuthKeyRepository } from '@chats-system/authkey-domain-module'

@Injectable()
export class GetAuthKeyByIdUseCase {
  constructor(private readonly authKeyRepository: AuthKeyRepository) {}

  async execute(authKeyId: bigint): Promise<AuthKey | undefined> {
    return this.authKeyRepository.getById(authKeyId)
  }
}
