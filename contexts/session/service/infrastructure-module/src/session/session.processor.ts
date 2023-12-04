import type { SessionData }     from '../data/index.js'

import { Logger }               from '@monstrs/logger'
import { MTProtoMessageId }     from '@monstrs/mtproto-core'
import { Injectable }           from '@nestjs/common'

import { BytesIO }              from '@chats-system/tl'
import { MsgContainer }         from '@chats-system/tl'
import { Primitive }            from '@chats-system/tl'
import { TLObject }             from '@chats-system/tl'
import { client }               from '@chats-system/authkey-rpc-client'
import TL                       from '@chats-system/tl'

import { SessionRegistry }      from '../registry/index.js'
import { SessionResponseQueue } from './session-response.queue.js'
import { SessionRpcQueue }      from './session-rpc.queue.js'

export interface SessionProcessorRawMessage<T> {
  messageId: bigint
  seqNo: number
  messageLength: number
  message: T
}

const generateMessageSeqNo = (sequence: number, contentRelated: boolean): number => {
  if (contentRelated) {
    return sequence * 2 + 1
  }

  return sequence * 2
}

@Injectable()
export class SessionProcessor {
  #logger = new Logger(SessionProcessor.name)

  constructor(
    protected readonly sessionRegistry: SessionRegistry,
    protected readonly responseQueue: SessionResponseQueue,
    protected readonly rpcQueue: SessionRpcQueue
  ) {}

  async processSessionData(sessionData: SessionData): Promise<void> {
    try {
      const bytesIO = new BytesIO(Buffer.from(sessionData.payload))

      const messageId = await Primitive.Long.read(bytesIO)
      const seqNo = await Primitive.Int.read(bytesIO)
      const messageLength = await Primitive.Int.read(bytesIO)

      const message = await TLObject.read(bytesIO)

      const messages =
        message instanceof MsgContainer
          ? message.messages.map((msg) => ({
              seqNo: msg.seqNo,
              messageId: msg.msgId,
              messageLength: msg.length,
              message: msg.body,
            }))
          : [{ seqNo, messageId, messageLength, message }]

      for await (const msg of messages) {
        await this.processMessage(sessionData, msg)
      }
    } catch (error) {
      if (error instanceof Error) {
        this.#logger.error(error)
      }
    }
  }

  protected checkRpcWithoutLogin(message: InstanceType<typeof TLObject>): boolean {
    if (
      message instanceof TL.auth.SendCode ||
      message instanceof TL.auth.ResendCode ||
      message instanceof TL.auth.SignUp ||
      message instanceof TL.auth.SignIn ||
      message instanceof TL.auth.ImportLoginToken ||
      message instanceof TL.auth.ExportedAuthorization ||
      message instanceof TL.auth.ExportAuthorization ||
      message instanceof TL.auth.ImportAuthorization ||
      message instanceof TL.auth.CancelCode ||
      message instanceof TL.auth.ExportLoginToken ||
      message instanceof TL.auth.AcceptLoginToken ||
      message instanceof TL.auth.LogOut ||
      message instanceof TL.auth.BindTempAuthKey
    ) {
      return true
    }

    if (
      message instanceof TL.help.GetConfig ||
      message instanceof TL.help.GetNearestDc ||
      message instanceof TL.help.GetAppUpdate ||
      message instanceof TL.help.GetCdnConfig ||
      message instanceof TL.help.GetCountriesList
    ) {
      return true
    }

    if (
      message instanceof TL.langpack.GetLangPack ||
      message instanceof TL.langpack.GetStrings ||
      message instanceof TL.langpack.GetDifference ||
      message instanceof TL.langpack.GetLanguages ||
      message instanceof TL.langpack.GetLanguage
    ) {
      return true
    }

    if (message instanceof TL.upload.GetWebFile || message instanceof TL.upload.GetFile) {
      return true
    }

    if (message instanceof TL.JsonObject) {
      return true
    }

    return false
  }

  protected async processMessage(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<InstanceType<typeof TLObject>>
  ): Promise<void> {
    if (message.message instanceof TL.InvokeWithLayer) {
      return this.processInvokeWithLayer(
        sessionData,
        message as SessionProcessorRawMessage<TL.InvokeWithLayer>
      )
    }

    if (message.message instanceof TL.InitConnection) {
      return this.processInitConnection(
        sessionData,
        message as SessionProcessorRawMessage<TL.InitConnection>
      )
    }

    if (message.message instanceof TL.PingDelayDisconnect) {
      return this.processPingDeLayDisconnect(
        sessionData,
        message as SessionProcessorRawMessage<TL.PingDelayDisconnect>
      )
    }

    if (message.message instanceof TL.MsgsAck) {
      return this.processMsgsAck(sessionData, message as SessionProcessorRawMessage<TL.MsgsAck>)
    }

    return this.processRpcRequest(sessionData, message)
  }

  protected async processInvokeWithLayer(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TL.InvokeWithLayer>
  ): Promise<void> {
    if (message.message.query) {
      await this.processMessage(sessionData, { ...message, message: message.message.query })
    }
  }

  protected async processInitConnection(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TL.InitConnection>
  ): Promise<void> {
    if (message.message.query) {
      await client.createAuthKeyConnection({
        authKeyId: sessionData.authKeyId,
        clientIp: sessionData.clientIp,
        apiId: message.message.apiId,
        deviceModel: message.message.deviceModel,
        systemVersion: message.message.systemVersion,
        appVersion: message.message.appVersion,
        systemLangCode: message.message.systemLangCode,
        langPack: message.message.langPack,
        langCode: message.message.langCode,
      })

      await this.processMessage(sessionData, { ...message, message: message.message.query })
    }
  }

  protected async processPingDeLayDisconnect(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TL.PingDelayDisconnect>
  ): Promise<void> {
    this.putResultToResponseQueue(
      sessionData,
      message,
      new TL.Pong({
        msgId: message.messageId,
        pingId: message.message.pingId,
      })
    )
  }

  protected async processMsgsAck(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<TL.MsgsAck>
  ): Promise<void> {
    this.putResultToResponseQueue(sessionData, message, message.message)
  }

  protected async processRpcRequest(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<InstanceType<typeof TLObject>>
  ): Promise<void> {
    const { authKeyUser } = await client.getAuthKeyUser({
      authKeyId: sessionData.authKeyId,
    })

    const authKeyUserId = authKeyUser?.userId || 0n

    if (authKeyUserId === 0n) {
      if (this.checkRpcWithoutLogin(message.message)) {
        this.putRpcRequestToQueue(sessionData, message)
      } else {
        const rpcError = new TL.RpcError({
          errorCode: 401,
          errorMessage: 'AUTH_KEY_INVALID',
        })

        this.putRpcResultToResponseQueue(sessionData, message, rpcError)
      }
    } else {
      this.sessionRegistry.set(authKeyUserId, sessionData)
      this.putRpcRequestToQueue(sessionData, message)
    }
  }

  protected putRpcRequestToQueue(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<InstanceType<typeof TLObject>>
  ): void {
    if (message.message instanceof MsgContainer) {
      message.message.messages.forEach((msg) => {
        this.rpcQueue.push(sessionData, {
          seqNo: msg.seqNo,
          messageId: msg.msgId,
          message: msg.body,
        })
      })
    } else {
      this.rpcQueue.push(sessionData, message)
    }
  }

  protected putRpcResultToResponseQueue(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<InstanceType<typeof TLObject>>,
    result: InstanceType<typeof TLObject>
  ): void {
    const rpcResult = new TL.RpcResult({
      reqMsgId: message.messageId,
      result,
    })

    this.putResultToResponseQueue(sessionData, message, rpcResult)
  }

  protected putResultToResponseQueue(
    sessionData: SessionData,
    message: SessionProcessorRawMessage<InstanceType<typeof TLObject>>,
    result: InstanceType<typeof TLObject>
  ): void {
    const bytes = result.write()

    const response = {
      seqNo: generateMessageSeqNo(message.seqNo, true),
      messageId: MTProtoMessageId.generate().value,
      messageLength: bytes.length,
      message: bytes,
    }

    this.responseQueue.push(sessionData, response)
  }
}
