import { TLObject } from './mtproto'

const kDefaultPingTimeout = 60
const kPingAddTimeout = 15
const kCacheSessionTimeout = 3 * 60
const waitMsgAcksTimeout = 30

const kStateNew = 0
const kStateOnline = 1
const kStateOffline = 2
const kStateClose = 3

const kSessionStateNew = 0
const kSessionStateCreated = 1

const kServerSaltIncorrect = 48

const kMsgIdTooLow = 16
const kMsgIdTooHigh = 17
const kMsgIdMod4 = 18
const kMsgIdCollision = 19
const kMsgIdTooOld = 20
const kSeqNoTooLow = 32
const kSeqNoTooHigh = 33
const kSeqNoNotEven = 34
const kSeqNoNotOdd = 35
const kInvalidContainer = 64

const emptyMsgContainer = new TLMsgRawDataContainer()
const androidPushTooLong = new TLUpdatesTooLong(null)

class messageData {
  confirmFlag: boolean
  compressFlag: boolean
  obj: TLObject

  constructor(confirmFlag: boolean, compressFlag: boolean, obj: TLObject) {
    this.confirmFlag = confirmFlag
    this.compressFlag = compressFlag
    this.obj = obj
  }

  toString(): string {
    return `{confirmFlag: ${this.confirmFlag}, compressFlag: ${this.compressFlag}, obj: ${this.obj}}`
  }
}

class serverIdCtx {
  gatewayId: string
  lastReceiveTime: number

  constructor(gatewayId: string, lastReceiveTime: number) {
    this.gatewayId = gatewayId
    this.lastReceiveTime = lastReceiveTime
  }

  equal(id: string): boolean {
    return this.gatewayId === id
  }
}

interface sessionCallback {
  getCacheSalt(ctx: any): TLFutureSalt
  getAuthKeyId(ctx: any): number
  getTempAuthKeyId(ctx: any): number
  getPermAuthKeyId(ctx: any): number
  setPermAuthKeyId(ctx: any, kId: number): void
  getUserId(ctx: any): number
  setUserId(ctx: any, userId: number): void
  getLayer(ctx: any): number
  setLayer(ctx: any, layer: number): void
  getClient(ctx: any): string
  setClient(ctx: any, c: string): void
  getLangpack(ctx: any): string
  setLangpack(ctx: any, c: string): void
  destroySession(ctx: any, sessionId: number): boolean
  sendToRpcQueue(ctx: any, rpcMessage: rpcApiMessage): void
  onBindPushSessionId(ctx: any, sessionId: number): void
  setOnline(ctx: any): void
  trySetOffline(ctx: any): void
}

class session {
  sessionId: number
  sessionState: number
  gatewayIdList: serverIdCtx[]
  nextSeqNo: number
  firstMsgId: number
  connState: number
  closeDate: number
  lastReceiveTime: number
  isAndroidPush: boolean
  isGeneric: boolean
  inQueue: sessionInboundQueue
  outQueue: sessionOutgoingQueue
  pendingQueue: sessionRpcResultWaitingQueue
  pushQueue: sessionPushQueue
  isHttp: boolean
  httpQueue: httpRequestQueue
  cb: sessionCallback
  authSessions: authSessions

  constructor(sessionId: number, sesses: authSessions) {
    this.sessionId = sessionId
    this.gatewayIdList = []
    this.sessionState = kSessionStateNew
    this.closeDate = Date.now() / 1000 + kDefaultPingTimeout + kPingAddTimeout
    this.connState = kStateNew
    this.lastReceiveTime = Date.now()
    this.inQueue = newSessionInboundQueue()
    this.outQueue = newSessionOutgoingQueue()
    this.pendingQueue = newSessionRpcResultWaitingQueue()
    this.pushQueue = newSessionPushQueue()
    this.isHttp = false
    this.httpQueue = newHttpRequestQueue()
    this.cb = sesses
    this.authSessions = sesses
  }

  toString(): string {
    return `{user_id: ${this.authSessions.AuthUserId}, auth_key_id: ${this.authSessions.authKeyId}, session_id: ${this.sessionId}, state: ${this.sessionState}, conn_state: ${this.connState}, conn_id_list: ${this.gatewayIdList}}`
  }

  addGatewayId(gateId: string): void {
    for (const id of this.gatewayIdList) {
      if (id.equal(gateId)) {
        return
      }
    }
    this.gatewayIdList.push(new serverIdCtx(gateId, Date.now()))
  }

  getGatewayId(): string {
    if (this.gatewayIdList.length > 0) {
      return this.gatewayIdList[this.gatewayIdList.length - 1].gatewayId
    } else {
      return ''
    }
  }

  checkGatewayIdExist(gateId: string): boolean {
    for (const id of this.gatewayIdList) {
      if (id.equal(gateId)) {
        return true
      }
    }
    return false
  }

  //

  changeConnState(ctx: any, state: number): void {
    this.connState = state
    if (this.isAndroidPush || this.isGeneric) {
      if (state === kStateOnline) {
        this.cb.setOnline(ctx)
      } else if (state === kStateOffline) {
        this.cb.trySetOffline(ctx)
      }
    }
  }

  onSessionConnNew(ctx: any, id: string): void {
    if (this.connState !== kStateOnline) {
      this.changeConnState(ctx, kStateOnline)
      this.addGatewayId(id)
    }
  }

  //

  onSessionMessageData(
    ctx: any,
    gatewayId: string,
    clientIp: string,
    salt: number,
    msg: TLMessage2
  ): void {
    if (!this.checkBadServerSalt(ctx, gatewayId, salt, msg)) {
      return
    }
    const willCloseDate = Date.now() / 1000 + kDefaultPingTimeout + kPingAddTimeout
    if (willCloseDate > this.closeDate) {
      this.closeDate = willCloseDate
    }

    if (!this.checkBadMsgNotification(ctx, gatewayId, false, msg)) {
      return
    }

    let msgs: TLMessage2[]

    if (msg.Object instanceof TLMsgContainer) {
      msgs = msg.Object.Messages.map(
        (m2) => new TLMessage2(m2.MsgId, m2.Seqno, m2.Bytes, m2.Object)
      )
      this.inQueue.AddMsgId(msg.MsgId)
    } else {
      msgs = [msg]
    }
    for (let i = 0; i < msgs.length; i++) {
      if (msgs[i].Object instanceof TLGzipPacked) {
        msgs[i] = new TLMessage2(msgs[i].MsgId, msgs[i].Seqno, msgs[i].Bytes, msgs[i].Object.Obj)
      }
    }

    let minMsgId = msg.MsgId
    for (const m2 of msgs) {
      if (minMsgId < m2.MsgId) {
        minMsgId = m2.MsgId
      }
    }
    if (this.sessionState === kSessionStateNew || minMsgId < this.firstMsgId) {
      console.log(`onNewSessionCreated - ${msgs}, c: ${this}`)
      this.onNewSessionCreated(ctx, gatewayId, minMsgId)
      if (this.firstMsgId !== 0) {
        this.firstMsgId = minMsgId
      }
      this.sessionState = kSessionStateCreated
    }
    this.sendQueueToGateway(ctx, gatewayId)
    this.inQueue.Shrink()
  }

  processMsg(ctx: any, gatewayId: string, clientIp: string, inMsg: inboxMsg, r: TLObject): void {
    if (r instanceof TLDestroyAuthKey) {
      this.onDestroyAuthKey(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLRpcDropAnswer) {
      this.onRpcDropAnswer(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLGetFutureSalts) {
      this.onGetFutureSalts(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLPing) {
      this.onPing(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLPingDelayDisconnect) {
      this.onPingDelayDisconnect(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLDestroySession) {
      this.onDestroySession(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLMsgsStateReq) {
      this.onMsgsStateReq(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLMsgsStateInfo) {
      this.onMsgsStateInfo(gatewayId, inMsg, r)
    } else if (r instanceof TLMsgsAllInfo) {
      this.onMsgsAllInfo(gatewayId, inMsg, r)
    } else if (r instanceof TLMsgResendReq) {
      this.onMsgResendReq(ctx, gatewayId, inMsg, r)
    } else if (r instanceof TLMsgDetailedInfo) {
      this.onMsgDetailInfo(gatewayId, inMsg, r)
    } else if (r instanceof TLMsgNewDetailedInfo) {
      this.onMsgNewDetailInfo(gatewayId, inMsg, r)
    } else if (r instanceof TLInvokeWithLayer) {
      this.onInvokeWithLayer(ctx, gatewayId, clientIp, inMsg, r)
    } else if (r instanceof TLInvokeAfterMsg) {
      this.onInvokeAfterMsg(ctx, gatewayId, clientIp, inMsg, r)
    } else if (r instanceof TLInvokeAfterMsgs) {
      this.onInvokeAfterMsgs(ctx, gatewayId, clientIp, inMsg, r)
    } else if (r instanceof TLInvokeWithoutUpdates) {
      this.onInvokeWithoutUpdates(ctx, gatewayId, clientIp, inMsg, r)
    } else if (r instanceof TLInvokeWithMessagesRange) {
      this.onInvokeWithMessagesRange(ctx, gatewayId, clientIp, inMsg, r)
    } else if (r instanceof TLInvokeWithTakeout) {
      this.onInvokeWithTakeout(ctx, gatewayId, clientIp, inMsg, r)
    } else if (r instanceof TLInitConnection) {
      this.onInitConnection(ctx, gatewayId, clientIp, inMsg, r)
    } else if (r instanceof TLGzipPacked) {
      this.onRpcRequest(ctx, gatewayId, clientIp, inMsg, r.Obj)
    } else {
      this.onRpcRequest(ctx, gatewayId, clientIp, inMsg, r)
    }
  }

  onSessionConnClose(ctx: any, id: string): void {
    const idx = this.gatewayIdList.findIndex((cId) => cId.equal(id))
    if (idx !== -1) {
      this.gatewayIdList.splice(idx, 1)
    }
    if (this.gatewayIdList.length === 0) {
      this.changeConnState(ctx, kStateOffline)
    }
  }

  sessionOnline(): boolean {
    return this.connState === kStateOnline
  }

  sessionClosed(): boolean {
    return this.connState === kStateClose
  }

  onTimer(ctx: any): boolean {
    const date = Date.now() / 1000

    const gatewayId = this.getGatewayId()
    const timeoutIdList = this.pendingQueue.OnTimer()
    for (const id of timeoutIdList) {
      this.sendRpcResult(
        ctx,
        new TLRpcResult({
          ReqMsgId: id,
          Result: new TLRpcError({
            ErrorCode: -503,
            ErrorMessage: 'Timeout',
          }),
        })
      )
    }
    const httpTimeOutList = this.httpQueue.PopTimeoutList()
    if (httpTimeOutList.length > 0) {
      console.log(`timeoutList: ${httpTimeOutList.length}`)
    }
    for (const ch of httpTimeOutList) {
      this.sendHttpDirectToGateway(ctx, ch, false, emptyMsgContainer, (
        sentRaw: TLMessageRawData
      ) => {})
    }
    if (this.connState === kStateOnline) {
      if (date >= this.closeDate) {
        this.changeConnState(ctx, kStateOffline)
      } else {
        this.sendQueueToGateway(ctx, gatewayId)
      }
    } else if (this.connState === kStateOffline || this.connState === kStateNew) {
      if (date >= this.closeDate + kCacheSessionTimeout) {
        this.changeConnState(ctx, kStateClose)
      }
    }
    return true
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

  sendRpcResultToQueue(ctx: any, gatewayId: string, reqMsgId: number, result: TLObject): void {
    const rpcResult = new TLRpcResult({
      ReqMsgId: reqMsgId,
      Result: result,
    })
    const x = newEncodeBuf(500)
    rpcResult.Encode(x, this.cb.getLayer(ctx))
    const rawMsg = new TLMessageRawData({
      MsgId: nextMessageId(true),
      Seqno: this.generateMessageSeqNo(true),
      Bytes: x.GetOffset(),
      Body: x.GetBuf(),
    })
    this.outQueue.AddRpcResultMsg(reqMsgId, rawMsg)
  }

  sendPushRpcResultToQueue(gatewayId: string, reqMsgId: number, result: number[]): void {
    const rawMsg = new TLMessageRawData({
      MsgId: nextMessageId(true),
      Seqno: this.generateMessageSeqNo(true),
      Bytes: result.length,
      Body: result,
    })
    this.outQueue.AddRpcResultMsg(reqMsgId, rawMsg)
  }

  sendPushToQueue(ctx: any, gatewayId: string, pushMsgId: number, pushMsg: TLObject): void {
    const x = newEncodeBuf(512)
    pushMsg.Encode(x, this.cb.getLayer(ctx))
    const rawBytes = x.GetBuf()
    if (x.GetOffset() > 256) {
      const gzipPacked = new TLGzipPacked({
        PackedData: rawBytes,
      })
      const x2 = newEncodeBuf(512)
      gzipPacked.Encode(x2, this.cb.getLayer(ctx))
      rawBytes = x2.GetBuf()
    }
    const rawMsg = new TLMessageRawData({
      MsgId: nextMessageId(false),
      Seqno: this.generateMessageSeqNo(true),
      Bytes: rawBytes.length,
      Body: rawBytes,
    })
    this.outQueue.AddPushUpdates(pushMsgId, rawMsg)
  }

  sendRawToQueue(
    ctx: any,
    gatewayId: string,
    msgId: number,
    confirm: boolean,
    rawMsg: TLObject
  ): void {
    const x = newEncodeBuf(512)
    rawMsg.Encode(x, this.cb.getLayer(ctx))
    const b = x.GetBuf()
    const rawMsg2 = new TLMessageRawData({
      MsgId: nextMessageId(false),
      Seqno: this.generateMessageSeqNo(confirm),
      Bytes: b.length,
      Body: b,
    })
    this.outQueue.AddNotifyMsg(msgId, confirm, rawMsg2)
  }

  sendHttpDirectToGateway(
    ctx: any,
    ch: any,
    confirm: boolean,
    obj: TLObject,
    cb: (sentRaw: TLMessageRawData) => void
  ): boolean {
    const x = newEncodeBuf(512)
    const salt = this.cb.getCacheSalt(ctx).GetSalt()
    obj.Encode(x, this.cb.getLayer(ctx))
    const b = x.GetBuf()
    const rawMsg = new TLMessageRawData({
      MsgId: nextMessageId(false),
      Seqno: this.generateMessageSeqNo(confirm),
      Bytes: b.length,
      Body: b,
    })
    const rB = this.SendHttpDataToGateway(
      ctx,
      ch,
      this.cb.getTempAuthKeyId(ctx),
      salt,
      this.sessionId,
      rawMsg
    )
    cb(rawMsg)
    return rB
  }

  sendDirectToGateway(
    ctx: any,
    gatewayId: string,
    confirm: boolean,
    obj: TLObject,
    cb: (sentRaw: TLMessageRawData) => void
  ): boolean {
    const x = newEncodeBuf(512)
    const salt = this.cb.getCacheSalt(ctx).GetSalt()
    obj.Encode(x, this.cb.getLayer(ctx))
    const b = x.GetBuf()
    const rawMsg = new TLMessageRawData({
      MsgId: nextMessageId(false),
      Seqno: this.generateMessageSeqNo(confirm),
      Bytes: b.length,
      Body: b,
    })
    let rB: boolean
    if (!this.isHttp) {
      rB = this.SendDataToGateway(
        ctx,
        gatewayId,
        this.cb.getTempAuthKeyId(ctx),
        salt,
        this.sessionId,
        rawMsg
      )
    } else {
      const ch = this.httpQueue.Pop()
      if (ch) {
        rB = this.SendHttpDataToGateway(
          ctx,
          ch,
          this.cb.getTempAuthKeyId(ctx),
          salt,
          this.sessionId,
          rawMsg
        )
      }
    }
    cb(rawMsg)
    return rB
  }

  sendRawDirectToGateway(ctx: any, gatewayId: string, raw: TLMessageRawData): boolean {
    const salt = this.cb.getCacheSalt(ctx).GetSalt()
    let rB: boolean
    if (!this.isHttp) {
      rB = this.SendDataToGateway(
        ctx,
        gatewayId,
        this.cb.getTempAuthKeyId(ctx),
        salt,
        this.sessionId,
        raw
      )
    } else {
      const ch = this.httpQueue.Pop()
      if (ch) {
        rB = this.SendHttpDataToGateway(
          ctx,
          ch,
          this.cb.getTempAuthKeyId(ctx),
          salt,
          this.sessionId,
          raw
        )
      }
    }
    return rB
  }

  sendQueueToGateway(ctx: any, gatewayId: string): void {
    if (gatewayId === '') {
      return
    }
    if (this.outQueue.oMsgs.length === 0) {
      return
    }
    const pendings: outboxMsg[] = []
    for (const e of this.outQueue.oMsgs) {
      if (e.sent === 0 || Date.now() / 1000 >= e.sent + waitMsgAcksTimeout) {
        pendings.push(e)
      }
    }
    if (pendings.length === 1) {
      console.log(`sendRawDirectToGateway - pendings[0]`)
      this.sendRawDirectToGateway(ctx, gatewayId, pendings[0].msg)
    } else if (pendings.length > 1) {
      const msgContainer = new TLMsgRawDataContainer({
        Messages: pendings.map((m) => m.msg),
      })
      console.log(`sendRawDirectToGateway - TLMsgRawDataContainer`)
      this.sendDirectToGateway(ctx, gatewayId, false, msgContainer, (
        sentRaw: TLMessageRawData
      ) => {})
    }
    for (const m of pendings) {
      console.log(`need_no_ack: ${m.msgId}`)
      if (m.state === NEED_NO_ACK) {
        this.outQueue.Remove(m.msgId)
      } else {
        m.sent = Date.now() / 1000
      }
    }
  }
}

function newSession(sessionId: number, sesses: authSessions): session {
  const sess = new session(sessionId, sesses)
  return sess
}
