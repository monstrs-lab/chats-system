import type { AuthKey }          from '@chats-system/authkey-domain-module'
import type { CreateAuthKeyDto } from '@chats-system/authkey-domain-module'

import { Injectable }            from '@nestjs/common'

import { AuthKeyRepository }     from '@chats-system/authkey-domain-module'
import { AuthKeyFactory }        from '@chats-system/authkey-domain-module'

@Injectable()
export class CreateAuthKeyUseCase {
  constructor(
    private readonly authKeyRepository: AuthKeyRepository,
    private readonly authKeyFactory: AuthKeyFactory
  ) {}

  async execute(createAuthKeyDto: CreateAuthKeyDto): Promise<AuthKey> {
    return this.authKeyRepository.save(this.authKeyFactory.createAuthKey(createAuthKeyDto))
  }
}
