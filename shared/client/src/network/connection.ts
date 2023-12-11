import { setTimeout }             from 'node:timers/promises'

import { MTProtoObfuscatedCodec } from '@monstrs/mtproto-codecs'

import { ClientNotReadyError }    from '../errors/index.js'
import { ClientFailedError }      from '../errors/index.js'
import { Client }                 from './client.js'

export class Connection {
  static MAX_RETRIES = 5

  private client?: Client

  private codec?: MTProtoObfuscatedCodec

  private address: string

  constructor(address: string) {
    this.address = address
  }

  async connect(): Promise<void> {
    if (!this.client) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < Connection.MAX_RETRIES; i++) {
        this.client = new Client()

        try {
          // eslint-disable-next-line no-await-in-loop
          await this.client.connect(this.address)

          break
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Connection failed:', error)

          this.client.destroy()
          this.client = undefined

          // eslint-disable-next-line no-await-in-loop
          await setTimeout(2000)
        }
      }

      if (!this.client) {
        throw new ClientFailedError()
      }

      this.codec = await MTProtoObfuscatedCodec.init()

      this.client.send(this.codec.header)
    }
  }

  close(): void {
    if (this.client) {
      this.client.destroy()
      this.client = undefined
      this.codec = undefined
    }
  }

  async send(data: Buffer): Promise<void> {
    if (!this.client || !this.codec) {
      throw new ClientNotReadyError()
    }

    await this.client.send(await this.codec.send(data))
  }

  async recv(): Promise<Buffer> {
    if (!this.client || !this.codec) {
      throw new ClientNotReadyError()
    }

    return this.codec.receive(await this.client.recv())
  }

  onData(listener: (data: Buffer) => Promise<void>): void {
    if (!this.client || !this.codec) {
      throw new ClientNotReadyError()
    }

    this.client.onData(async (data: Buffer) => {
      listener(await this.codec!.receive(data))
    })
  }

  onClose(listener: () => Promise<void>): void {
    if (!this.client || !this.codec) {
      throw new ClientNotReadyError()
    }

    this.client.onClose(listener)
  }
}
