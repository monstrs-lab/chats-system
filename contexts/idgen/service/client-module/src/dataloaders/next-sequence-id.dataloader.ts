import type { Sequence }      from '@chats-system/idgen-rpc-client'
import type { SequenceQuery } from '@chats-system/idgen-rpc-client'
import type { IdGenService }  from '@chats-system/idgen-rpc-client'
import type { PromiseClient } from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Injectable }         from '@nestjs/common'
import { Inject }             from '@nestjs/common'
import DataLoader             from 'dataloader'

import { RPC_CLIENT_TOKEN }   from '../constants/index.js'

@Injectable()
export class NextSequenceIdDataLoader {
  protected dataloader: DataLoader<SequenceQuery, Sequence>

  constructor(
    @Inject(RPC_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof IdGenService>
  ) {
    this.dataloader = new DataLoader<SequenceQuery, Sequence>(async (queries) =>
      this.getNextSequenceIds(queries))
  }

  async load(query: SequenceQuery): Promise<Sequence> {
    return this.dataloader.load(query)
  }

  async loadMany(queries: Array<SequenceQuery>): Promise<Array<Error | Sequence>> {
    return this.dataloader.loadMany(queries)
  }

  protected async getNextSequenceIds(
    queries: ReadonlyArray<SequenceQuery>
  ): Promise<Array<Sequence>> {
    const { sequences } = await this.client.getNextSequenceIds({
      queries: queries.map((query) => ({
        key: query.key,
        increment: query.increment,
      })),
    })

    return sequences
  }
}
