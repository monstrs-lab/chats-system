import type { ICommandHandler } from '@nestjs/cqrs'

import { CommandHandler }       from '@nestjs/cqrs'

import { User }                 from '@chats-system/users-domain-module'

import { CreateUserCommand }    from '../commands/index.js'
import { UserRepository }       from '../repositories/index.js'

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand, void> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: CreateUserCommand): Promise<void> {
    await this.userRepository.save(
      new User().create(command.userId, command.externalId, command.firstName, command.lastName)
    )
  }
}
