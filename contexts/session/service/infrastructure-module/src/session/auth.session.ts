import type { Session } from './session.js'

export enum AuthSessionState {
  USER_ID_LOADED = 3,
}

export class AuthSession {
  #state?: AuthSessionState

  #layer: number = 0

  #authUserId: bigint = 0n

  #sessions: Map<bigint, Session> = new Map()

  getState(): AuthSessionState | undefined {
    return this.#state
  }

  setLayer(layer: number): void {
    this.#layer = layer
  }

  getLayer(): number {
    return this.#layer
  }

  getUserId(): bigint {
    return this.#authUserId
  }

  setUserId(userId: bigint): void {
    this.#state = AuthSessionState.USER_ID_LOADED
    this.#authUserId = userId
  }

  hasSessionById(sessionId: bigint): boolean {
    return this.#sessions.has(sessionId)
  }

  getSessionById(sessionId: bigint): Session | undefined {
    return this.#sessions.get(sessionId)
  }

  setSessionById(sessionId: bigint, session: Session): void {
    this.#sessions.set(sessionId, session)
  }
}
