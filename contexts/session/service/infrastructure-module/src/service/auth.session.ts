import { MTProtoRawMessage }          from '@monstrs/mtproto-core'
import { MTProtoEncryptedRawMessage } from '@monstrs/mtproto-core'
import { MTProtoMessageId }           from '@monstrs/mtproto-core'
import { TLObject }                   from '@monstrs/mtproto-tl-core'
import { fromBigIntToBuffer }         from '@monstrs/buffer-utils'

import { InvokeWithLayer }            from '@chats-system/operations'
import { InitConnection }             from '@chats-system/operations'
import { AccountRegisterDevice }      from '@chats-system/operations'
import { RpcResult }                  from '@chats-system/operations'
import { RpcError }                   from '@chats-system/operations'
import { client }                     from '@chats-system/gateway-rpc-client'

import { ServerIdData }               from '../data/index.js'
import { AuthSessions }               from './auth.sessions.js'
import { SessionOutgoingQueue }       from './session-outgoing.queue.js'

export enum SessionState {
  NEW = 0,
  CREATED = 1,
}

export enum ConnectionState {
  NEW = 0,
  ONLINE = 1,
  OFFLINE = 2,
  CLOSE = 3,
}

export class AuthSession {
  private sessionState: SessionState = SessionState.NEW

  private gatewayIdList: Array<ServerIdData> = []

  private connectionState: ConnectionState

  private generic: boolean

  private nextSeqNo: number = 0

  private outQueue: SessionOutgoingQueue = new SessionOutgoingQueue()

  constructor(
    private readonly sessionId: bigint,
    private readonly callbacks: AuthSessions
  ) {}

  addGatewayId(gatewayId: string): void {
    for (const id of this.gatewayIdList) {
      if (id.equal(gatewayId)) {
        return
      }
    }

    this.gatewayIdList.push(new ServerIdData(gatewayId, Date.now()))
  }

  getGatewayId(): string {
    if (this.gatewayIdList.length > 0) {
      return this.gatewayIdList[this.gatewayIdList.length - 1].gatewayId
    } else {
      return ''
    }
  }

  checkGatewayIdExist(gateId: string): boolean {
    return Boolean(this.gatewayIdList.find((id) => id.equal(gateId)))
  }

  setSessionState(sessionState: SessionState) {
    this.sessionState = sessionState
  }

  setConnectionState(connectionState: ConnectionState) {
    this.connectionState = connectionState
  }

  isGeneric(): boolean {
    return this.generic
  }

  setGeneric(generic: boolean) {
    this.generic = generic
  }

  isOnline(): boolean {
    return this.connectionState === ConnectionState.ONLINE
  }

  isClosed(): boolean {
    return this.connectionState === ConnectionState.CLOSE
  }

  generateMessageSeqNo(increment: boolean): number {
    const value = this.nextSeqNo

    if (increment) {
      this.nextSeqNo++

      return value * 2 + 1
    } else {
      return value * 2
    }
  }

  async sendRpcResultToQueue(
    gatewayId: string,
    reqMsgId: bigint,
    result: TLObject<any>
  ): Promise<void> {
    const rpcResult = new RpcResult({
      reqMsgId,
      result,
    })

    const bytes = rpcResult.getBytes()

    const message = {
      messageId: MTProtoMessageId.generate().value,
      seqNo: this.generateMessageSeqNo(true),
      messageLength: bytes.length,
      body: bytes,
    }

    this.outQueue.addRpcResultMsg(reqMsgId, message)
  }

  async sendFromQueueToGateway(gatewayId: string): Promise<void> {
    this.outQueue.messages.forEach((message) => {
      console.log(message, 'asdflkadsj')
      this.sendQueueToGateway(gatewayId, message.message)
      this.outQueue.messages.delete(message)
    })
  }

  async sendQueueToGateway(
    gatewayId: string,
    message: { messageId: bigint; body: Buffer; seqNo: number; messageLength: number }
  ): Promise<void> {
    const salt = 0n //this.callbacks.getCacheSalt()?.data2
    const authKeyId = this.callbacks.getAuthKeyId()

    await this.sendRawDirectToGateway(authKeyId, salt, this.sessionId, message)
  }

  async sendRawDirectToGateway(
    authKeyId: bigint,
    salt: bigint,
    sessionId: bigint,
    message: {
      messageId: bigint
      seqNo: number
      messageLength: number
      body: Buffer
    }
  ): Promise<void> {
    const seqNo = Buffer.alloc(4)
    const messageLength = Buffer.alloc(4)

    //writeInt32LE
    seqNo.writeInt32LE(message.seqNo, 0)
    messageLength.writeInt32LE(message.messageLength, 0)

    const payload = Buffer.concat([
      fromBigIntToBuffer(salt, 8, true, true),
      fromBigIntToBuffer(sessionId, 8, true, true),
      fromBigIntToBuffer(message.messageId, 8, true, true),
      seqNo,
      messageLength,
      message.body,
    ])
    console.log(sessionId, 'asdfasd')
    return await this.sendDataToGateway(authKeyId, sessionId, payload)
  }

  async sendDataToGateway(authKeyId: bigint, sessionId: bigint, payload: Buffer): Promise<void> {
    await client.sendData({
      authKeyId,
      sessionId,
      payload,
    })
  }

  async onTimer(): Promise<void> {}

  async processMessage(
    gatewayId: string,
    clientId: string,
    messageId: bigint,
    message: any
  ): Promise<void> {
    if (message instanceof InvokeWithLayer) {
      await this.onInvokeWithLayer(gatewayId, clientId, messageId, message)
    } else if (message instanceof InitConnection) {
      await this.onInitConnection(gatewayId, clientId, messageId, message)
    } else {
      await this.onRpcRequest(gatewayId, clientId, messageId, message)
    }
  }

  async onConnectionNew(gatewayId: string): Promise<void> {
    if (this.connectionState !== ConnectionState.ONLINE) {
      this.changeConnectionState(ConnectionState.ONLINE)
      this.addGatewayId(gatewayId)
    }
  }

  async onConnectionClose(gatewayId: string): Promise<void> {
    const idx = this.gatewayIdList.findIndex((cId) => cId.equal(gatewayId))

    if (idx !== -1) {
      this.gatewayIdList.splice(idx, 1)
    }

    if (this.gatewayIdList.length === 0) {
      this.changeConnectionState(ConnectionState.OFFLINE)
    }
  }

  async onConnnectionMessageData(
    gatewayId: string,
    clientId: string,
    salt: bigint,
    message: {
      messageId: bigint
      seqNo: number
      messageLength: number
      message: any
    }
  ): Promise<void> {
    await this.processMessage(gatewayId, clientId, message.messageId, message.message)
    await this.sendFromQueueToGateway(gatewayId)
  }

  async onInvokeWithLayer(
    gatewayId: string,
    clientId: string,
    messageId: bigint,
    message: InvokeWithLayer
  ): Promise<void> {
    if (message.query) {
      this.callbacks.setLayer(message.layer)

      await this.callbacks.cache.putLayer(this.callbacks.getAuthKeyId(), message.layer, clientId)

      await this.processMessage(gatewayId, clientId, messageId, message.query)
    }
  }

  async onInitConnection(
    gatewayId: string,
    clientId: string,
    messageId: bigint,
    message: InitConnection
  ): Promise<void> {
    if (message.query) {
      await this.callbacks.cache.putInitConnection(this.callbacks.getAuthKeyId(), clientId, message)

      await this.processMessage(gatewayId, clientId, messageId, message.query)
    }
  }

  async onRpcRequest(
    gatewayId: string,
    clientId: string,
    messageId: bigint,
    message: InitConnection
  ): Promise<void> {
    console.log(message, 'rpc')
    if (message instanceof AccountRegisterDevice) {
    }

    if (this.callbacks.getUserId() === 0n) {
      // checkRpcWithoutLogin

      const authUserId = await this.callbacks.cache.getUserID(this.callbacks.getAuthKeyId())

      if (authUserId === 0n) {
        const rpcError = new RpcError({
          errorCode: 401,
          errorMessage: 'AUTH_KEY_INVALID',
        })

        await this.sendRpcResultToQueue(gatewayId, messageId, rpcError)
        //msgId.state = RECEIVED | RESPONSE_GENERATED
      } else {
        this.callbacks.setUserId(authUserId)
      }
    }

    /*
    msgId.state = RECEIVED | RPC_PROCESSING
	c.cb.sendToRpcQueue(
		ctx,
		&rpcApiMessage{
			sessionId: c.sessionId,
			clientIp:  clientIp,
			reqMsgId:  msgId.msgId,
			reqMsg:    query,
		})
    */
  }

  protected changeConnectionState(connectionState: ConnectionState) {
    this.connectionState = connectionState

    if (this.isGeneric()) {
      if (connectionState === ConnectionState.ONLINE) {
        //this.cb.setOnline()
      } else if (connectionState === ConnectionState.OFFLINE) {
        //this.cb.trySetOffline()
      }
    }
  }
}
