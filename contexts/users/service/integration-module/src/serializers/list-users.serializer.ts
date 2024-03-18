import type { User }         from '@chats-system/users-domain-module'

import { ListUsersResponse } from '@chats-system/users-rpc/abstractions'

import { UserSerializer }    from './user.serializer.js'

export class ListUsersSerializer extends ListUsersResponse {
  constructor(private readonly serializable: { users: Array<User>; hasNextPage: boolean }) {
    super()
  }

  get users(): Array<UserSerializer> {
    return this.serializable.users.map((user) => new UserSerializer(user))
  }

  get hasNextPage(): boolean {
    return this.serializable.hasNextPage
  }
}
