import { TLFutureSalt } from '@chats-system/core-rpc'

export class AuthCacheValue {
  #userId: bigint

  #layer: number

  #pushSessionId: bigint

  #client: string

  #langpack: string

  #permAuthKeyId: bigint

  #saltList: Array<TLFutureSalt>

  get userId(): bigint {
    return this.#userId
  }

  set userId(userId: bigint) {
    this.#userId = userId
  }

  get layer(): number {
    return this.#layer
  }

  set layer(layer: number) {
    this.#layer = layer
  }

  get pushSessionId(): bigint {
    return this.#pushSessionId
  }

  set pushSessionId(pushSessionId: bigint) {
    this.#pushSessionId = pushSessionId
  }

  get client(): string {
    return this.#client
  }

  set client(client: string) {
    this.#client = client
  }

  get langpack(): string {
    return this.#langpack
  }

  set langpack(langpack: string) {
    this.#langpack = langpack
  }

  get permAuthKeyId(): bigint {
    return this.#permAuthKeyId
  }

  set permAuthKeyId(permAuthKeyId: bigint) {
    this.#permAuthKeyId = permAuthKeyId
  }

  get saltList(): Array<TLFutureSalt> {
    return this.#saltList
  }

  set saltList(saltList: Array<TLFutureSalt>) {
    this.#saltList = saltList
  }
}
