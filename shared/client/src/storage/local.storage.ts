import { MTProtoAuthKey }  from '@monstrs/mtproto-core'

import { AbstractStorage } from './abstract.storage.js'

export class LocalStorage extends AbstractStorage {
  static KEY = 'auth_key'

  #authKey?: MTProtoAuthKey

  override async setAuthKey(authKey: MTProtoAuthKey): Promise<void> {
    this.#authKey = authKey

    localStorage.setItem(LocalStorage.KEY, authKey.key.toString('base64'))
  }

  override async getAuthKey(): Promise<MTProtoAuthKey | undefined> {
    if (!this.#authKey) {
      if (localStorage.getItem(LocalStorage.KEY)) {
        this.#authKey = new MTProtoAuthKey(
          Buffer.from(localStorage.getItem(LocalStorage.KEY)!, 'base64')
        )
      }
    }

    return this.#authKey
  }
}
