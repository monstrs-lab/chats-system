import type { MTProtoAuthKey }     from '@monstrs/mtproto-core'
import type TL                     from '@chats-system/tl'

import type { AbstractStorage }    from '../storage/index.js'

import { setTimeout }              from 'node:timers/promises'

import { HandshakeSender }         from '@chats-system/handshake'

import { ClientDisconnectedError } from '../errors/index.js'
import { Connection }              from '../network/index.js'
import { Session }                 from '../session/index.js'
import { MemoryStorage }           from '../storage/index.js'

export class Client {
  static MAX_RETRIES = 5

  static INVOKE_TIMEOUT = 15_000

  static SLEEP_TRESHOLD = 10_000

  private storage: AbstractStorage

  private address: string

  private session?: Session

  constructor(address: string) {
    this.storage = new MemoryStorage()
    this.address = address
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

    return this.session.invoke(query, retries, timeout, sleepTreshold)
  }

  async start(): Promise<void> {
    if (!(await this.storage.getAuthKey())) {
      await this.storage.setAuthKey(await this.auth())
    }

    this.session = new Session(this.address, (await this.storage.getAuthKey())!)

    await this.session.start()
  }

  async stop(): Promise<void> {
    if (this.session) {
      this.session.stop()
      this.session = undefined
    }
  }

  protected async auth(): Promise<MTProtoAuthKey> {
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