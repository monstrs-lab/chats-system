import { ConnectionData, SessionData } from '../data/index.js'

import { setTimeout }       from 'node:timers/promises'

import { Logger }           from '@monstrs/logger'
import { Injectable }       from '@nestjs/common'

import { SessionProcessor } from './session.processor.js'

export type SessionInboundTask = ConnectionData | SessionData

@Injectable()
export class SessionInboundQueue {
  #logger = new Logger(SessionInboundQueue.name)

  #running: boolean = false

  #tasks: Array<SessionInboundTask> = []

  constructor(private readonly sessionProcessor: SessionProcessor) {
    this.start()
  }

  push(data: ConnectionData | SessionData): void {
    this.#tasks.push(data)
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
        if (task instanceof ConnectionData) {
            if (task.isNew) {
                await this.sessionProcessor.processSessionNew(task)
            } else {
                await this.sessionProcessor.processSessionClose(task)
            }
        } else if (task instanceof SessionData) {
            await this.sessionProcessor.processSessionData(task)
        }
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
