import { setTimeout }           from 'node:timers/promises'

import { Logger }               from '@monstrs/logger'
import { MTProtoMessageId }     from '@monstrs/mtproto-core'
import { TLObject }             from '@monstrs/mtproto-tl-core'
import { Injectable }           from '@nestjs/common'

import { RpcResult }            from '@chats-system/operations'

import { SessionData }          from '../data/index.js'
import { Invoker }              from '../invoke/index.js'
import { SessionResponseQueue } from './session-response.queue.js'

const generateMessageSeqNo = (sequence: number, contentRelated: boolean): number => {
  if (contentRelated) {
    return sequence * 2 + 1
  } else {
    return sequence * 2
  }
}

export interface SessionInvokeMetadata {}

export interface SessionInvokeTask {
  sessionData: SessionData
  metadata: SessionInvokeMetadata
  message: {
    messageId: bigint
    seqNo: number
    message: TLObject<any>
  }
}

@Injectable()
export class SessionInvokeQueue {
  #logger = new Logger(SessionInvokeQueue.name)

  #running: boolean = false

  #tasks: Array<SessionInvokeTask> = []

  constructor(
    private readonly invoker: Invoker,
    private readonly responseQueue: SessionResponseQueue
  ) {
    this.start()
  }

  push(
    sessionData: SessionData,
    metadata: SessionInvokeMetadata,
    message: {
      messageId: bigint
      seqNo: number
      message: TLObject<any>
    }
  ): void {
    this.#tasks.push({
      sessionData,
      metadata,
      message,
    })
  }

  protected start() {
    this.#running = true
    this.runLoop()
  }

  protected stop() {
    this.#running = false
  }

  protected async runLoop(): Promise<void> {
    while (this.#running) {
      await this.process()
    }
  }

  async process(): Promise<void> {
    const task = this.#tasks.shift()

    if (task) {
      try {
        const result = await this.invoker.invoke(task.sessionData, task.message.message)

        if (result !== undefined) {
          const rpcResult = new RpcResult({
            // @ts-expect-error
            reqMsgId: task.message.messageId || task.message.msgId,
            result,
          })

          const bytes = rpcResult.getBytes()

          const response = {
            seqNo: generateMessageSeqNo(task.message.seqNo, true),
            messageId: MTProtoMessageId.generate().value,
            messageLength: bytes.length,
            message: bytes,
          }

          this.responseQueue.push(task.sessionData, response)
        } else {
          //TODO: send error
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
