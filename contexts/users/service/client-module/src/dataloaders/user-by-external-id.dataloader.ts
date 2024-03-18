import type { User }          from '@chats-system/users-rpc-client'
import type { UsersService }  from '@chats-system/users-rpc-client'
import type { PromiseClient } from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Injectable }         from '@nestjs/common'
import { Inject }             from '@nestjs/common'
import DataLoader             from 'dataloader'

import { USERS_CLIENT_TOKEN } from '../constants/index.js'

@Injectable()
export class UserByExternalIdDataLoader {
  protected dataloader: DataLoader<string, User>

  constructor(
    @Inject(USERS_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof UsersService>
  ) {
    this.dataloader = new DataLoader<string, User>(async (queries) => this.getUsers(queries))
  }

  async load(externalId: string): Promise<User> {
    return this.dataloader.load(externalId)
  }

  async loadMany(externalIds: Array<string>): Promise<Array<Error | User>> {
    return this.dataloader.loadMany(externalIds)
  }

  protected async getUsers(userIds: ReadonlyArray<string>): Promise<Array<User>> {
    const { users } = await this.client.listUsers({
      query: {
        externalId: {
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
