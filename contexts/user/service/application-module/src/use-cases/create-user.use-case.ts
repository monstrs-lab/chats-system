import type { User }          from '@chats-system/user-domain-module'
import type { CreateUserDto } from '@chats-system/user-domain-module'

import { Injectable }         from '@nestjs/common'

import { UserRepository }     from '@chats-system/user-domain-module'
import { UserFactory }        from '@chats-system/user-domain-module'

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userFactory: UserFactory
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(this.userFactory.createUser(createUserDto))
  }
}
