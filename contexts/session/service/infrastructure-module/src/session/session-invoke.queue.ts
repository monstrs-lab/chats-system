import type { TLObject }          from '@chats-system/tl'

import type { SessionData }       from '../data/index.js'

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

export interface SessionInvokeTask {
  sessionData: SessionData
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
    message: {
      messageId: bigint
      seqNo: number
      message: InstanceType<typeof TLObject>
    }
  ): void {
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
        const session = this.sessionsManager.getByAuthKeyId(task.sessionData.authKeyId)!

        const metadata = {
          authKeyId: task.sessionData.authKeyId,
          userId: session.getUserId(),
          sessionId: task.sessionData.sessionId,
          clientMessageId: task.message.messageId,
          //TODO: fix
          permAuthKeyId:
            session.getPermAuthKeyId() === 0n
              ? task.sessionData.authKeyId
              : session.getPermAuthKeyId(),
          serverId: task.sessionData.gatewayId,
          clientIp: task.sessionData.clientIp,
          layer: session.getLayer(),
          client: session.getClient(),
          langPack: session.getLangPack(),
          receiveTime: Math.floor(Date.now() / 1000),
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
