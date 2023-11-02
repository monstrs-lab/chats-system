/* eslint-disable no-param-reassign */

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'
// @ts-expect-error
import { random }                                   from 'random-bigint'

import { ClientSession }                            from '@chats-system/auth-rpc'
import { PREDICATE_CLIENT_SESSION }                 from '@chats-system/auth-rpc'

import { AuthData }                                 from '../data/index.js'
import { AuthUserEntity }                           from '../entities/index.js'
import { DeviceEntity }                             from '../entities/index.js'
import { AuthEntity }                               from '../entities/index.js'

@Injectable()
export class AuthsService {
  constructor(
    @InjectRepository(AuthUserEntity)
    private readonly authUserRepository: EntityRepository<AuthUserEntity>,
    @InjectRepository(AuthEntity)
    private readonly authRepository: EntityRepository<AuthEntity>,
    @InjectRepository(DeviceEntity)
    private readonly deviceRepository: EntityRepository<DeviceEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager
  ) {}

  async getAuthData(authKeyId: bigint): Promise<AuthData | undefined> {
    const [auth, authUser] = await Promise.all([
      this.authRepository.findOne({ authKeyId }),
      this.authUserRepository.findOne({ authKeyId }),
    ])

    if (auth) {
      const clientSession = new ClientSession()

      clientSession.predicateName = PREDICATE_CLIENT_SESSION
      clientSession.authKeyId = authKeyId
      clientSession.ip = auth.clientIp
      clientSession.layer = auth.layer
      clientSession.apiId = auth.apiId
      clientSession.deviceModel = auth.deviceModel
      clientSession.systemVersion = auth.systemVersion
      clientSession.appVersion = auth.appVersion
      clientSession.systemLangCode = auth.systemLangCode
      clientSession.langPack = auth.langPack
      clientSession.langCode = auth.langCode
      clientSession.proxy = auth.proxy
      clientSession.params = JSON.stringify(auth.params)

      return new AuthData(
        clientSession,
        authUser
          ? {
              userId: authUser.userId,
              hash: authUser.hash,
              dateCreated: authUser.dateCreated,
              dateActivated: authUser.dateActivated,
            }
          : undefined
      )
    }

    return undefined
  }

  async getApiLayer(authKeyId: bigint): Promise<number> {
    const authData = await this.getAuthData(authKeyId)

    if (!authData) {
      return 0
    }

    return authData.layer
  }

  async getLangCode(authKeyId: bigint): Promise<string> {
    const authData = await this.getAuthData(authKeyId)

    if (!authData) {
      return 'en'
    }

    return authData.langCode
  }

  async getLangPack(authKeyId: bigint): Promise<string> {
    const authData = await this.getAuthData(authKeyId)

    if (!authData) {
      return ''
    }

    return authData.langPack
  }

  async getClient(authKeyId: bigint): Promise<string> {
    const authData = await this.getAuthData(authKeyId)

    if (authData) {
      if (authData.langPack === 'android') {
        if (authData.appVersion.includes('TDLib')) {
          return 'react'
        }
      } else if (authData.langPack === '') {
        if (authData.appVersion.endsWith(' Z')) {
          return 'webz'
        }
      }
    }

    return ''
  }

  async getAuthKeyUserId(authKeyId: bigint): Promise<bigint> {
    const authData = await this.getAuthData(authKeyId)

    if (!authData) {
      return BigInt(0)
    }

    return authData.userId
  }

  async getPushSessionId(authKeyId: bigint, userId: bigint, tokenType: number): Promise<bigint> {
    const deviceEntity = await this.deviceRepository.findOne({
      authKeyId,
      userId,
      tokenType,
    })

    if (!deviceEntity) {
      return BigInt(0)
    }

    const sessionId = parseInt(deviceEntity.token, 10)

    if (Number.isNaN(sessionId)) {
      return BigInt(0)
    }

    return BigInt(sessionId)
  }

  async bindAuthKeyUser(authKeyId: bigint, userId: bigint): Promise<bigint> {
    const now = Date.now()

    const authUserEntity = new AuthUserEntity()

    authUserEntity.authKeyId = authKeyId
    authUserEntity.userId = userId
    authUserEntity.dateCreated = BigInt(now)
    authUserEntity.dateActivated = BigInt(now)
    // eslint-disable-next-line
    authUserEntity.hash = random(63)

    try {
      this.em.persist(authUserEntity)

      await this.em.flush()

      return authUserEntity.hash
    } catch {
      return BigInt(0)
    }
  }

  async unbindAuthKeyUser(authKeyId: bigint, userId: bigint): Promise<boolean> {
    try {
      const authUserEntities =
        authKeyId === BigInt(0)
          ? await this.authUserRepository.find({
              userId,
              deleted: false,
            })
          : await this.authUserRepository.find({
              authKeyId,
              userId,
            })

      authUserEntities.forEach((authUserEntity) => {
        authUserEntity.deleted = true
        authUserEntity.dateActivated = BigInt(0)

        this.em.persist(authUserEntity)
      })

      await this.em.flush()

      return true
    } catch {
      return false
    }
  }

  async setClientSessionInfo(clientSession: ClientSession): Promise<boolean> {
    try {
      const authEntity = new AuthEntity()

      authEntity.authKeyId = clientSession.authKeyId!
      authEntity.layer = clientSession.layer!
      authEntity.apiId = clientSession.apiId!
      authEntity.deviceModel = clientSession.deviceModel!
      authEntity.systemVersion = clientSession.systemVersion!
      authEntity.appVersion = clientSession.appVersion!
      authEntity.systemLangCode = clientSession.systemLangCode!
      authEntity.langPack = clientSession.langPack!
      authEntity.langCode = clientSession.langCode!
      authEntity.clientIp = clientSession.ip!
      authEntity.proxy = clientSession.proxy!
      authEntity.params = JSON.parse(clientSession.params! || '')
      authEntity.dateActivated = BigInt(Date.now())

      await this.em.persist(authEntity).flush()

      return true
    } catch {
      return false
    }
  }

  // TODO: SetLayer
  // TODO: SetInitConnection
}
