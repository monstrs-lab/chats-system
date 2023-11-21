import { setTimeout }      from 'node:timers/promises'

import { Logger }          from '@monstrs/logger'
import { BinaryReader }    from '@monstrs/mtproto-extensions'

import { TLFutureSalt }    from '@chats-system/core-rpc'
import { SchemaRegistry }  from '@chats-system/operations'

import { AuthCache }       from '../cache/index.js'
import { ConnectionData }  from '../data/index.js'
import { SessionData }     from '../data/index.js'
import { AuthSession }     from './auth.session.js'
import { ConnectionState } from './auth.session.js'
import { SessionState }    from './auth.session.js'

export const K_PING_ADD_TIMEOUT = 60

export enum AuthSessionsState {
  USER_ID_LOADED = 3,
}

export class AuthSessions {
  #logger = new Logger(AuthSessions.name)

  public cache: AuthCache

  private authKeyId: bigint

  private permAuthKeyId: bigint

  private pushSessionId: bigint

  private running: boolean = false

  private finish: boolean = false

  private nextPushId = 0

  private layer: number = 0

  private authUserId: bigint = BigInt(0)

  private nextNotifyId = Number.MAX_SAFE_INTEGER

  private sessionDataChan: Array<ConnectionData | SessionData> = []

  private rpcDataChan: Array<any> = []

  private rpcQueue: Array<any> = []

  private sessions: Map<bigint, AuthSession> = new Map()

  private cacheSalt?: TLFutureSalt

  private cacheLastSalt?: TLFutureSalt

  private client?: string

  private langpack?: string

  private state?: AuthSessionsState

  private onlineExpired: number

  constructor(authKeyId: bigint, cache: AuthCache) {
    this.authKeyId = authKeyId
    this.cache = cache

    this.start()
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

  getAuthKeyId(): bigint {
    return this.authKeyId
  }

  getTempAuthKeyId(): bigint {
    return this.authKeyId
  }

  async getPermAuthKeyId(): Promise<bigint> {
    if (this.permAuthKeyId && this.permAuthKeyId !== BigInt(0)) {
      return this.permAuthKeyId
    }

    this.permAuthKeyId = await this.cache.getPermAuthKeyId(this.authKeyId)

    return this.permAuthKeyId
  }

  setPermAuthKeyId(kId: bigint): void {
    this.permAuthKeyId = kId

    if (kId !== BigInt(0)) {
      this.permAuthKeyId = kId
      this.cache.putPermAuthKeyId(this.authKeyId, kId)
    }
  }

  getUserId(): bigint {
    return this.authUserId
  }

  async setUserId(userId: bigint): Promise<void> {
    this.authUserId = userId

    await this.onBindUser(userId)
  }

  getCacheSalt(): TLFutureSalt | undefined {
    return this.cacheSalt
  }

  async getLayer(): Promise<number> {
    if (this.layer === 0) {
      this.layer = await this.cache.getApiLayer(this.authKeyId)
    }

    return this.layer
  }

  setLayer(layer: number): void {
    if (layer) {
      this.cache.putApiLayer(this.authKeyId, layer)
      this.layer = layer
    }
  }

  async getClient(): Promise<string> {
    if (!this.client) {
      this.client = await this.cache.getClient(this.authKeyId)
    }

    return this.client
  }

  setClient(c: string): void {
    if (c) {
      this.client = c
      this.cache.putClient(this.authKeyId, c)
    }
  }

  async getLangPack(): Promise<string> {
    if (!this.langpack) {
      this.langpack = await this.cache.getLangPack(this.authKeyId)
    }

    return this.langpack
  }

  setLangPack(langpack: string): void {
    if (langpack) {
      this.langpack = langpack
      this.cache.putLangPack(this.authKeyId, langpack)
    }
  }

  destroySession(sessionId: bigint): boolean {
    if (this.sessions.has(sessionId)) {
      this.sessions.delete(sessionId)

      return true
    }

    return false
  }

  //sendToRpcQueue(rpcMessage: rpcApiMessage): void {
  //  this.rpcQueue.Push(rpcMessage)
  //}

  async getPushSessionId(): Promise<bigint> {
    if (!this.pushSessionId && this.authUserId !== BigInt(0)) {
      this.pushSessionId = await this.cache.getPushSessionID(this.authUserId, this.authKeyId)
    }

    return this.pushSessionId
  }

  setOnline(): void {
    const date = Math.floor(Date.now() / 1000)
    if (
      (this.onlineExpired || date > this.onlineExpired - K_PING_ADD_TIMEOUT) &&
      this.authUserId &&
      this.authUserId !== BigInt(0)
    ) {
      // status

      this.onlineExpired = date + 60
    }
  }

  start() {
    this.running = true
    this.finish = true

    this.runLoop()
    //this.runRpcLoop()
  }

  stop() {
    //this.deleteOnline()
    this.running = false
  }

  async runLoop(): Promise<void> {
    while (this.running) {
      //&& this.sessionDataChan.length > 0
      try {
        await this.process()
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }
      }
    }
  }

  async runRpcLoop(): Promise<void> {
    while (this.running) {
      try {
      } catch (error) {
        if (error instanceof Error) {
          this.#logger.error(error)
        }
      }
    }
  }

  async process(): Promise<void> {
    const message = this.sessionDataChan.shift() // || this.rpcDataChan.shift()

    if (message) {
      if (message instanceof SessionData) {
        await this.onSessionData(message)
      } else if (message instanceof ConnectionData) {
        if (message.isNew) {
          await this.onSessionNew(message)
        } else {
          await this.onSessionClosed(message)
        }
      }
    } else {
      await setTimeout(1000)
      //await this.onTimer()
    }
  }

  sessionClientNew(gatewayId: string, sessionId: bigint): void {
    this.sessionDataChan.push(new ConnectionData(true, gatewayId, sessionId))
  }

  sessionDataArrived(
    gatewayId: string,
    clientIp: string,
    sessionId: bigint,
    salt: bigint,
    buf: Uint8Array
  ): void {
    this.sessionDataChan.push(new SessionData(gatewayId, clientIp, sessionId, salt, buf))
  }

  async onBindUser(userId: bigint): Promise<void> {
    this.state = AuthSessionsState.USER_ID_LOADED
    this.authUserId = userId

    await this.getPushSessionId()

    if (this.layer === 0) {
      const layer = await this.cache.getApiLayer(this.authKeyId)

      if (layer !== 0) {
        this.onBindLayer(layer)
      }
    }
  }

  onBindLayer(layer: number): void {
    this.layer = layer
  }

  onBindPushSessionId(sessionId: bigint): void {
    if (this.pushSessionId === BigInt(0)) {
      this.pushSessionId = sessionId
    }

    if (this.sessions.has(sessionId)) {
      //this.sessions.get(sessionId)
      //sess.isAndroidPush = true
      //sess.cb.setOnline(ctx)
    }
  }

  async onTimer(): Promise<void> {
    for await (let [_, session] of this.sessions) {
      if (session.isGeneric() && session.isOnline()) {
        await this.setOnline()
      }

      await session.onTimer()
    }

    for (let [_, session] of this.sessions) {
      if (!session.isClosed()) {
        return
      }
    }

    this.stop()
    //DeleteByAuthKeyId(this.authKeyId)
  }

  async onSessionNew(connectionData: ConnectionData): Promise<void> {
    if (!this.sessions.has(connectionData.sessionId)) {
      this.sessions.set(connectionData.sessionId, new AuthSession(connectionData.sessionId, this))
    } else {
      this.sessions.get(connectionData.sessionId)!.setSessionState(SessionState.NEW)
    }

    await this.sessions.get(connectionData.sessionId)!.onConnectionNew(connectionData.gatewayId)
  }

  async onSessionClosed(connectionData: ConnectionData): Promise<void> {
    if (this.sessions.has(connectionData.sessionId)) {
      //'onSessionClosed - conn: %s, sess: %s', connMsg.DebugString(), sess
      await this.sessions.get(connectionData.sessionId)!.onConnectionClose(connectionData.gatewayId)
    } else {
      //'onSessionClosed - session conn closed -  conn: %s', connMsg.DebugString()
    }
  }

  async onSessionData(sessionData: SessionData): Promise<void> {
    if (!this.sessions.has(sessionData.sessionId)) {
      this.sessions.set(sessionData.sessionId, new AuthSession(sessionData.sessionId, this))
    }

    const session = this.sessions.get(sessionData.sessionId)!

    try {
      const reader = new BinaryReader<any>(Buffer.from(sessionData.payload), SchemaRegistry)

      const messageId = reader.readLong()
      const seqNo = reader.readInt()
      const messageLength = reader.readInt()

      const message = reader.readObject()

      await session.onConnectionNew(sessionData.gatewayId)
      await session.onConnnectionMessageData(
        sessionData.gatewayId,
        sessionData.clientIp,
        sessionData.salt,
        {
          messageId,
          seqNo,
          messageLength,
          message,
        }
      )
    } catch (error) {
      console.log(error, 'safdad')
    }
  }

  sendToRpcQueue(message: any) {
    this.rpcQueue.push(message)
  }
}
