import { EntityRepository, EntityManager }                         from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { Injectable }                               from '@nestjs/common'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Inject }                                   from '@nestjs/common'

import { randomBytes } from 'node:crypto'

import { SentCodeEntity }                               from '../entities/index.js'
import { SendCodeType, SentCodeState } from '../enums/index.js'

@Injectable()
export class SentCodeRepository {
  constructor(
    @InjectRepository(SentCodeEntity)
    private readonly sentCodeRepository: EntityRepository<SentCodeEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
  ) {}

  async create(authKeyId: bigint,
    sessionId: bigint,
    phoneNumber: string,
    phoneNumberRegistered: boolean,
    sendCodeType: SendCodeType,
    nextCodeType: SendCodeType,
  ): Promise<SentCodeEntity> {
    const sentCodeEntity = new SentCodeEntity()

    sentCodeEntity.authKeyId = authKeyId
    sentCodeEntity.sessionId = sessionId
    sentCodeEntity.phoneNumber = phoneNumber
    sentCodeEntity.phoneNumberRegistered = phoneNumberRegistered
		sentCodeEntity.phoneCode =             '12345'
		sentCodeEntity.phoneCodeHash =         randomBytes(16).toString("hex")
    sentCodeEntity.phoneCodeExpired = Math.floor(Date.now() / 1000) + 3 * 60
		sentCodeEntity.sentCodeType =          sendCodeType
		sentCodeEntity.flashCallPattern =      "*"
		sentCodeEntity.nextCodeType =          nextCodeType
		sentCodeEntity.state =                 SentCodeState.SEND

    await this.em.persist(sentCodeEntity).flush()

    return sentCodeEntity
  }

  async getByPhoneCodeHash(phoneCodeHash:string): Promise<SentCodeEntity | undefined> {
    const sentCodeEntity = await this.sentCodeRepository.findOne({ phoneCodeHash })

    return sentCodeEntity || undefined
  }

  async removeById(id: bigint): Promise<void> {
    const sentCodeEntity = await this.sentCodeRepository.findOne(id)

    if (sentCodeEntity) {
      this.em.remove(sentCodeEntity).flush()
    }
  }
}
