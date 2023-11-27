import type { AuthKeyConnection }          from '@chats-system/authkey-domain-module'
import type { CreateAuthKeyConnectionDto } from '@chats-system/authkey-domain-module'

import { Injectable }                      from '@nestjs/common'

import { AuthKeyRepository }               from '@chats-system/authkey-domain-module'
import { AuthKeyConnectionRepository }     from '@chats-system/authkey-domain-module'
import { AuthKeyConnectionFactory }        from '@chats-system/authkey-domain-module'
import { AuthKeyPermEmptyError }           from '@chats-system/authkey-domain-module'

@Injectable()
export class CreateAuthKeyConnectionUseCase {
  constructor(
    private readonly authKeyRepository: AuthKeyRepository,
    private readonly authKeyConnectionRepository: AuthKeyConnectionRepository,
    private readonly authKeyConnectionFactory: AuthKeyConnectionFactory
  ) {}

  async execute(
    createAuthKeyConnectionDto: CreateAuthKeyConnectionDto
  ): Promise<AuthKeyConnection> {
    const authKey = await this.authKeyRepository.getById(createAuthKeyConnectionDto.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new AuthKeyPermEmptyError()
    }

    return this.authKeyConnectionRepository.save(
      this.authKeyConnectionFactory.createAuthKeyConnection(createAuthKeyConnectionDto)
    )
  }
}
