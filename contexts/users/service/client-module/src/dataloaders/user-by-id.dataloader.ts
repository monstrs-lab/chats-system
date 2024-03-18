import type { User }          from '@chats-system/users-rpc-client'
import type { UsersService }  from '@chats-system/users-rpc-client'
import type { PromiseClient } from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Injectable }         from '@nestjs/common'
import { Inject }             from '@nestjs/common'
import DataLoader             from 'dataloader'

import { USERS_CLIENT_TOKEN } from '../constants/index.js'

@Injectable()
export class UserByIdDataLoader {
  protected dataloader: DataLoader<bigint, User>

  constructor(
    @Inject(USERS_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof UsersService>
  ) {
    this.dataloader = new DataLoader<bigint, User>(async (queries) => this.getUsers(queries))
  }

  async load(userId: bigint): Promise<User> {
    return this.dataloader.load(userId)
  }

  async loadMany(userIds: Array<bigint>): Promise<Array<Error | User>> {
    return this.dataloader.loadMany(userIds)
  }

  protected async getUsers(userIds: ReadonlyArray<bigint>): Promise<Array<User>> {
    const { users } = await this.client.listUsers({
      query: {
        id: {
          conditions: {
            in: {
              values: userIds.map((userId) => userId),
            },
          },
        },
      },
    })

    return users
  }
}
