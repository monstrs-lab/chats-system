import type { IdGenService }           from '@chats-system/idgen-rpc-client'
import type { PromiseClient }          from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                      from '@nestjs/common'
import { Injectable }                  from '@nestjs/common'
import { fromBigIntToNumber }          from '@monstrs/bigint-utils'
import FlakeIdGen                      from 'flake-idgen'

import { SequenceQuery }               from '@chats-system/idgen-rpc-client'

import { RPC_CLIENT_TOKEN }            from '../constants/index.js'
import { CurrentSequenceIdDataLoader } from '../dataloaders/index.js'
import { NextSequenceIdDataLoader }    from '../dataloaders/index.js'

@Injectable()
export class IdGenClient {
  static PTS_UPDATES_NGEN_ID = 'pts_updates_ngen'

  static SEQ_UPDATES_NGEN_ID = 'seq_updates_ngen'

  protected flakeIdGen: FlakeIdGen = new FlakeIdGen()

  constructor(
    @Inject(RPC_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof IdGenService>,
    private readonly currentSequenceIdDataLoader: CurrentSequenceIdDataLoader,
    private readonly nextSequenceIdDataLoader: NextSequenceIdDataLoader
  ) {}

  async setCurrentSequenceId(key: string, id: bigint): Promise<boolean> {
    const { success } = await this.client.setCurrentSequenceId({
      key,
      id,
    })

    return success
  }

  async getRandomId(): Promise<bigint> {
    return this.flakeIdGen.next().readBigInt64BE()
  }

  async getCurrentSequenceId(key: bigint): Promise<number> {
    return this.loadCurrentSequenceIdNumber(
      [IdGenClient.SEQ_UPDATES_NGEN_ID, key.toString()].join('_')
    )
  }

  async loadCurrentSequenceId(key: string): Promise<bigint> {
    const sequence = await this.currentSequenceIdDataLoader.load(new SequenceQuery({ key }))

    return sequence.id
  }

  async loadCurrentSequenceIdNumber(key: string): Promise<number> {
    const sequence = await this.currentSequenceIdDataLoader.load(new SequenceQuery({ key }))

    return fromBigIntToNumber(sequence.id)
  }

  async loadNextSequenceId(key: string, increment: number = 1): Promise<bigint> {
    const sequence = await this.nextSequenceIdDataLoader.load(new SequenceQuery({ key, increment }))

    return sequence.id
  }

  async loadNextSequenceIdNumber(key: string, increment: number = 1): Promise<number> {
    const sequence = await this.nextSequenceIdDataLoader.load(new SequenceQuery({ key, increment }))

    return fromBigIntToNumber(sequence.id)
  }

  async getCurrentPtsId(key: bigint): Promise<number> {
    return this.loadCurrentSequenceIdNumber(
      [IdGenClient.PTS_UPDATES_NGEN_ID, key.toString()].join('_')
    )
  }

  async getNextPtsId(key: bigint): Promise<number> {
    return this.loadNextSequenceIdNumber(
      [IdGenClient.PTS_UPDATES_NGEN_ID, key.toString()].join('_')
    )
  }
}
