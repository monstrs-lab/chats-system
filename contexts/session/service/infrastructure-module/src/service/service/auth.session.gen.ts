import { context }   from 'context'
import { contextx }  from 'contextx'
import { logx }      from 'logx'
import { mtproto }   from 'mtproto'
import { queue2 }    from 'queue2'
import { status }    from 'status'
import { sync2 }     from 'sync2'
import { threading } from 'threading'

class rpcApiMessage {
  sessionId: number
  clientIp: string
  reqMsgId: number
  reqMsg: mtproto.TLObject
  rpcResult: mtproto.TLRpcResult | null

  MoveRpcResult(): mtproto.TLRpcResult | null {
    const v = this.rpcResult
    this.rpcResult = null
    return v
  }

  DebugString(): string {
    if (this.rpcResult === null) {
      return `{session_id: ${this.sessionId}, req_msg_id: ${
        this.reqMsgId
      }, req_msg: ${this.reqMsg.DebugString()}}`
    } else {
      return `{session_id: ${this.sessionId}, req_msg_id: ${
        this.reqMsgId
      }, req_msg: ${this.reqMsg.DebugString()}, rpc_result: ${this.rpcResult.Result.DebugString()}}`
    }
  }
}

class sessionData {
  gatewayId: string
  clientIp: string
  sessionId: number
  salt: number
  buf: number[]

  constructor(gatewayId: string, clientIp: string, sessionId: number, salt: number, buf: number[]) {
    this.gatewayId = gatewayId
    this.clientIp = clientIp
    this.sessionId = sessionId
    this.salt = salt
    this.buf = buf
  }
}

class sessionDataCtx {
  ctx: context.Context
  sessionData: sessionData

  constructor(ctx: context.Context, sessionData: sessionData) {
    this.ctx = ctx
    this.sessionData = sessionData
  }
}

class sessionHttpData {
  gatewayId: string
  clientIp: string
  sessionId: number
  salt: number
  buf: number[]
  resChannel: any[]

  constructor(
    gatewayId: string,
    clientIp: string,
    sessionId: number,
    salt: number,
    buf: number[],
    resChannel: any[]
  ) {
    this.gatewayId = gatewayId
    this.clientIp = clientIp
    this.sessionId = sessionId
    this.salt = salt
    this.buf = buf
    this.resChannel = resChannel
  }
}

class sessionHttpDataCtx {
  ctx: context.Context
  sessionHttpData: sessionHttpData

  constructor(ctx: context.Context, sessionHttpData: sessionHttpData) {
    this.ctx = ctx
    this.sessionHttpData = sessionHttpData
  }
}

class syncRpcResultData {
  sessionId: number
  clientMsgId: number
  data: number[]

  constructor(sessionId: number, clientMsgId: number, data: number[]) {
    this.sessionId = sessionId
    this.clientMsgId = clientMsgId
    this.data = data
  }
}

class syncRpcResultDataCtx {
  ctx: context.Context
  syncRpcResultData: syncRpcResultData

  constructor(ctx: context.Context, syncRpcResultData: syncRpcResultData) {
    this.ctx = ctx
    this.syncRpcResultData = syncRpcResultData
  }
}

class syncSessionData {
  sessionId: number
  data: messageData

  constructor(sessionId: number, data: messageData) {
    this.sessionId = sessionId
    this.data = data
  }
}

class syncSessionDataCtx {
  ctx: context.Context
  syncSessionData: syncSessionData

  constructor(ctx: context.Context, syncSessionData: syncSessionData) {
    this.ctx = ctx
    this.syncSessionData = syncSessionData
  }
}

class syncData {
  needAndroidPush: boolean
  data: messageData

  constructor(needAndroidPush: boolean, data: messageData) {
    this.needAndroidPush = needAndroidPush
    this.data = data
  }
}

class syncDataCtx {
  ctx: context.Context
  syncData: syncData

  constructor(ctx: context.Context, syncData: syncData) {
    this.ctx = ctx
    this.syncData = syncData
  }
}

class connData {
  isNew: boolean
  gatewayId: string
  sessionId: number

  constructor(isNew: boolean, gatewayId: string, sessionId: number) {
    this.isNew = isNew
    this.gatewayId = gatewayId
    this.sessionId = sessionId
  }

  DebugString(): string {
    return `{isNew: ${this.isNew}, gatewayId: ${this.gatewayId}, sessionId: ${this.sessionId}}`
  }
}

class connDataCtx {
  ctx: context.Context
  connData: connData

  constructor(ctx: context.Context, connData: connData) {
    this.ctx = ctx
    this.connData = connData
  }
}

const keyIdNew = 0
const keyLoaded = 1
const unauthorized = 2
const userIdLoaded = 3
const offline = 4
const closed = 5
const unknownError = 6

interface authSessionsCallback {
  SendDataToGate(
    ctx: context.Context,
    serverId: number,
    authKeyId: number,
    sessionId: number,
    payload: number[]
  ): Promise<void>
}

class authSessions {
  authKeyId: number
  permAuthKeyId: number
  Layer: number
  Client: string
  Langpack: string
  AuthUserId: number
  cacheSalt: mtproto.TLFutureSalt | null
  cacheLastSalt: mtproto.TLFutureSalt | null
  pushSessionId: number
  sessions: { [sessionId: number]: session }
  closeChan: any[]
  sessionDataChan: any[]
  rpcDataChan: any[]
  rpcQueue: queue2.SyncQueue
  finish: sync.WaitGroup
  running: sync2.AtomicInt32
  state: number
  onlineExpired: number
  clientType: number
  nextNotifyId: number
  nextPushId: number
  Service: Service

  constructor(authKeyId: number, s2: Service) {
    this.authKeyId = authKeyId
    this.Layer = 0
    this.AuthUserId = 0
    this.sessions = {}
    this.closeChan = []
    this.sessionDataChan = []
    this.rpcDataChan = []
    this.rpcQueue = new queue2.SyncQueue()
    this.finish = new sync.WaitGroup()
    this.clientType = clientUnknown
    this.nextPushId = 0
    this.nextNotifyId = Number.MAX_SAFE_INTEGER
    this.Service = s2
    this.Start()
  }

  getNextNotifyId(): number {
    const id = this.nextNotifyId
    this.nextNotifyId--
    return id
  }

  getNextPushId(): number {
    const id = this.nextPushId
    this.nextPushId++
    return id
  }

  getAuthKeyId(ctx: context.Context): number {
    return this.authKeyId
  }

  getTempAuthKeyId(ctx: context.Context): number {
    return this.authKeyId
  }

  getPermAuthKeyId(ctx: context.Context): number {
    if (this.permAuthKeyId !== 0) {
      return this.permAuthKeyId
    }
    this.permAuthKeyId = this.Dao.GetCachePermAuthKeyId(context.Background(), this.authKeyId)
    return this.permAuthKeyId
  }

  setPermAuthKeyId(ctx: context.Context, kId: number): void {
    this.permAuthKeyId = kId
    if (kId !== 0) {
      this.permAuthKeyId = kId
      this.Dao.PutCachePermAuthKeyId(context.Background(), this.authKeyId, kId)
    }
  }

  getUserId(ctx: context.Context): number {
    return this.AuthUserId
  }

  setUserId(ctx: context.Context, userId: number): void {
    this.AuthUserId = userId
    this.onBindUser(userId)
  }

  getCacheSalt(ctx: context.Context): mtproto.TLFutureSalt | null {
    return this.cacheSalt
  }

  getLayer(ctx: context.Context): number {
    if (this.Layer === 0) {
      this.Layer = this.Dao.GetCacheApiLayer(ctx, this.authKeyId)
    }
    return this.Layer
  }

  setLayer(ctx: context.Context, layer: number): void {
    if (layer !== 0) {
      this.Layer = layer
      this.Dao.PutCacheApiLayer(ctx, this.authKeyId, layer)
    }
  }

  getClient(ctx: context.Context): string {
    if (this.Client === '') {
      this.Client = this.Dao.GetCacheClient(ctx, this.authKeyId)
    }
    return this.Client
  }

  setClient(ctx: context.Context, c: string): void {
    if (c !== '') {
      this.Client = c
      this.Dao.PutCacheClient(ctx, this.authKeyId, c)
    }
  }

  getLangpack(ctx: context.Context): string {
    if (this.Langpack === '') {
      this.Langpack = this.Dao.GetCacheLangpack(ctx, this.authKeyId)
    }
    return this.Langpack
  }

  setLangpack(ctx: context.Context, c: string): void {
    if (c !== '') {
      this.Langpack = c
      this.Dao.PutCacheLangpack(ctx, this.authKeyId, c)
    }
  }

  destroySession(ctx: context.Context, sessionId: number): boolean {
    if (this.sessions[sessionId] !== undefined) {
      delete this.sessions[sessionId]
    } else {
      return false
    }
    return true
  }

  sendToRpcQueue(ctx: context.Context, rpcMessage: rpcApiMessage): void {
    this.rpcQueue.Push(rpcMessage)
  }

  getPushSessionId(): number {
    if (this.pushSessionId === 0 && this.AuthUserId !== 0) {
      this.pushSessionId = this.Dao.GetCachePushSessionID(
        context.Background(),
        this.AuthUserId,
        this.authKeyId
      )
    }
    return this.pushSessionId
  }

  onBindUser(userId: number): void {
    this.state = userIdLoaded
    this.AuthUserId = userId
    this.getPushSessionId()
    if (this.Layer === 0) {
      const layer = this.Dao.GetCacheApiLayer(context.Background(), this.authKeyId)
      if (layer !== 0) {
        this.onBindLayer(layer)
      }
    }
  }

  onBindPushSessionId(ctx: context.Context, sessionId: number): void {
    if (this.pushSessionId === 0) {
      this.pushSessionId = sessionId
    }
    const sess = this.sessions[sessionId]
    if (sess !== undefined) {
      sess.isAndroidPush = true
      sess.cb.setOnline(ctx)
    }
  }

  onBindLayer(layer: number): void {
    this.Layer = layer
  }

  setOnline(ctx: context.Context): void {
    const date = Math.floor(Date.now() / 1000)
    if (
      (this.onlineExpired === 0 || date > this.onlineExpired - kPingAddTimeout) &&
      this.AuthUserId !== 0
    ) {
      logx.Infof(
        'DEBUG] setOnline - set online: (date: %d, userId:%d, onlineExpired: %d, authKeyId: %d)',
        date,
        this.AuthUserId,
        this.onlineExpired,
        this.authKeyId
      )

      this.Dao.StatusClient.StatusSetSessionOnline(
        context.Background(),
        new status.TLStatusSetSessionOnline({
          UserId: this.AuthUserId,
          Session: new status.SessionEntry({
            UserId: this.AuthUserId,
            AuthKeyId: this.authKeyId,
            Gateway: this.serverId,
            Expired: date + 60,
            Layer: this.getLayer(ctx),
            PermAuthKeyId: this.getPermAuthKeyId(ctx),
            Client: this.getClient(ctx),
          }),
        })
      )
      this.onlineExpired = date + 60
    } else {
      // ...
    }
  }

  trySetOffline(ctx: context.Context): void {
    for (const sess of Object.values(this.sessions)) {
      if (
        (sess.isGeneric && sess.sessionOnline()) ||
        (sess.isAndroidPush && sess.sessionOnline())
      ) {
        return
      }
    }
    if (this.AuthUserId > 0) {
      logx.Infof('authSessions]]>> offline: %s', this)
      this.Dao.StatusClient.StatusSetSessionOffline(
        context.Background(),
        new status.TLStatusSetSessionOffline({
          UserId: this.AuthUserId,
          AuthKeyId: this.authKeyId,
        })
      )
    }
    this.onlineExpired = 0
  }

  delOnline(): void {
    if (this.AuthUserId > 0) {
      logx.Infof('authSessions]]>> delOnline: %s', this)
      this.Dao.StatusClient.StatusSetSessionOffline(
        context.Background(),
        new status.TLStatusSetSessionOffline({
          UserId: this.AuthUserId,
          AuthKeyId: this.authKeyId,
        })
      )
    }
    this.onlineExpired = 0
  }

  String(): string {
    return `{auth_key_id: ${this.authKeyId}, user_id: ${this.AuthUserId}, layer: ${this.Layer}}`
  }

  Start(): void {
    this.running.Set(1)
    this.finish.Add(1)
    this.rpcRunLoop()
    this.runLoop()
  }

  Stop(): void {
    this.delOnline()
    this.running.Set(0)
    this.rpcQueue.Close()
  }

  runLoop(): void {
    const ticker = setInterval(() => {
      this.onTimer(context.Background())
    }, 1000)
    this.finish.Wait()
    clearInterval(ticker)
  }

  rpcRunLoop(): void {
    while (true) {
      const apiRequest = this.rpcQueue.Pop()
      if (apiRequest === null) {
        return
      } else {
        this.onRpcResult(context.Background(), apiRequest)
      }
    }
  }

  onTimer(ctx: context.Context): void {
    for (const sess of Object.values(this.sessions)) {
      if (
        (sess.isGeneric && sess.sessionOnline()) ||
        (sess.isAndroidPush && sess.sessionOnline())
      ) {
        this.setOnline(ctx)
      }
      sess.onTimer(ctx)
    }
    for (const sess of Object.values(this.sessions)) {
      if (!sess.sessionClosed()) {
        return
      }
    }
    this.DeleteByAuthKeyId(this.authKeyId)
  }

  sessionClientNew(ctx: context.Context, gatewayId: string, sessionId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.sessionDataChan.push(
        new connDataCtx(contextx.ValueOnlyFrom(ctx), new connData(true, gatewayId, sessionId))
      )
      resolve()
    })
  }

  sessionDataArrived(
    ctx: context.Context,
    gatewayId: string,
    clientIp: string,
    sessionId: number,
    salt: number,
    buf: number[]
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.sessionDataChan.push(
        new sessionDataCtx(
          contextx.ValueOnlyFrom(ctx),
          new sessionData(gatewayId, clientIp, sessionId, salt, buf)
        )
      )
      resolve()
    })
  }

  sessionHttpDataArrived(
    ctx: context.Context,
    gatewayId: string,
    clientIp: string,
    sessionId: number,
    salt: number,
    buf: number[],
    resChan: any[]
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.sessionDataChan.push(
        new sessionHttpDataCtx(
          contextx.ValueOnlyFrom(ctx),
          new sessionHttpData(gatewayId, clientIp, sessionId, salt, buf, resChan)
        )
      )
      resolve()
    })
  }

  sessionClientClosed(ctx: context.Context, gatewayId: string, sessionId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.sessionDataChan.push(
        new connDataCtx(contextx.ValueOnlyFrom(ctx), new connData(false, gatewayId, sessionId))
      )
      resolve()
    })
  }

  syncRpcResultDataArrived(
    ctx: context.Context,
    sessionId: number,
    clientMsgId: number,
    data: number[]
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.sessionDataChan.push(
        new syncRpcResultDataCtx(
          contextx.ValueOnlyFrom(ctx),
          new syncRpcResultData(sessionId, clientMsgId, data)
        )
      )
      resolve()
    })
  }

  syncSessionDataArrived(
    ctx: context.Context,
    sessionId: number,
    data: messageData
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.sessionDataChan.push(
        new syncSessionDataCtx(contextx.ValueOnlyFrom(ctx), new syncSessionData(sessionId, data))
      )
      resolve()
    })
  }

  syncDataArrived(
    ctx: context.Context,
    needAndroidPush: boolean,
    data: messageData
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.sessionDataChan.push(
        new syncDataCtx(contextx.ValueOnlyFrom(ctx), new syncData(needAndroidPush, data))
      )
      resolve()
    })
  }

  onSessionNew(ctx: context.Context, connMsg: connData): void {
    let sess = this.sessions[connMsg.sessionId]
    if (sess === undefined) {
      sess = new session(connMsg.sessionId, this)
      this.sessions[connMsg.sessionId] = sess
    } else {
      sess.sessionState = kSessionStateNew
    }
    sess.onSessionConnNew(ctx, connMsg.gatewayId)
  }

  onSessionData(ctx: context.Context, sessionMsg: sessionData): void {
    let err: Error | null
    let message2: mtproto.TLMessage2
    let now: number

    try {
      message2 = new mtproto.TLMessage2()
      now = Math.floor(Date.now() / 1000)

      message2.Decode(mtproto.NewDecodeBuf(sessionMsg.buf))
      if (this.cacheSalt === null) {
        ;[this.cacheSalt, this.cacheLastSalt] = this.Dao.GetOrFetchNewSalt(ctx, this.authKeyId)
      } else {
        if (now >= this.cacheSalt.GetValidUntil()) {
          ;[this.cacheSalt, this.cacheLastSalt] = this.Dao.GetOrFetchNewSalt(ctx, this.authKeyId)
        }
      }
      if (this.cacheSalt === null) {
        logx
          .WithContext(ctx)
          .Infof(
            'onSessionData - getOrFetchNewSalt nil error, data: {sessions: %s, conn_id: %s}',
            this,
            sessionMsg.gatewayId
          )
        return
      }
      let sess = this.sessions[sessionMsg.sessionId]
      if (sess === undefined) {
        sess = new session(sessionMsg.sessionId, this)
        this.sessions[sessionMsg.sessionId] = sess
      }
      sess.onSessionConnNew(ctx, sessionMsg.gatewayId)
      sess.onSessionMessageData(
        ctx,
        sessionMsg.gatewayId,
        sessionMsg.clientIp,
        sessionMsg.salt,
        message2
      )
    } catch (e) {
      err = e
      logx
        .WithContext(ctx)
        .Errorf(
          'onSessionData - error: {%s}, data: {sessions: %s, gate_id: %d}',
          err,
          this,
          sessionMsg.gatewayId
        )
    }
  }

  onSessionHttpData(ctx: context.Context, sessionMsg: sessionHttpData): void {
    let err: Error | null
    let message2: mtproto.TLMessage2
    let now: number

    try {
      message2 = new mtproto.TLMessage2()
      now = Math.floor(Date.now() / 1000)

      message2.Decode(mtproto.NewDecodeBuf(sessionMsg.buf))
      if (this.cacheSalt === null) {
        ;[this.cacheSalt, this.cacheLastSalt] = this.Dao.GetOrFetchNewSalt(
          context.Background(),
          this.authKeyId
        )
      } else {
        if (now >= this.cacheSalt.GetValidUntil()) {
          ;[this.cacheSalt, this.cacheLastSalt] = this.Dao.GetOrFetchNewSalt(
            context.Background(),
            this.authKeyId
          )
        }
      }
      if (this.cacheSalt === null) {
        logx
          .WithContext(ctx)
          .Errorf(
            'onSessionData - getOrFetchNewSalt nil error, data: {sessions: %s, conn_id: %s}',
            this,
            sessionMsg.gatewayId
          )
        return
      }
      let sess = this.sessions[sessionMsg.sessionId]
      if (sess === undefined) {
        sess = new session(sessionMsg.sessionId, this)
        this.sessions[sessionMsg.sessionId] = sess
      }
      sess.isHttp = true
      sess.httpQueue.Push(sessionMsg.resChannel)
      sess.onSessionConnNew(ctx, sessionMsg.gatewayId)
      sess.onSessionMessageData(
        ctx,
        sessionMsg.gatewayId,
        sessionMsg.clientIp,
        sessionMsg.salt,
        message2
      )
    } catch (e) {
      err = e
      logx
        .WithContext(ctx)
        .Errorf(
          'onSessionData - error: {%s}, data: {sessions: %s, gate_id: %d}',
          err,
          this,
          sessionMsg.gatewayId
        )
    }
  }

  onSessionClosed(ctx: context.Context, connMsg: connData): void {
    const sess = this.sessions[connMsg.sessionId]
    if (sess === undefined) {
      logx
        .WithContext(ctx)
        .Errorf('onSessionClosed - session conn closed -  conn: %s', connMsg.DebugString())
    } else {
      logx
        .WithContext(ctx)
        .Infof('onSessionClosed - conn: %s, sess: %s', connMsg.DebugString(), sess)
      sess.onSessionConnClose(ctx, connMsg.gatewayId)
    }
  }

  onSyncRpcResultData(ctx: context.Context, syncMsg: syncRpcResultData): void {
    logx.WithContext(ctx).Infof('onSyncRpcResultData - receive data: {sess: %s}', this)
    const sess = this.sessions[syncMsg.sessionId]
    if (sess !== undefined) {
      sess.onSyncRpcResultData(ctx, syncMsg.clientMsgId, syncMsg.data)
    }
  }

  onSyncSessionData(ctx: context.Context, syncMsg: syncSessionData): void {
    logx.WithContext(ctx).Infof('onSyncSessionData - receive data: {sess: %s}', this)
    const sess = this.sessions[syncMsg.sessionId]
    if (sess !== undefined) {
      sess.onSyncSessionData(ctx, syncMsg.data.obj)
    }
  }

  onSyncData(ctx: context.Context, syncMsg: syncData): void {
    logx.WithContext(ctx).Info('authSessions - ', typeof syncMsg.data.obj)
    if (syncMsg.data.obj instanceof mtproto.Updates) {
      if (syncMsg.data.obj.PredicateName === mtproto.Predicate_updateAccountResetAuthorization) {
        logx
          .WithContext(ctx)
          .Infof('recv updateAccountResetAuthorization - ', typeof syncMsg.data.obj)
        if (this.AuthUserId !== syncMsg.data.obj.GetUserId()) {
          logx.WithContext(ctx).Errorf('upds -- ', syncMsg.data.obj)
        }
        this.Dao.PutCacheUserId(context.Background(), this.authKeyId, 0)
        this.DeleteByAuthKeyId(this.authKeyId)
        this.AuthUserId = 0
        return
      } else {
        // ...
      }
    }
    for (const sess of Object.values(this.sessions)) {
      if (sess.isGeneric) {
        sess.onSyncData(ctx, syncMsg.data.obj)
      }
      if (sess.isAndroidPush) {
        if (syncMsg.needAndroidPush) {
          sess.onSyncData(ctx, null)
        }
      }
    }
  }
}

class Service {
  Dao: any
  serverId: any
  DeleteByAuthKeyId: any

  constructor(Dao: any, serverId: any, DeleteByAuthKeyId: any) {
    this.Dao = Dao
    this.serverId = serverId
    this.DeleteByAuthKeyId = DeleteByAuthKeyId
  }
}

class session {
  sessionId: number
  isGeneric: boolean
  isAndroidPush: boolean
  sessionState: number
  cb: any
  httpQueue: queue2.SyncQueue
  Service: Service

  constructor(sessionId: number, authSessions: authSessions) {
    this.sessionId = sessionId
    this.isGeneric = false
    this.isAndroidPush = false
    this.sessionState = kSessionStateNone
    this.cb = new sessionCallback(authSessions)
    this.httpQueue = new queue2.SyncQueue()
    this.Service = authSessions.Service
  }

  onSessionConnNew(ctx: context.Context, gatewayId: string): void {
    this.cb.onSessionConnNew(ctx, gatewayId)
  }

  onSessionConnClose(ctx: context.Context, gatewayId: string): void {
    this.cb.onSessionConnClose(ctx, gatewayId)
  }

  onSessionMessageData(
    ctx: context.Context,
    gatewayId: string,
    clientIp: string,
    salt: number,
    message2: mtproto.TLMessage2
  ): void {
    this.cb.onSessionMessageData(ctx, gatewayId, clientIp, salt, message2)
  }

  onSyncRpcResultData(ctx: context.Context, clientMsgId: number, data: number[]): void {
    this.cb.onSyncRpcResultData(ctx, clientMsgId, data)
  }

  onSyncSessionData(ctx: context.Context, data: mtproto.TLObject): void {
    this.cb.onSyncSessionData(ctx, data)
  }

  onSyncData(ctx: context.Context, data: mtproto.TLObject | null): void {
    this.cb.onSyncData(ctx, data)
  }

  sessionOnline(): boolean {
    return this.cb.sessionOnline()
  }

  sessionClosed(): boolean {
    return this.cb.sessionClosed()
  }

  onTimer(ctx: context.Context): void {
    this.cb.onTimer(ctx)
  }
}

class sessionCallback {
  authSessions: authSessions

  constructor(authSessions: authSessions) {
    this.authSessions = authSessions
  }

  onSessionConnNew(ctx: context.Context, gatewayId: string): void {
    this.authSessions.Service.Dao.SessionClientNew(
      ctx,
      gatewayId,
      this.authSessions.authKeyId,
      this.authSessions.authKeyId
    )
  }

  onSessionConnClose(ctx: context.Context, gatewayId: string): void {
    this.authSessions.Service.Dao.SessionClientClosed(
      ctx,
      gatewayId,
      this.authSessions.authKeyId,
      this.authSessions.authKeyId
    )
  }

  onSessionMessageData(
    ctx: context.Context,
    gatewayId: string,
    clientIp: string,
    salt: number,
    message2: mtproto.TLMessage2
  ): void {
    this.authSessions.Service.Dao.SessionDataArrived(
      ctx,
      gatewayId,
      clientIp,
      this.authSessions.authKeyId,
      salt,
      message2.Encode()
    )
  }

  onSyncRpcResultData(ctx: context.Context, clientMsgId: number, data: number[]): void {
    this.authSessions.Service.Dao.SyncRpcResultDataArrived(
      ctx,
      this.authSessions.authKeyId,
      clientMsgId,
      data
    )
  }

  onSyncSessionData(ctx: context.Context, data: mtproto.TLObject): void {
    this.authSessions.Service.Dao.SyncSessionDataArrived(ctx, this.authSessions.authKeyId, data)
  }

  onSyncData(ctx: context.Context, data: mtproto.TLObject | null): void {
    this.authSessions.Service.Dao.SyncDataArrived(ctx, this.authSessions.authKeyId, data)
  }

  sessionOnline(): boolean {
    return this.authSessions.Service.Dao.SessionOnline(this.authSessions.authKeyId)
  }

  sessionClosed(): boolean {
    return this.authSessions.Service.Dao.SessionClosed(this.authSessions.authKeyId)
  }

  onTimer(ctx: context.Context): void {
    this.authSessions.Service.Dao.OnTimer(ctx, this.authSessions.authKeyId)
  }
}

const kSessionStateNone = 0
const kSessionStateNew = 1
const kPingAddTimeout = 60
const clientUnknown = 0

class messageData {
  obj: mtproto.TLObject

  constructor(obj: mtproto.TLObject) {
    this.obj = obj
  }
}
