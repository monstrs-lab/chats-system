import type { InvokeMessage } from './invoker.js'

import { setTimeout }         from 'node:timers/promises'

import { Logger }             from '@monstrs/logger'

import { Invoker }            from './invoker.js'
import { invoker }            from './invoker.js'

export interface InvokeTask {
  message: InvokeMessage
}

export class InvokeQueue {
  #logger = new Logger(InvokeQueue.name)

  #tasks: Array<InvokeTask> = []

  #running: boolean = false

  add(message: InvokeMessage): void {
    this.#tasks.push({ message })
  }

  start() {
    this.#running = true
    this.runLoop()
  }

  stop() {
    this.#running = false
  }

  async runLoop(): Promise<void> {
    while (this.#running) {
      try {
        await this.process()
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }
      }
    }
  }

  async process(): Promise<void> {
    const task = this.#tasks.shift()

    if (task) {
      const result = await invoker.invoke(task.message)
    } else {
      await setTimeout(1000)
    }
  }
}
