import type { TLObject }          from '@chats-system/tl'

import type { SessionData }       from '../data/index.js'
import type { InvokeRpcMetadata } from '../invoke/index.js'

import { setTimeout }             from 'node:timers/promises'

import { Logger }                 from '@monstrs/logger'
import { MTProtoMessageId }       from '@monstrs/mtproto-core'
import { Injectable }             from '@nestjs/common'

import TL                         from '@chats-system/tl'

import { Invoker }                from '../invoke/index.js'
import { SessionResponseQueue }   from './session-response.queue.js'
import { SessionsManager }        from './session.manager.js'

const generateMessageSeqNo = (sequence: number, contentRelated: boolean): number => {
  if (contentRelated) {
    return sequence * 2 + 1
  }

  return sequence * 2
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SessionInvokeMetadata {}

export interface SessionInvokeTask {
  sessionData: SessionData
  metadata: SessionInvokeMetadata
  message: {
    messageId: bigint
    seqNo: number
    message: InstanceType<typeof TLObject>
  }
}

@Injectable()
export class SessionInvokeQueue {
  #logger = new Logger(SessionInvokeQueue.name)

  #running: boolean = false

  #tasks: Array<SessionInvokeTask> = []

  constructor(
    private readonly invoker: Invoker,
    private readonly sessionsManager: SessionsManager,
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
      message: InstanceType<typeof TLObject>
    }
  ): void {
    this.#tasks.push({
      sessionData,
      metadata,
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
        const metadata: InvokeRpcMetadata = {
          authKeyId: task.sessionData.authKeyId,
          userId: this.sessionsManager.getByAuthKeyId(task.sessionData.authKeyId)!.getUserId(),
        }

        const result = await this.invoker.invoke(task.sessionData, task.message.message, metadata)

        const rpcResult = new TL.RpcResult({
          reqMsgId: task.message.messageId,
          result,
        })

        const bytes = rpcResult.write()

        const response = {
          seqNo: generateMessageSeqNo(task.message.seqNo, true),
          messageId: MTProtoMessageId.generate().value,
          messageLength: bytes.length,
          message: bytes,
        }

        this.responseQueue.push(task.sessionData, response)
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)

          const rpcResult = new TL.RpcResult({
            reqMsgId: task.message.messageId,
            result: new TL.RpcError({
              errorCode: 500,
              errorMessage: error.message,
            }),
          })

          const bytes = rpcResult.write()

          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const response = {
            seqNo: generateMessageSeqNo(task.message.seqNo, true),
            messageId: MTProtoMessageId.generate().value,
            messageLength: bytes.length,
            message: bytes,
          }

          // this.responseQueue.push(task.sessionData, response)
        } else {
          throw error
        }
      }
    } else {
      await setTimeout(1000)
    }
  }
}
