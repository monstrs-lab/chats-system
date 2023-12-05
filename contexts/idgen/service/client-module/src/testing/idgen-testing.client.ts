import { IdGenClient } from '../client/index.js'

export class IdGenTestingClient extends IdGenClient {
  protected readonly storage = new Map<string, number>()

  override async setCurrentSequenceId(key: string, id: bigint): Promise<boolean> {
    const { success } = await this.client.setCurrentSequenceId({
      key,
      id,
    })

    return success
  }

  override async getCurrentSequenceId(key: bigint): Promise<number> {
    return this.storage.get([IdGenClient.SEQ_UPDATES_NGEN_ID, key.toString()].join('_')) || 0
  }

  override async getCurrentPtsId(key: bigint): Promise<number> {
    return this.storage.get([IdGenClient.PTS_UPDATES_NGEN_ID, key.toString()].join('_')) || 0
  }

  override async getNextPtsId(k: bigint): Promise<number> {
    const key = [IdGenClient.PTS_UPDATES_NGEN_ID, k.toString()].join('_')

    this.storage.set(key, (this.storage.get(key) || 0) + 1)

    return this.storage.get(key)!
  }

  override async getNextMessageBoxId(k: bigint): Promise<number> {
    const key = [IdGenClient.MESSAGE_BOX_NGEN_ID, k.toString()].join('_')

    this.storage.set(key, (this.storage.get(key) || 0) + 1)

    return this.storage.get(key)!
  }
}
