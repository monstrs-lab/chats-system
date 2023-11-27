import type { AuthKeyConnection }          from '@chats-system/authkey-domain-module'
import type { UpdateAuthKeyConnectionDto } from '@chats-system/authkey-domain-module'

import { Injectable }                      from '@nestjs/common'

import { AuthKeyRepository }               from '@chats-system/authkey-domain-module'
import { AuthKeyConnectionRepository }     from '@chats-system/authkey-domain-module'
import { AuthKeyConnectionFactory }        from '@chats-system/authkey-domain-module'
import { AuthKeyPermEmptyError }           from '@chats-system/authkey-domain-module'

@Injectable()
export class UpdateAuthKeyConnectionUseCase {
  constructor(
    private readonly authKeyRepository: AuthKeyRepository,
    private readonly authKeyConnectionRepository: AuthKeyConnectionRepository,
    private readonly authKeyConnectionFactory: AuthKeyConnectionFactory
  ) {}

  async execute(
    authKeyId: bigint,
    updateAuthKeyConnectionDto: UpdateAuthKeyConnectionDto
  ): Promise<AuthKeyConnection | undefined> {
    const authKey = await this.authKeyRepository.getById(authKeyId)

    if (!authKey || authKey.permAuthKeyId === 0n) {
      throw new AuthKeyPermEmptyError()
    }

    const authKeyConnection = await this.authKeyConnectionRepository.getById(authKeyId)

    if (authKeyConnection) {
      return this.authKeyConnectionRepository.save(
        this.authKeyConnectionFactory.updateAuthKeyConnection(
          authKeyConnection,
          updateAuthKeyConnectionDto
        )
      )
    }

    return undefined
  }
}
