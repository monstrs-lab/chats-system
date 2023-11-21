import { Injectable }  from '@nestjs/common'

import { AuthSession } from './auth.session.js'

@Injectable()
export class SessionsManager {
  private sessions = new Map<bigint, AuthSession>()

  getByAuthKeyId(authKeyId: bigint): AuthSession | undefined {
    return this.sessions.get(authKeyId)
  }

  hasByAuthKeyId(authKeyId: bigint): boolean {
    return this.sessions.has(authKeyId)
  }

  setByAuthKeyId(authKeyId: bigint, authSessions: AuthSession): void {
    this.sessions.set(authKeyId, authSessions)
  }
}
