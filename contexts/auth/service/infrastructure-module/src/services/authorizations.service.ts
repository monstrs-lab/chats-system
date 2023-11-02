import type { AuthData }           from '../data/index.js'

import { EntityRepository }        from '@mikro-orm/core'
import { InjectRepository }        from '@mikro-orm/nestjs'
import { Injectable }              from '@nestjs/common'

import { Authorization }           from '@chats-system/core-rpc'
import { PREDICATE_AUTH_KEY_INFO } from '@chats-system/core-rpc'

import { AuthUserEntity }          from '../entities/index.js'
import { AuthsService }            from './auths.service.js'

@Injectable()
export class AuthorizationsService {
  constructor(
    @InjectRepository(AuthUserEntity)
    private readonly authUserRepository: EntityRepository<AuthUserEntity>,
    private readonly authsService: AuthsService
  ) {}

  async buildAuthorization(authData: AuthData): Promise<Authorization> {
    const autorization = new Authorization()

    // TODO: getCountryAndRegionByIp(cData.ClientIp())

    autorization.predicateName = PREDICATE_AUTH_KEY_INFO
    autorization.current = false
    autorization.officialApp = true
    autorization.hash = BigInt(0)
    autorization.passwordPending = false
    autorization.deviceModel = authData.deviceModel
    autorization.platform = ''
    autorization.systemVersion = authData.systemVersion
    autorization.apiId = authData.apiId
    autorization.appName = authData.langPack
    autorization.appVersion = authData.appVersion
    autorization.dateCreated = 0
    autorization.dateActive = 0
    autorization.ip = authData.clientIp
    autorization.country = 'UNKNOWN'
    autorization.region = ''

    return autorization
  }

  async getAuthorization(authKeyId: bigint): Promise<Authorization | undefined> {
    const authData = await this.authsService.getAuthData(authKeyId)

    if (!authData) {
      return undefined
    }

    return this.buildAuthorization(authData)
  }

  async getAuthorizations(userId: bigint, excludeAuthKeyId: bigint): Promise<Array<Authorization>> {
    const authUserEntities = await this.authUserRepository.find({
      userId,
      deleted: false,
    })

    const authDatas = await Promise.all(
      authUserEntities.map(async (authUserEntity) =>
        this.authsService.getAuthData(authUserEntity.authKeyId))
    )

    // TODO: sort
    return Promise.all(
      authDatas.filter(Boolean).map(async (authData) => {
        const authroization = await this.buildAuthorization(authData!)

        if (authData?.authKeyId === excludeAuthKeyId) {
          authroization.current = true
          authroization.hash = BigInt(0)
        }

        return authroization
      })
    )
  }

  // TODO
  // async resetAuthorization(userId: bigint, authKeyId: bigint, hash: bigint): Promise<Array<BigInt>> {
  //  return []
  // }
}
