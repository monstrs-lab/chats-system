import type { User }      from '@chats-system/user-domain-module'

import { Injectable }     from '@nestjs/common'

import { UserRepository } from '@chats-system/user-domain-module'

@Injectable()
export class GetUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIds: Array<bigint>): Promise<Array<User>> {
    return this.userRepository.getByIds(userIds)
  }
}
