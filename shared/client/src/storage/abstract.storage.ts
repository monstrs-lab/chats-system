import { Buffer }         from 'node:buffer'

import { MTProtoAuthKey } from '@monstrs/mtproto-core'

export interface StorageData {
  authKey: MTProtoAuthKey
}

export abstract class AbstractStorage {
  #data: StorageData | undefined

  async load(): Promise<void> {
    if (!this.#data) {
      this.#data = await this.read()
    }
  }

  async save(): Promise<void> {
    if (this.#data) {
      this.write(this.#data)
    }
  }

  async getAuthKey(): Promise<MTProtoAuthKey | undefined> {
    if (!this.#data) {
      await this.load()
    }

    return this.#data?.authKey
  }

  async setAuthKey(authKey: MTProtoAuthKey): Promise<void> {
    if (!this.#data) {
      this.#data = {
        authKey,
      }
    } else {
      this.#data.authKey = authKey
    }

    await this.write
  }

  protected parse(content: string): StorageData | undefined {
    try {
      const data = JSON.parse(content)

      if (data.authKey) {
        return {
          authKey: new MTProtoAuthKey(Buffer.from(data.authKey as string)),
        }
      }

      return undefined
    } catch {
      return undefined
    }
  }

  protected dump(data: StorageData): string {
    return JSON.stringify({
      authKey: data.authKey.key.toString('hex'),
    })
  }

  protected abstract read(): Promise<StorageData | undefined>

  protected abstract write(data: StorageData): Promise<void>
}
