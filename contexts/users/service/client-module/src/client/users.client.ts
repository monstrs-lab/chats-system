import type { PartialMessage }        from '@bufbuild/protobuf'
import type { UsersService }          from '@chats-system/users-rpc-client'
import type { User }                  from '@chats-system/users-rpc-client'
import type { CreateUserRequest }     from '@chats-system/users-rpc-client'
import type { CreateUserResponse }    from '@chats-system/users-rpc-client'
import type { PromiseClient }         from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                     from '@nestjs/common'
import { Injectable }                 from '@nestjs/common'

import { USERS_CLIENT_TOKEN }         from '../constants/index.js'
import { UserByIdDataLoader }         from '../dataloaders/index.js'
import { UserByExternalIdDataLoader } from '../dataloaders/index.js'

@Injectable()
export class UsersClient {
  constructor(
    @Inject(USERS_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof UsersService>,
    private readonly userByExternalIdDataLoader: UserByExternalIdDataLoader,
    private readonly userByIdDataLoader: UserByIdDataLoader
  ) {}

  async createUser(request: PartialMessage<CreateUserRequest>): Promise<CreateUserResponse> {
    return this.client.createUser(request)
  }

  async loadUser(userId: bigint): Promise<User> {
    return this.userByIdDataLoader.load(userId)
  }

  async loadUsers(userIds: Array<bigint>): Promise<Array<Error | User>> {
    return this.userByIdDataLoader.loadMany(userIds)
  }

  async loadUserByExternalId(externalId: string): Promise<User> {
    return this.userByExternalIdDataLoader.load(externalId)
  }

  async loadUsersByExternalIds(externalIds: Array<string>): Promise<Array<Error | User>> {
    return this.userByExternalIdDataLoader.loadMany(externalIds)
  }
}
