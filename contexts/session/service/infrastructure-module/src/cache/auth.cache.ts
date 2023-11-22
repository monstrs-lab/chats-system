import type TL                     from '@chats-system/tl'

import { Logger }                  from '@monstrs/logger'
import { LRUCache }                from 'lru-cache'

import { GetUserIdRequest }        from '@chats-system/auth-session-rpc-client'
import { GetPermAuthKeyIdRequest } from '@chats-system/auth-session-rpc-client'
import { GetLangPackRequest }      from '@chats-system/auth-session-rpc-client'
import { GetClientRequest }        from '@chats-system/auth-session-rpc-client'
import { GetLayerRequest }         from '@chats-system/auth-session-rpc-client'
import { client }                  from '@chats-system/auth-session-rpc-client'

import { AuthCacheValue }          from './auth-cache.value.js'

export class AuthCache {
  #logger = new Logger(AuthCache.name)

  #cache: LRUCache<string, AuthCacheValue>

  constructor() {
    this.#cache = new LRUCache({
      ttl: 1024 * 1024 * 1024,
      ttlAutopurge: true,
    })
  }

  getValue(authKeyId: bigint): AuthCacheValue {
    const key = authKeyId.toString()

    if (!this.#cache.has(key)) {
      const cv = new AuthCacheValue()

      this.#cache.set(key, cv)

      return cv
    }

    return this.#cache.get(key)!
  }

  async getUserID(authKeyId: bigint): Promise<bigint> {
    const cv = this.getValue(authKeyId)

    if (!cv.userId) {
      try {
        const response = await client.getUserId(
          new GetUserIdRequest({
            authKeyId,
          })
        )

        cv.userId = response.userId
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }

        return BigInt(0)
      }
    }

    return cv.userId
  }

  async getApiLayer(authKeyId: bigint): Promise<number> {
    const cv = this.getValue(authKeyId)

    if (!cv.layer) {
      try {
        const response = await client.getLayer(
          new GetLayerRequest({
            authKeyId,
          })
        )

        cv.layer = response.layer
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }

        return 0
      }
    }

    return cv.layer
  }

  async getClient(authKeyId: bigint): Promise<string> {
    const cv = this.getValue(authKeyId)

    if (!cv.client) {
      try {
        const response = await client.getClient(
          new GetClientRequest({
            authKeyId,
          })
        )

        cv.client = response.client
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }

        return ''
      }
    }

    return cv.client
  }

  async getLangPack(authKeyId: bigint): Promise<string> {
    const cv = this.getValue(authKeyId)

    if (!cv.langpack) {
      try {
        const response = await client.getLangPack(
          new GetLangPackRequest({
            authKeyId,
          })
        )

        cv.langpack = response.langPack
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }

        return ''
      }
    }

    return cv.langpack
  }

  async getPermAuthKeyId(authKeyId: bigint): Promise<bigint> {
    const cv = this.getValue(authKeyId)

    if (!cv.permAuthKeyId) {
      try {
        const response = await client.getPermAuthKeyId(
          new GetPermAuthKeyIdRequest({
            authKeyId,
          })
        )

        cv.permAuthKeyId = response.permAuthKeyId
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }

        return BigInt(0)
      }
    }

    return cv.permAuthKeyId
  }

  putApiLayer(authKeyId: bigint, layer: number): void {
    this.getValue(authKeyId).layer = layer
  }

  putClient(authKeyId: bigint, c: string): void {
    this.getValue(authKeyId).client = c
  }

  putLangPack(authKeyId: bigint, langpack: string): void {
    this.getValue(authKeyId).langpack = langpack
  }

  putUserId(authKeyId: bigint, userId: bigint): void {
    this.getValue(authKeyId).userId = userId
  }

  putPermAuthKeyId(authKeyId: bigint, kId: bigint): void {
    this.getValue(authKeyId).permAuthKeyId = kId
  }

  async putLayer(authKeyId: bigint, layer: number, ip: string): Promise<void> {
    await client.setLayer({
      authKeyId,
      layer,
      ip,
    })
  }

  async putInitConnection(
    authKeyId: bigint,
    ip: string,
    message: TL.InitConnection
  ): Promise<void> {
    await client.setInitConnection({
      authKeyId,
      ip,
      apiId: message.apiId,
      deviceModel: message.deviceModel,
      systemVersion: message.systemVersion,
      appVersion: message.appVersion,
      systemLangCode: message.systemLangCode,
      langPack: message.langPack,
      langCode: message.langCode,
    })
  }
}
