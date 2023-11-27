import type { AuthKeyUser }          from '@chats-system/authkey-domain-module'
import type { CreateAuthKeyUserDto } from '@chats-system/authkey-domain-module'

import { Injectable }                from '@nestjs/common'

import { AuthKeyRepository }         from '@chats-system/authkey-domain-module'
import { AuthKeyUserRepository }     from '@chats-system/authkey-domain-module'
import { AuthKeyUserFactory }        from '@chats-system/authkey-domain-module'
import { AuthKeyPermEmptyError }     from '@chats-system/authkey-domain-module'

@Injectable()
export class CreateAuthKeyUserUseCase {
  constructor(
    private readonly authKeyUserRepository: AuthKeyUserRepository,
    private readonly authKeyUserFactory: AuthKeyUserFactory,
    private readonly authKeyRepository: AuthKeyRepository
  ) {}

  async execute(createAuthKeyUserDto: CreateAuthKeyUserDto): Promise<AuthKeyUser> {
    const authKey = await this.authKeyRepository.getById(createAuthKeyUserDto.authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new AuthKeyPermEmptyError()
    }

    return this.authKeyUserRepository.save(
      this.authKeyUserFactory.createAuthKeyUser(createAuthKeyUserDto)
    )
  }
}
