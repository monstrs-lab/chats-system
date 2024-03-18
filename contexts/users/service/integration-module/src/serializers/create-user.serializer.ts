import type { User }          from '@chats-system/users-domain-module'

import { CreateUserResponse } from '@chats-system/users-rpc/abstractions'

import { UserSerializer }     from './user.serializer.js'

export class CreateUserSerializer extends CreateUserResponse {
  constructor(private readonly serializable: User) {
    super()
  }

  get user(): UserSerializer {
    return new UserSerializer(this.serializable)
  }
}
