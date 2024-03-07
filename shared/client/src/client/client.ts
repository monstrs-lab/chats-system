import type { MTProtoAuthKey }     from '@monstrs/mtproto-core'

import type { AbstractStorage }    from '../storage/index.js'

import { setTimeout }              from 'node:timers/promises'

import { HandshakeSender }         from '@chats-system/handshake'
import TL                          from '@chats-system/tl'

import { ClientDisconnectedError } from '../errors/index.js'
import { Connection }              from '../network/index.js'
import { Session }                 from '../session/index.js'
import { MemoryStorage }           from '../storage/index.js'

export class Client {
  static MAX_RETRIES = 5

  static INVOKE_TIMEOUT = 15_000

  static SLEEP_TRESHOLD = 10_000

  private session?: Session

  private updateHandlers: Set<(update: TL.TypeUpdate) => void> = new Set()

  constructor(
    private readonly address: string,
    private readonly storage: AbstractStorage = new MemoryStorage()
  ) {}

  async getAuthKey(): Promise<MTProtoAuthKey | undefined> {
    return this.storage.getAuthKey()
  }

  addUpdateHandler(callback: (update: TL.TypeUpdate) => void): void {
    this.updateHandlers.add(callback)
  }

  removeUpdateHandler(callback: (update: TL.TypeUpdate) => void): void {
    this.updateHandlers.delete(callback)
  }

  async start(): Promise<MTProtoAuthKey> {
    if (!(await this.storage.getAuthKey())) {
      await this.storage.setAuthKey(await this.handshake())
    }

    this.session = new Session(this.address, (await this.storage.getAuthKey())!, (
      update: TL.TypeUpdate
    ) => {
      this.handleUpdate(update)
    })

    await this.session.start()

    return (await this.storage.getAuthKey())!
  }

  async stop(): Promise<void> {
    if (this.session) {
      this.session.stop()
      this.session = undefined
    }
  }

  async invoke<T extends TL.TypesTLRequest>(
    query: T,
    retries: number = Client.MAX_RETRIES,
    timeout: number = Client.INVOKE_TIMEOUT,
    sleepTreshold: number = Client.SLEEP_TRESHOLD
  ): Promise<T['__response__']> {
    if (!this.session) {
      throw new ClientDisconnectedError()
    }

    const result = await this.session.invoke(query, retries, timeout, sleepTreshold)

    if (result instanceof TL.RpcResult) {
      return result.result as T['__response__']
    }

    throw new Error('Unknown invoke type')
  }

  protected handleUpdate(update: TL.TypeUpdate): void {
    this.updateHandlers.forEach((callback) => {
      callback(update)
    })
  }

  protected async handshake(): Promise<MTProtoAuthKey> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const connection = new Connection(this.address)

      try {
        // eslint-disable-next-line no-await-in-loop
        await connection.connect()

        // eslint-disable-next-line no-await-in-loop
        return await new HandshakeSender(connection).send()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Got error when auth:', error)

        // eslint-disable-next-line no-await-in-loop
        await setTimeout(1000)

        // eslint-disable-next-line no-continue
        continue
      } finally {
        connection.close()
      }
    }
  }
}
