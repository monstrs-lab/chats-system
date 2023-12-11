import type { User }          from '@chats-system/user-rpc-client'
import type { UserService }   from '@chats-system/user-rpc-client'
import type { PromiseClient } from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Injectable }         from '@nestjs/common'
import { Inject }             from '@nestjs/common'
import DataLoader             from 'dataloader'

import { USER_CLIENT_TOKEN }  from '../constants/index.js'

@Injectable()
export class UserDataLoader {
  protected dataloader: DataLoader<bigint, User>

  constructor(
    @Inject(USER_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof UserService>
  ) {
    this.dataloader = new DataLoader<bigint, User>(async (queries) => this.getUsers(queries))
  }

  async load(query: bigint): Promise<User> {
    return this.dataloader.load(query)
  }

  async loadMany(queries: Array<bigint>): Promise<Array<Error | User>> {
    return this.dataloader.loadMany(queries)
  }

  protected async getUsers(userIds: ReadonlyArray<bigint>): Promise<Array<User>> {
    const { users } = await this.client.getUsers({
      userIds: userIds.map((userId) => userId),
    })

    return users
  }
}
