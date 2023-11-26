/* eslint-disable no-param-reassign */

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { MikroORM }                                 from '@mikro-orm/core'
import { CreateRequestContext }                     from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'
import random                                   from 'crypto-random-bigint'

import { ClientSession }                            from '@chats-system/auth-session-rpc'

import { AuthData }                                 from '../data/index.js'
import { AuthUserEntity }                           from '../entities/index.js'
import { AuthEntity }                               from '../entities/index.js'

@Injectable()
export class AuthsService {
  constructor(
    @InjectRepository(AuthUserEntity)
    private readonly authUserRepository: EntityRepository<AuthUserEntity>,
    @InjectRepository(AuthEntity)
    private readonly authRepository: EntityRepository<AuthEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @CreateRequestContext()
  async getAuthData(authKeyId: bigint): Promise<AuthData | undefined> {
    const [auth, authUser] = await Promise.all([
      this.authRepository.findOne({ authKeyId }),
      this.authUserRepository.findOne({ authKeyId }),
    ])

    if (auth) {
      const clientSession = new ClientSession()

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
              dateActive: authUser.dateActive,
            }
          : undefined
      )
    }

    return undefined
  }

  @CreateRequestContext()
  async bindAuthKeyUser(authKeyId: bigint, userId: bigint): Promise<bigint> {
    const authUserEntity = new AuthUserEntity()

    authUserEntity.authKeyId = authKeyId
    authUserEntity.userId = userId
    authUserEntity.dateCreated = new Date()
    authUserEntity.dateActive = new Date()
    authUserEntity.hash = random(63)

    try {
      this.em.persist(authUserEntity)

      await this.em.flush()

      return authUserEntity.hash
    } catch {
      return BigInt(0)
    }
  }

  @CreateRequestContext()
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

        this.em.persist(authUserEntity)
      })

      await this.em.flush()

      return true
    } catch {
      return false
    }
  }

  @CreateRequestContext()
  async setClientSessionInfo(
    authKeyId: bigint,
    layer: number,
    apiId: number,
    deviceModel: string,
    systemVersion: string,
    appVersion: string,
    systemLangCode: string,
    langPack: string,
    langCode: string,
    clientIp: string,
    proxy?: string,
    params?: string
  ): Promise<void> {
    const authEntity = (await this.authRepository.findOne({ authKeyId })) || new AuthEntity()

    authEntity.authKeyId = authKeyId
    authEntity.layer = layer
    authEntity.apiId = apiId
    authEntity.deviceModel = deviceModel
    authEntity.systemVersion = systemVersion
    authEntity.appVersion = appVersion
    authEntity.systemLangCode = systemLangCode
    authEntity.langPack = langPack
    authEntity.langCode = langCode
    authEntity.clientIp = clientIp
    authEntity.proxy = proxy || ''
    authEntity.params = JSON.parse(params! || '')
    authEntity.dateActive = new Date()

    await this.em.persist(authEntity).flush()
  }

  @CreateRequestContext()
  async setLayer(authKeyId: bigint, layer: number, clientIp: string): Promise<void> {
    const authEntity = (await this.authRepository.findOne({ authKeyId })) || new AuthEntity()

    authEntity.authKeyId = authKeyId
    authEntity.layer = layer
    authEntity.clientIp = clientIp
    authEntity.dateActive = new Date()

    await this.em.persist(authEntity).flush()
  }

  @CreateRequestContext()
  async setInitConnection(
    authKeyId: bigint,
    apiId: number,
    deviceModel: string,
    systemVersion: string,
    appVersion: string,
    systemLangCode: string,
    langPack: string,
    langCode: string,
    clientIp: string
  ): Promise<void> {
    const authEntity = (await this.authRepository.findOne({ authKeyId })) || new AuthEntity()

    authEntity.authKeyId = authKeyId
    authEntity.apiId = apiId
    authEntity.deviceModel = deviceModel
    authEntity.systemVersion = systemVersion
    authEntity.appVersion = appVersion
    authEntity.systemLangCode = systemLangCode
    authEntity.langPack = langPack
    authEntity.langCode = langCode
    authEntity.clientIp = clientIp
    authEntity.dateActive = new Date()

    await this.em.persist(authEntity).flush()
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
}
