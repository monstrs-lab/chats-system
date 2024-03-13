import type { StorageData } from './abstract.storage.js'

import { AbstractStorage }  from './abstract.storage.js'

export class MemoryStorage extends AbstractStorage {
  #metadata: StorageData | undefined

  protected override async read(): Promise<StorageData | undefined> {
    return this.#metadata
  }

  protected override async write(metadata: StorageData): Promise<void> {
    this.#metadata = metadata
  }
}
