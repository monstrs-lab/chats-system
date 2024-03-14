import type { ICommandHandler }     from '@nestjs/cqrs'

import { CommandHandler }           from '@nestjs/cqrs'

import { AuthKeyUser }              from '@chats-system/authkey-domain-module'

import { CreateAuthKeyUserCommand } from '../commands/index.js'
import { AuthKeyUserRepository }    from '../repositories/index.js'

@CommandHandler(CreateAuthKeyUserCommand)
export class CreateAuthKeyUserCommandHandler
  implements ICommandHandler<CreateAuthKeyUserCommand, void>
{
  constructor(private readonly authKeyUserRepository: AuthKeyUserRepository) {}

  async execute(command: CreateAuthKeyUserCommand): Promise<void> {
    await this.authKeyUserRepository.save(
      new AuthKeyUser().create(command.authKeyUserId, command.authKeyId, command.userId)
    )
  }
}
