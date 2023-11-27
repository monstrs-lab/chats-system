import type { AuthKeyUser }      from '@chats-system/authkey-domain-module'

import { Injectable }            from '@nestjs/common'

import { AuthKeyUserRepository } from '@chats-system/authkey-domain-module'
import { AuthKeyRepository }     from '@chats-system/authkey-domain-module'
import { AuthKeyPermEmptyError } from '@chats-system/authkey-domain-module'

@Injectable()
export class GetAuthKeyUserKeyByIdUseCase {
  constructor(
    private readonly authKeyUserRepository: AuthKeyUserRepository,
    private readonly authKeyRepository: AuthKeyRepository
  ) {}

  async execute(authKeyId: bigint): Promise<AuthKeyUser | undefined> {
    const authKey = await this.authKeyRepository.getById(authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new AuthKeyPermEmptyError()
    }

    return this.authKeyUserRepository.getActiveById(authKeyId)
  }
}
