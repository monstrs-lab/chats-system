import type { IMessageEvent }           from 'websocket'

import { EventEmitter }                 from 'node:events'

import { w3cwebsocket as W3CWebSocket } from 'websocket'

import { ClientDisconnectedError }      from '../errors/index.js'

export class Client extends EventEmitter {
  private client?: W3CWebSocket

  async connect(address: string): Promise<void> {
    this.client = new W3CWebSocket(address)
    this.client.binaryType = 'arraybuffer'

    return new Promise((resolve, reject) => {
      this.client!.onopen = (): void => {
        this.client!.onmessage = (message: IMessageEvent): void => {
          this.emit('message', Buffer.from(message.data as SharedArrayBuffer))
        }

        this.client!.onclose = (): void => {
          this.emit('close')
        }

        resolve()
      }

      this.client!.onerror = (error): void => {
        reject(error)

        this.client = undefined
      }
    })
  }

  destroy(): void {
    if (this.client) {
      this.removeAllListeners()
      this.client.close()
      this.client = undefined
    }
  }

  async recv(): Promise<Buffer> {
    if (this.client?.readyState !== W3CWebSocket.OPEN) {
      throw new ClientDisconnectedError()
    }

    return new Promise((resolve) => {
      this.on('message', (data: Buffer) => {
        resolve(data)
      })
    })
  }

  async send(data: Buffer): Promise<void> {
    if (this.client?.readyState !== W3CWebSocket.OPEN) {
      throw new ClientDisconnectedError()
    }

    this.client.send(data)
  }

  onData(listener: (data: Buffer) => Promise<void>): void {
    this.on('message', (data: Buffer) => {
      listener(data)
    })
  }

  onClose(listener: () => Promise<void>): void {
    this.on('close', () => {
      listener()
    })
  }
}
