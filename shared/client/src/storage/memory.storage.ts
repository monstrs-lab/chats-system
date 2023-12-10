import type { MTProtoAuthKey } from '@monstrs/mtproto-core'

import { AbstractStorage }     from './abstract.storage.js'

export class MemoryStorage extends AbstractStorage {
  #authKey?: MTProtoAuthKey

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  override async load(): Promise<void> {}

  override async setAuthKey(authKey: MTProtoAuthKey): Promise<void> {
    this.#authKey = authKey
  }

  override async getAuthKey(): Promise<MTProtoAuthKey | undefined> {
    return this.#authKey
  }
}
