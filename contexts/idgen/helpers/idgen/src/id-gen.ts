import { Logger } from '@monstrs/logger'

import { client } from '@chats-system/idgen-rpc-client'

export class IdGen {
  static PTS_UPDATES_NGEN_ID = 'pts_updates_ngen'

  static SEQ_UPDATES_NGEN_ID = 'seq_updates_ngen'

  #logger = new Logger(IdGen.name)

  async getCurrentSeqId(key: bigint): Promise<bigint | undefined> {
    return this.#getCurrentSeqId([IdGen.PTS_UPDATES_NGEN_ID, key.toString()].join('_'))
  }

  async getCurrentPtsId(key: bigint): Promise<bigint | undefined> {
    return this.#getCurrentSeqId([IdGen.PTS_UPDATES_NGEN_ID, key.toString()].join('_'))
  }

  async getNextPtsId(key: bigint): Promise<bigint | undefined> {
    return this.#getNextSeqId([IdGen.PTS_UPDATES_NGEN_ID, key.toString()].join('_'))
  }

  // @ts-expect-error
  async #getNextId(): Promise<bigint | undefined> {
    try {
      const response = await client.getNextId({})

      return response.nextId
    } catch (error) {
      if (error instanceof Error) {
        this.#logger.error(error)
      }

      return undefined
    }
  }

  async #getCurrentSeqId(key: string): Promise<bigint | undefined> {
    try {
      const response = await client.getCurrentSeqId({
        id: { key },
      })

      return response.seqId
    } catch (error) {
      if (error instanceof Error) {
        this.#logger.error(error)
      }

      return undefined
    }
  }

  // @ts-expect-error
  async #setCurrentSeqId(key: string, id: bigint): Promise<void> {
    try {
      await client.setCurrentSeqId({
        key,
        id,
      })
    } catch (error) {
      if (error instanceof Error) {
        this.#logger.error(error)
      }
    }
  }

  async #getNextSeqId(key: string): Promise<bigint | undefined> {
    try {
      const response = await client.getNextSeqId({
        key,
      })

      return response.seqId
    } catch (error) {
      if (error instanceof Error) {
        this.#logger.error(error)
      }

      return undefined
    }
  }
}
