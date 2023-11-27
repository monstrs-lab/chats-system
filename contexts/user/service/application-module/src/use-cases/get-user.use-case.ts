import type { User }      from '@chats-system/user-domain-module'

import { Injectable }     from '@nestjs/common'

import { UserRepository } from '@chats-system/user-domain-module'

@Injectable()
export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id?: bigint, phone?: string): Promise<User | undefined> {
    if (id) {
      return this.userRepository.getById(id)
    }

    if (phone) {
      return this.userRepository.getByPhone(phone)
    }

    return undefined
  }
}
