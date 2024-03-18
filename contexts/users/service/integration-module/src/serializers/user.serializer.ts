import type { User } from '@chats-system/users-domain-module'

import * as rpc      from '@chats-system/users-rpc/abstractions'

export class UserSerializer extends rpc.User {
  constructor(private readonly serializable: User) {
    super()
  }

  get id(): bigint {
    return this.serializable.id
  }

  get externalId(): string {
    return this.serializable.externalId
  }

  get firstName(): string {
    return this.serializable.firstName
  }

  get lastName(): string {
    return this.serializable.lastName
  }
}
