import { EntityRepository }                         from '@mikro-orm/core'
import { MikroORM }                                 from '@mikro-orm/core'
import { CreateRequestContext }                     from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'
import FlakeIdGen                                   from 'flake-idgen'

import { SeqIdEntity }                              from '../entities/index.js'

@Injectable()
export class SeqIdService {
  private readonly flakeIdGen: FlakeIdGen

  constructor(
    @InjectRepository(SeqIdEntity)
    private readonly seqIdRepository: EntityRepository<SeqIdEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {
    this.flakeIdGen = new FlakeIdGen()
  }

  @CreateRequestContext()
  async getCurrentSeqId(key: string): Promise<bigint> {
    const seqIdEntity = await this.seqIdRepository.findOne({ key })

    if (!seqIdEntity) {
      return 0n
    }

    return seqIdEntity.id
  }

  @CreateRequestContext()
  async setCurrentSeqId(key: string, id: bigint): Promise<void> {
    const seqIdEntity = (await this.seqIdRepository.findOne({ key })) || new SeqIdEntity()

    seqIdEntity.key = key
    seqIdEntity.id = id

    await this.em.persist(seqIdEntity).flush()
  }

  @CreateRequestContext()
  async getNextSeqId(key: string): Promise<bigint> {
    const seqIdEntity = await this.seqIdRepository.findOne({ key })

    if (!seqIdEntity) {
      await this.setCurrentSeqId(key, 1n)

      return 1n
    }

    seqIdEntity.id += 1n

    await this.em.persist(seqIdEntity).flush()

    return seqIdEntity.id
  }

  nextId(): bigint {
    return this.flakeIdGen.next().readBigInt64LE()
  }
}