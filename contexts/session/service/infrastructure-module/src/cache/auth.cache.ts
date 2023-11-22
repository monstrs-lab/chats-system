import type TL                           from '@chats-system/tl'

import { Logger }                        from '@monstrs/logger'
import { LRUCache }                      from 'lru-cache'

import { TLAuthsessionGetUserId }        from '@chats-system/auth-rpc-client'
import { TLAuthsessionGetPermAuthKeyId } from '@chats-system/auth-rpc-client'
import { TLAuthsessionGetLangPack }      from '@chats-system/auth-rpc-client'
import { TLAuthsessionGetClient }        from '@chats-system/auth-rpc-client'
import { TLAuthsessionGetLayer }         from '@chats-system/auth-rpc-client'
import { client }                        from '@chats-system/auth-rpc-client'

import { AuthCacheValue }                from './auth-cache.value.js'

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
        const userId = await client.getUserId(
          new TLAuthsessionGetUserId({
            authKeyId,
          })
        )

        cv.userId = userId.v!
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
        const layer = await client.getLayer(
          new TLAuthsessionGetLayer({
            authKeyId,
          })
        )

        cv.layer = layer.v!
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
        const c = await client.getClient(
          new TLAuthsessionGetClient({
            authKeyId,
          })
        )

        cv.client = c.v!
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
        const langpack = await client.getLangPack(
          new TLAuthsessionGetLangPack({
            authKeyId,
          })
        )

        cv.langpack = langpack.v!
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
        const permAuthKeyId = await client.getPermAuthKeyId(
          new TLAuthsessionGetPermAuthKeyId({
            authKeyId,
          })
        )

        cv.permAuthKeyId = permAuthKeyId.v!
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
