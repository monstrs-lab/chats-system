import type { ClientSession } from '@chats-system/auth-session-rpc'

export interface BindUser {
  userId: bigint
  hash: bigint
  dateCreated: bigint
  dateActivated: bigint
}

export class AuthData {
  #client: ClientSession

  #bindUser?: BindUser

  constructor(client: ClientSession, bindUser?: BindUser) {
    this.#client = client
    this.#bindUser = bindUser
  }

  get authKeyId(): bigint {
    return this.#client.authKeyId
  }

  get layer(): number {
    return this.#client.layer
  }

  get apiId(): number {
    return this.#client.apiId
  }

  get deviceModel(): string {
    return this.#client.deviceModel
  }

  get systemVersion(): string {
    return this.#client.systemVersion
  }

  get appVersion(): string {
    return this.#client.appVersion
  }

  get systemLangCode(): string {
    return this.#client.systemLangCode
  }

  get langPack(): string {
    return this.#client.langPack
  }

  get langCode(): string {
    return this.#client.langCode
  }

  get clientIp(): string {
    return this.#client.ip
  }

  get proxy(): string {
    return this.#client.proxy!
  }

  get params(): string {
    return this.#client.params!
  }

  get userId(): bigint {
    if (!this.#bindUser) {
      return BigInt(0)
    }
    return this.#bindUser.userId
  }

  get dateCreated(): bigint {
    if (!this.#bindUser) {
      return BigInt(0)
    }
    return this.#bindUser.dateCreated
  }

  get dateActivated(): bigint {
    if (!this.#bindUser) {
      return BigInt(0)
    }
    return this.#bindUser.dateActivated
  }

  get hash(): bigint {
    if (!this.#bindUser) {
      return BigInt(0)
    }
    return this.#bindUser.hash
  }
}
