import type { Redis }   from '@monstrs/nestjs-redis'

import { RedisFactory } from '@monstrs/nestjs-redis'
import { Injectable }   from '@nestjs/common'

@Injectable()
export class SequenceIdService {
  protected redis: Redis

  constructor(private readonly redisFactory: RedisFactory) {
    this.redis = this.redisFactory.create()
  }

  async getCurrentSequenceId(key: string): Promise<bigint> {
    const sequenceId = await this.redis.get(key)

    if (!sequenceId) {
      return 0n
    }

    return BigInt(sequenceId)
  }

  async setCurrentSequenceId(key: string, id: bigint): Promise<void> {
    await this.redis.set(key, id.toString())
  }

  async getNextSequenceId(key: string, increment: number = 1): Promise<bigint> {
    const sequenceId = await this.redis.incrby(key, increment)

    return BigInt(sequenceId)
  }
}
