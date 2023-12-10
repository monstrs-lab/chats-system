import WebSocket                   from 'ws'

import { ClientDisconnectedError } from '../errors/index.js'

export class Client {
  private client?: WebSocket

  async connect(address: string): Promise<void> {
    this.client = new WebSocket(address)

    return new Promise((resolve, reject) => {
      this.client!.once('open', () => {
        resolve()
      })

      this.client!.once('error', (error) => {
        reject(error)
        this.client!.terminate()
      })
    })
  }

  destroy(): void {
    if (this.client) {
      this.client.removeAllListeners()
      this.client.close()
      this.client.terminate()
      this.client = undefined
    }
  }

  async recv(): Promise<Buffer> {
    if (this.client?.readyState !== WebSocket.OPEN) {
      throw new ClientDisconnectedError()
    }

    return new Promise((resolve) => {
      this.client!.once('message', (data: Buffer) => {
        resolve(data)
      })
    })
  }

  async send(data: Buffer): Promise<void> {
    if (this.client?.readyState !== WebSocket.OPEN) {
      throw new ClientDisconnectedError()
    }

    this.client.send(data)
  }

  onData(listener: (data: Buffer) => Promise<void>): void {
    this.client?.on('message', (data: Buffer) => {
      listener(data)
    })
  }

  onClose(listener: () => Promise<void>): void {
    this.client?.on('close', () => {
      listener()
    })
  }
}
