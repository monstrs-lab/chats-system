import type { StorageData } from './abstract.storage.js'

import { readFile }         from 'node:fs/promises'
import { writeFile }        from 'node:fs/promises'
import { join }             from 'node:path'

import { AbstractStorage }  from './abstract.storage.js'

export class FileSystemStorage extends AbstractStorage {
  static #FILENAME = '.chats-system.storage.json'

  protected override async read(): Promise<StorageData | undefined> {
    try {
      return this.parse(await readFile(join(process.cwd(), FileSystemStorage.#FILENAME), 'utf-8'))
    } catch {
      return undefined
    }
  }

  protected override async write(metadata: StorageData): Promise<void> {
    await writeFile(join(process.cwd(), FileSystemStorage.#FILENAME), this.dump(metadata))
  }
}
