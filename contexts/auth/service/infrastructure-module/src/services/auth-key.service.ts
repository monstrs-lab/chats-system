import { EntityRepository }                         from '@mikro-orm/core'
import { MikroORM }                                 from '@mikro-orm/core'
import { CreateRequestContext }                     from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'

import { AuthKeyInfo }                              from '@chats-system/core-rpc'
import { PREDICATE_AUTH_KEY_INFO }                  from '@chats-system/core-rpc'
import { AUTH_KEY_TYPE_PERM }                       from '@chats-system/core-rpc'
import { AUTH_KEY_TYPE_TEMP }                       from '@chats-system/core-rpc'
import { AUTH_KEY_TYPE_MEDIA_TEMP }                 from '@chats-system/core-rpc'

import { AuthKeyEntity }                            from '../entities/index.js'
import { AuthKeyInfoEntity }                        from '../entities/index.js'

@Injectable()
export class AuthKeyService {
  constructor(
    @InjectRepository(AuthKeyEntity)
    private readonly authKeyRepository: EntityRepository<AuthKeyEntity>,
    @InjectRepository(AuthKeyInfoEntity)
    private readonly authKeyInfoRepository: EntityRepository<AuthKeyInfoEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @CreateRequestContext()
  async setAuthKey(tlAuthKeyInfo: AuthKeyInfo): Promise<void> {
    const authKeyEntity = new AuthKeyEntity()

    authKeyEntity.authKeyId = tlAuthKeyInfo.authKeyId!
    authKeyEntity.body = Buffer.from(tlAuthKeyInfo.authKey!).toString('base64')

    const authKeyInfoEntity = new AuthKeyInfoEntity()

    authKeyInfoEntity.authKeyId = tlAuthKeyInfo.authKeyId!
    authKeyInfoEntity.authKeyType = tlAuthKeyInfo.authKeyType!
    authKeyInfoEntity.permAuthKeyId = tlAuthKeyInfo.permAuthKeyId!
    authKeyInfoEntity.tempAuthKeyId = tlAuthKeyInfo.tempAuthKeyId!
    authKeyInfoEntity.mediaTempAuthKeyId = tlAuthKeyInfo.mediaTempAuthKeyId!
    authKeyInfoEntity.deleted = false

    this.em.persist(authKeyEntity)
    this.em.persist(authKeyInfoEntity)

    await this.em.flush()
  }

  @CreateRequestContext()
  async getAuthKey(authKeyId: bigint): Promise<AuthKeyInfo | undefined> {
    const [authKeyEntity, authKeyInfoEntity] = await Promise.all([
      this.authKeyRepository.findOne({
        authKeyId,
      }),
      this.authKeyInfoRepository.findOne({
        authKeyId,
      }),
    ])

    if (authKeyEntity && authKeyInfoEntity) {
      const authKeyInfo = new AuthKeyInfo()

      authKeyInfo.predicateName = PREDICATE_AUTH_KEY_INFO
      authKeyInfo.authKeyId = authKeyId
      authKeyInfo.authKeyType = 0
      authKeyInfo.permAuthKeyId = BigInt(0)
      authKeyInfo.tempAuthKeyId = BigInt(0)
      authKeyInfo.mediaTempAuthKeyId = BigInt(0)

      authKeyInfo.authKeyType = authKeyInfoEntity.authKeyType
      authKeyInfo.permAuthKeyId = authKeyInfoEntity.permAuthKeyId
      authKeyInfo.tempAuthKeyId = authKeyInfoEntity.tempAuthKeyId
      authKeyInfo.mediaTempAuthKeyId = authKeyInfoEntity.mediaTempAuthKeyId

      authKeyInfo.authKey = Buffer.from(authKeyEntity.body, 'base64')

      return authKeyInfo
    }

    return undefined
  }

  async getPermAuthKeyId(authKeyId: bigint): Promise<bigint> {
    const authKey = await this.getAuthKey(authKeyId)

    return authKey ? authKey.permAuthKeyId! : BigInt(0)
  }

  async unsafeBindKeyId(
    authKeyId: bigint,
    bindType:
      | typeof AUTH_KEY_TYPE_MEDIA_TEMP
      | typeof AUTH_KEY_TYPE_PERM
      | typeof AUTH_KEY_TYPE_TEMP,
    bindKeyId: bigint
  ): Promise<void> {
    if (bindType === AUTH_KEY_TYPE_PERM) {
      await this.em
        .createQueryBuilder(AuthKeyInfoEntity)
        .update({ permAuthKeyId: bindKeyId })
        .where({ authKeyId })
        .execute()
    } else if (bindType === AUTH_KEY_TYPE_TEMP) {
      await this.em
        .createQueryBuilder(AuthKeyInfoEntity)
        .update({ tempAuthKeyId: bindKeyId })
        .where({ authKeyId })
        .execute()
    } else if (bindType === AUTH_KEY_TYPE_MEDIA_TEMP) {
      await this.em
        .createQueryBuilder(AuthKeyInfoEntity)
        .update({ mediaTempAuthKeyId: bindKeyId })
        .where({ authKeyId })
        .execute()
    }
  }
}
