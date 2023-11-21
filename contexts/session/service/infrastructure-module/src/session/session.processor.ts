import { setTimeout }             from 'node:timers/promises'

import { Logger }                 from '@monstrs/logger'
import { MTProtoMessageId }       from '@monstrs/mtproto-core'
import { BinaryReader }           from '@monstrs/mtproto-extensions'
import { TLObject }               from '@monstrs/mtproto-tl-core'
import { Injectable }             from '@nestjs/common'

import { SchemaRegistry }         from '@chats-system/operations'
import { InvokeWithLayer }        from '@chats-system/operations'
import { InitConnection }         from '@chats-system/operations'
import { RpcResult }              from '@chats-system/operations'
import { RpcError }               from '@chats-system/operations'

import { MsgContainer } from '@chats-system/operations'

import { AuthCache }              from '../cache/index.js'
import { ConnectionData }         from '../data/index.js'
import { SessionData }            from '../data/index.js'
import { AuthSession }            from './auth.session.js'
import { SessionInvokeQueue }     from './session-invoke.queue.js'
import { SessionResponseQueue }   from './session-response.queue.js'
import { Session }                from './session.js'
import { SessionsManager }        from './session.manager.js'

export interface SessionProcessorRawMessage<T> {
  messageId: bigint
  seqNo: number
  messageLength: number
  message: T
}

const generateMessageSeqNo = (sequence: number, contentRelated: boolean): number => {
  if (contentRelated) {
    return sequence * 2 + 1
  } else {
    return sequence * 2
  }
}

@Injectable()
export class SessionProcessor {
  #logger = new Logger(SessionProcessor.name)

  constructor(
    protected readonly authCache: AuthCache,
    protected readonly authSessionsManager: SessionsManager,
    protected readonly responseQueue: SessionResponseQueue,
    protected readonly invokeQueue: SessionInvokeQueue
  ) {}

  async processSessionNew(connectionData: ConnectionData): Promise<void> {
    if (!this.authSessionsManager.hasByAuthKeyId(connectionData.authKeyId)) {
      this.authSessionsManager.setByAuthKeyId(connectionData.authKeyId, new AuthSession())
    }

    if (
      !this.authSessionsManager
        .getByAuthKeyId(connectionData.authKeyId)!
        .hasSessionById(connectionData.sessionId)
    ) {
      this.authSessionsManager
        .getByAuthKeyId(connectionData.authKeyId)!
        .setSessionById(connectionData.sessionId, new Session())
    }

    this.authSessionsManager
      .getByAuthKeyId(connectionData.authKeyId)!
      .getSessionById(connectionData.sessionId)!
      .newConnection()
  }

  async processSessionClose(connectionData: ConnectionData): Promise<void> {
    if (this.authSessionsManager.hasByAuthKeyId(connectionData.authKeyId)) {
      if (
        this.authSessionsManager
          .getByAuthKeyId(connectionData.authKeyId)!
          .hasSessionById(connectionData.sessionId)
      ) {
        this.authSessionsManager
          .getByAuthKeyId(connectionData.authKeyId)!
          .getSessionById(connectionData.sessionId)!
          .closeConnection()
      }
    }
  }

  async processSessionData(sessionData: SessionData): Promise<void> {
    this.processSessionNew(sessionData)

    const reader = new BinaryReader<any>(Buffer.from(sessionData.payload), SchemaRegistry)

    const messageId = reader.readLong()
    const seqNo = reader.readInt()
    const messageLength = reader.readInt()

    const message = reader.readObject() as TLObject<any>

    await this.processMessage(sessionData, { seqNo, messageId, messageLength, message })
  }

  protected async processMessage(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TLObject<any>>
  ): Promise<void> {
    console.log(message)
    if (message.message instanceof InvokeWithLayer) {
      return this.processInvokeWithLayer(
        sessionData,
        message as SessionProcessorRawMessage<InvokeWithLayer>
      )
    } else if (message.message instanceof InitConnection) {
      return this.processInitConnection(
        sessionData,
        message as SessionProcessorRawMessage<InitConnection>
      )
    } else {
      return this.processRpcRequest(sessionData, message)
    }
  }

  protected async processInvokeWithLayer(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<InvokeWithLayer>
  ): Promise<void> {
    if (message.message.query) {
      this.authSessionsManager
        .getByAuthKeyId(sessionData.authKeyId)
        ?.setLayer(message.message.layer)

      await this.authCache.putLayer(
        sessionData.authKeyId,
        message.message.layer,
        sessionData.clientIp
      )

      await this.processMessage(sessionData, { ...message, message: message.message.query })
    }
  }

  protected async processInitConnection(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<InitConnection>
  ): Promise<void> {
    if (message.message.query) {
      await this.authCache.putInitConnection(
        sessionData.authKeyId,
        sessionData.clientIp,
        message.message
      )

      await this.processMessage(sessionData, { ...message, message: message.message.query })
    }
  }

  protected async processRpcRequest(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TLObject<any>>
  ): Promise<void> {
    const authSession = this.authSessionsManager.getByAuthKeyId(sessionData.authKeyId)!

    if (authSession.getUserId() === 0n) {
      //TODO: checkRpcWithoutLogin

      const authUserId = await this.authCache.getUserID(sessionData.authKeyId)

      if (authUserId === 0n) {
        const rpcError = new RpcError({
          errorCode: 401,
          errorMessage: 'AUTH_KEY_INVALID',
        })

        this.putRpcResultToResponseQueue(sessionData, message, rpcError)

        return
      } else {
        authSession.setUserId(authUserId)

        if (authSession.getLayer() === 0) {
          const layer = await this.authCache.getApiLayer(sessionData.authKeyId)

          if (layer !== 0) {
            authSession.setLayer(layer)
          }
        }
      }
    }

    this.putRpcRequestToInvokeQueue(sessionData, message)
  }

  protected putRpcRequestToInvokeQueue(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TLObject<any>>
  ): void {
    if (message.message instanceof MsgContainer) {
      message.message.messages.forEach((msg) => {
        this.invokeQueue.push(sessionData, {}, { ...msg, message: msg.obj })
      })
    } else {
      this.invokeQueue.push(sessionData, {}, message)
    }
  }

  protected putRpcResultToResponseQueue(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TLObject<any>>,
    result: TLObject<any>
  ): void {
    const rpcResult = new RpcResult({
      reqMsgId: message.messageId,
      result,
    })

    const bytes = rpcResult.getBytes()

    const response = {
      seqNo: generateMessageSeqNo(message.seqNo, true),
      messageId: MTProtoMessageId.generate().value,
      messageLength: bytes.length,
      message: bytes,
    }

    this.responseQueue.push(sessionData, response)
  }
}
