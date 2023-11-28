import type { TLObject }        from '@chats-system/tl'

import type { SessionData }     from '../data/index.js'

import { setTimeout }           from 'node:timers/promises'

import { Logger }               from '@monstrs/logger'
import { MTProtoMessageId }     from '@monstrs/mtproto-core'
import { Injectable }           from '@nestjs/common'

import { client }               from '@chats-system/authkey-rpc-client'
import TL                       from '@chats-system/tl'

import { RpcHandlersRegistry }  from '../rpc/index.js'
import { SessionResponseQueue } from './session-response.queue.js'

const generateMessageSeqNo = (sequence: number, contentRelated: boolean): number => {
  if (contentRelated) {
    return sequence * 2 + 1
  }

  return sequence * 2
}

export interface SessionRpcTask {
  sessionData: SessionData
  message: {
    messageId: bigint
    seqNo: number
    message: InstanceType<typeof TLObject>
  }
}

@Injectable()
export class SessionRpcQueue {
  #logger = new Logger(SessionRpcQueue.name)

  #running: boolean = false

  #tasks: Array<SessionRpcTask> = []

  constructor(
    private readonly responseQueue: SessionResponseQueue,
    private readonly rpcHandlersRegistry: RpcHandlersRegistry
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
        const { authKeyUser } = await client.getAuthKeyUser({
          authKeyId: task.sessionData.authKeyId,
        })

        const metadata = {
          authKeyId: task.sessionData.authKeyId,
          userId: authKeyUser?.userId || 0n,
          sessionId: task.sessionData.sessionId,
          clientMessageId: task.message.messageId,
          permAuthKeyId: task.sessionData.authKeyId,
          serverId: task.sessionData.gatewayId,
          clientIp: task.sessionData.clientIp,
          layer: 166,
          client: '',
          langPack: '',
          receiveTime: Math.floor(Date.now() / 1000),
        }

        const result = await this.rpcHandlersRegistry.execute(
          task.message.message,
          task.sessionData,
          metadata
        )

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
