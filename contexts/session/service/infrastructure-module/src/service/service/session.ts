import { AuthSessions } from './auth.sessions.js'

const K_DEFAULT_PING_TIMEOUT = 60
const K_PING_ADD_TIMEOUT = 15
const K_CACHE_SESSION_TIMEOUT = 3 * 60
const WAIT_MSG_ACKS_TIMEOUT = 30

type TLMessage2 = any

class ServerIdCtx {
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

enum SessionState {
  NEW = 0,
  CREATED = 1,
}

enum ConnectionState {
  NEW = 0,
  ONLINE = 1,
  OFFLINE = 2,
  CLOSE = 3,
}

export class Session {
  sessionId: number
  sessionState: SessionState
  connectionState: ConnectionState
  gatewayIdList: Array<ServerIdCtx>
  nextSeqNo: number
  firstMsgId: number
  closeDate: number
  lastReceiveTime: number
  isAndroidPush: boolean
  isGeneric: boolean
  isHttp: boolean

  authSessions: AuthSessions

  //inQueue: sessionInboundQueue;
  //outQueue: sessionOutgoingQueue;
  //pendingQueue: sessionRpcResultWaitingQueue;
  //pushQueue: sessionPushQueue;
  //httpQueue: httpRequestQueue;
  //cb: sessionCallback;

  constructor(sessionId: number, authSessions: AuthSessions) {
    this.sessionId = sessionId
    this.gatewayIdList = []
    this.sessionState = SessionState.NEW
    this.connectionState = ConnectionState.NEW
    this.closeDate = Date.now() / 1000 + K_DEFAULT_PING_TIMEOUT + K_PING_ADD_TIMEOUT
    this.lastReceiveTime = Date.now()
    this.isHttp = false

    this.authSessions = authSessions

    //this.inQueue = newSessionInboundQueue();
    //this.outQueue = newSessionOutgoingQueue();
    //this.pendingQueue = newSessionRpcResultWaitingQueue();
    //this.pushQueue = newSessionPushQueue();
    //this.httpQueue = newHttpRequestQueue();
    //this.cb = authSessions;
  }

  toString(): string {
    return `{user_id: ${this.authSessions.authUserId}, auth_key_id: ${this.authSessions.authKeyId}, session_id: ${this.sessionId}, state: ${this.sessionState}, conn_state: ${this.connectionState}, conn_id_list: ${this.gatewayIdList}}`
  }

  addGatewayId(gatewayId: string): void {
    for (const id of this.gatewayIdList) {
      if (id.equal(gatewayId)) {
        return
      }
    }

    this.gatewayIdList.push(new ServerIdCtx(gatewayId, Date.now()))
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

  changeConnectionState(state: ConnectionState): void {
    this.connectionState = state
    if (this.isAndroidPush || this.isGeneric) {
      if (state === ConnectionState.ONLINE) {
        //this.cb.setOnline(ctx);
      } else if (state === ConnectionState.OFFLINE) {
        //this.cb.trySetOffline(ctx);
      }
    }
  }

  onSessionConnectionNew(id: string): void {
    if (this.connectionState !== ConnectionState.ONLINE) {
      this.changeConnectionState(ConnectionState.ONLINE)
      this.addGatewayId(id)
    }
  }

  onSessionConnectionClose(id: string): void {
    const idx = this.gatewayIdList.findIndex((cId) => cId.equal(id))

    if (idx !== -1) {
      this.gatewayIdList.splice(idx, 1)
    }

    if (this.gatewayIdList.length === 0) {
      this.changeConnectionState(ConnectionState.OFFLINE)
    }
  }

  isSessionOnline(): boolean {
    return this.connectionState === ConnectionState.ONLINE
  }

  isSessionClosed(): boolean {
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

  onSessionMessageData(
    ctx: any,
    gatewayId: string,
    clientIp: string,
    salt: number,
    msg: TLMessage2
  ): void {
    //TODO
    //if (!this.checkBadServerSalt(ctx, gatewayId, salt, msg)) {
    //  return;
    //}

    const willCloseDate = Date.now() / 1000 + K_DEFAULT_PING_TIMEOUT + K_PING_ADD_TIMEOUT
    if (willCloseDate > this.closeDate) {
      this.closeDate = willCloseDate
    }

    //TODO
    //if (!this.checkBadMsgNotification(ctx, gatewayId, false, msg)) {
    //  return;
    //}
    /*
        let msgs: TLMessage2[];
    
        if (msg.Object instanceof TLMsgContainer) {
          msgs = msg.Object.Messages.map(m2 => new TLMessage2(m2.MsgId, m2.Seqno, m2.Bytes, m2.Object));
          this.inQueue.AddMsgId(msg.MsgId);
        } else {
          msgs = [msg];
        }
        for (let i = 0; i < msgs.length; i++) {
          if (msgs[i].Object instanceof TLGzipPacked) {
            msgs[i] = new TLMessage2(msgs[i].MsgId, msgs[i].Seqno, msgs[i].Bytes, msgs[i].Object.Obj);
          }
        }
    
        let minMsgId = msg.MsgId;
        for (const m2 of msgs) {
          if (minMsgId < m2.MsgId) {
            minMsgId = m2.MsgId;
          }
        }
        if (this.sessionState === SessionState.NEW || minMsgId < this.firstMsgId) {
          console.log(`onNewSessionCreated - ${msgs}, c: ${this}`);
          //TODO
          //this.onNewSessionCreated(ctx, gatewayId, minMsgId);
          if (this.firstMsgId !== 0) {
            this.firstMsgId = minMsgId;
          }

          this.sessionState = SessionState.CREATED
        }

        //this.sendQueueToGateway(ctx, gatewayId);
        //this.inQueue.Shrink();
        */
  }
  /*
      processMsg(gatewayId: string, clientIp: string, inMsg: InboxMessage, r: TLObject): void {
        if (r instanceof TLDestroyAuthKey) {
          this.onDestroyAuthKey(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLRpcDropAnswer) {
          this.onRpcDropAnswer(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLGetFutureSalts) {
          this.onGetFutureSalts(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLPing) {
          this.onPing(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLPingDelayDisconnect) {
          this.onPingDelayDisconnect(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLDestroySession) {
          this.onDestroySession(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLMsgsStateReq) {
          this.onMsgsStateReq(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLMsgsStateInfo) {
          this.onMsgsStateInfo(gatewayId, inMsg, r);
        } else if (r instanceof TLMsgsAllInfo) {
          this.onMsgsAllInfo(gatewayId, inMsg, r);
        } else if (r instanceof TLMsgResendReq) {
          this.onMsgResendReq(ctx, gatewayId, inMsg, r);
        } else if (r instanceof TLMsgDetailedInfo) {
          this.onMsgDetailInfo(gatewayId, inMsg, r);
        } else if (r instanceof TLMsgNewDetailedInfo) {
          this.onMsgNewDetailInfo(gatewayId, inMsg, r);
        } else if (r instanceof TLInvokeWithLayer) {
          this.onInvokeWithLayer(ctx, gatewayId, clientIp, inMsg, r);
        } else if (r instanceof TLInvokeAfterMsg) {
          this.onInvokeAfterMsg(ctx, gatewayId, clientIp, inMsg, r);
        } else if (r instanceof TLInvokeAfterMsgs) {
          this.onInvokeAfterMsgs(ctx, gatewayId, clientIp, inMsg, r);
        } else if (r instanceof TLInvokeWithoutUpdates) {
          this.onInvokeWithoutUpdates(ctx, gatewayId, clientIp, inMsg, r);
        } else if (r instanceof TLInvokeWithMessagesRange) {
          this.onInvokeWithMessagesRange(ctx, gatewayId, clientIp, inMsg, r);
        } else if (r instanceof TLInvokeWithTakeout) {
          this.onInvokeWithTakeout(ctx, gatewayId, clientIp, inMsg, r);
        } else if (r instanceof TLInitConnection) {
          this.onInitConnection(ctx, gatewayId, clientIp, inMsg, r);
        } else if (r instanceof TLGzipPacked) {
          this.onRpcRequest(ctx, gatewayId, clientIp, inMsg, r.Obj);
        } else {
          this.onRpcRequest(ctx, gatewayId, clientIp, inMsg, r);
        }
      }
*/
}
