import type { PartialMessage }          from '@bufbuild/protobuf'
import type { UserService }             from '@chats-system/user-rpc-client'
import type { User }                    from '@chats-system/user-rpc-client'
import type { CreateUserRequest }       from '@chats-system/user-rpc-client'
import type { CreateUserResponse }      from '@chats-system/user-rpc-client'
import type { ImportContactsRequest }   from '@chats-system/user-rpc-client'
import type { ImportContactsResponse }  from '@chats-system/user-rpc-client'
import type { GetUserContactsRequest }  from '@chats-system/user-rpc-client'
import type { GetUserContactsResponse } from '@chats-system/user-rpc-client'
import type { GetUserRequest }          from '@chats-system/user-rpc-client'
import type { GetUserResponse }         from '@chats-system/user-rpc-client'
import type { PromiseClient }           from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                       from '@nestjs/common'
import { Injectable }                   from '@nestjs/common'

import { USER_CLIENT_TOKEN }            from '../constants/index.js'
import { UserDataLoader }               from '../dataloaders/index.js'

@Injectable()
export class UserClient {
  constructor(
    @Inject(USER_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof UserService>,
    private readonly userDataLoader: UserDataLoader
  ) {}

  async createUser(request: PartialMessage<CreateUserRequest>): Promise<CreateUserResponse> {
    return this.client.createUser(request)
  }

  async importContacts(
    request: PartialMessage<ImportContactsRequest>
  ): Promise<ImportContactsResponse> {
    return this.client.importContacts(request)
  }

  async getUser(request: PartialMessage<GetUserRequest>): Promise<GetUserResponse> {
    return this.client.getUser(request)
  }

  async getUserContacts(
    request: PartialMessage<GetUserContactsRequest>
  ): Promise<GetUserContactsResponse> {
    return this.client.getUserContacts(request)
  }

  async loadUser(userId: bigint): Promise<User> {
    return this.userDataLoader.load(userId)
  }

  async loadUsers(userIds: Array<bigint>): Promise<Array<Error | User>> {
    return this.userDataLoader.loadMany(userIds)
  }
}
