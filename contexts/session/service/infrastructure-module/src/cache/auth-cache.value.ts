export class AuthCacheValue {
  #userId?: bigint

  #layer?: number

  #client?: string

  #langpack?: string

  #permAuthKeyId?: bigint

  get userId(): bigint | undefined {
    return this.#userId
  }

  set userId(userId: bigint) {
    this.#userId = userId
  }

  get layer(): number | undefined {
    return this.#layer
  }

  set layer(layer: number) {
    this.#layer = layer
  }

  get client(): string | undefined {
    return this.#client
  }

  set client(client: string) {
    this.#client = client
  }

  get langpack(): string | undefined {
    return this.#langpack
  }

  set langpack(langpack: string) {
    this.#langpack = langpack
  }

  get permAuthKeyId(): bigint | undefined {
    return this.#permAuthKeyId
  }

  set permAuthKeyId(permAuthKeyId: bigint) {
    this.#permAuthKeyId = permAuthKeyId
  }
}
