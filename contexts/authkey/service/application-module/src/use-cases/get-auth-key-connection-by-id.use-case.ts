import type { AuthKeyConnection }      from '@chats-system/authkey-domain-module'

import { Injectable }                  from '@nestjs/common'

import { AuthKeyConnectionRepository } from '@chats-system/authkey-domain-module'
import { AuthKeyRepository }           from '@chats-system/authkey-domain-module'
import { AuthKeyPermEmptyError }       from '@chats-system/authkey-domain-module'

@Injectable()
export class GetAuthKeyConnectionKeyByIdUseCase {
  constructor(
    private readonly authKeyConnectionRepository: AuthKeyConnectionRepository,
    private readonly authKeyRepository: AuthKeyRepository
  ) {}

  async execute(authKeyId: bigint): Promise<AuthKeyConnection | undefined> {
    const authKey = await this.authKeyRepository.getById(authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new AuthKeyPermEmptyError()
    }

    return this.authKeyConnectionRepository.getById(authKeyId)
  }
}
