import type { ICommandHandler } from '@nestjs/cqrs'

import { CommandHandler }       from '@nestjs/cqrs'

import { AuthKey }              from '@chats-system/authkey-domain-module'

import { CreateAuthKeyCommand } from '../commands/index.js'
import { AuthKeyRepository }    from '../repositories/index.js'

@CommandHandler(CreateAuthKeyCommand)
export class CreateAuthKeyCommandHandler implements ICommandHandler<CreateAuthKeyCommand, void> {
  constructor(private readonly authKeyRepository: AuthKeyRepository) {}

  async execute(command: CreateAuthKeyCommand): Promise<void> {
    await this.authKeyRepository.save(new AuthKey().create(command.authKeyId, command.key))
  }
}
