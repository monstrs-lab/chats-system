import { AuthSessions } from './auth.sessions.js'

export class SessionsManager {
  private static sessions = new Map<bigint, AuthSessions>()

  static getByAuthKeyId(authKeyId: bigint): AuthSessions | undefined {
    return SessionsManager.sessions.get(authKeyId)
  }

  static hasByAuthKeyId(authKeyId: bigint): boolean {
    return SessionsManager.sessions.has(authKeyId)
  }

  static setByAuthKeyId(authKeyId: bigint, authSessions: AuthSessions): void {
    SessionsManager.sessions.set(authKeyId, authSessions)
  }
}
