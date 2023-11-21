import type { SessionData }   from '../data/index.js'

import { setTimeout }         from 'node:timers/promises'

import { Logger }             from '@monstrs/logger'
import { Injectable }         from '@nestjs/common'
import { fromBigIntToBuffer } from '@monstrs/buffer-utils'

import { client }             from '@chats-system/gateway-rpc-client'

export interface SessionResponseMessage {
  messageId: bigint
  seqNo: number
  messageLength: number
  message: Buffer
}

export interface SessionResponseTask {
  sessionData: SessionData
  message: SessionResponseMessage
}

@Injectable()
export class SessionResponseQueue {
  #logger = new Logger(SessionResponseQueue.name)

  #running: boolean = false

  #tasks: Array<SessionResponseTask> = []

  constructor() {
    this.start()
  }

  push(sessionData: SessionData, message: SessionResponseMessage): void {
    this.#tasks.push({
      sessionData,
      message,
    })
  }

  protected start(): void {
    this.#running = true
    this.runLoop()
  }

  protected stop(): void {
    this.#running = false
  }

  protected async runLoop(): Promise<void> {
    while (this.#running) {
      // eslint-disable-next-line no-await-in-loop
      await this.process()
    }
  }

  protected async process(): Promise<void> {
    const task = this.#tasks.shift()

    if (task) {
      try {
        const salt = 0n

        const seqNo = Buffer.alloc(4)
        const messageLength = Buffer.alloc(4)

        seqNo.writeInt32LE(task.message.seqNo, 0)
        messageLength.writeInt32LE(task.message.messageLength, 0)

        const payload = Buffer.concat([
          fromBigIntToBuffer(salt, 8, true, true),
          fromBigIntToBuffer(task.sessionData.sessionId, 8, true, true),
          fromBigIntToBuffer(task.message.messageId, 8, true, true),
          seqNo,
          messageLength,
          task.message.message,
        ])

        await client.sendData({
          authKeyId: task.sessionData.authKeyId,
          sessionId: task.sessionData.sessionId,
          payload,
        })
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }
      }
    } else {
      await setTimeout(1000)
    }
  }
}
