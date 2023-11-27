import type { User }      from '@chats-system/user-domain-module'

import { Injectable }     from '@nestjs/common'

import { UserRepository } from '@chats-system/user-domain-module'

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: bigint): Promise<User | undefined> {
    return this.userRepository.getById(userId)
  }
}
