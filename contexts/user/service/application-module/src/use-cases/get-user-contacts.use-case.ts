import type { UserContact }      from '@chats-system/user-domain-module'

import { Injectable }            from '@nestjs/common'

import { UserContactRepository } from '@chats-system/user-domain-module'

@Injectable()
export class GetUserContactsUseCase {
  constructor(private readonly usercontactRepository: UserContactRepository) {}

  async execute(userId: bigint): Promise<Array<UserContact>> {
    return this.usercontactRepository.getByUserId(userId)
  }
}
