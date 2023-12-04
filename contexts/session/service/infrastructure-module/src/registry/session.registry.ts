import { Injectable } from '@nestjs/common'

export interface UserSession {
  authKeyId: bigint
  sessionId: bigint
  gatewayId: string
  clientIp: string
}

@Injectable()
export class SessionRegistry {
  protected readonly sessions = new Map<bigint, UserSession>()

  set(userId: bigint, userSession: UserSession): void {
    if (!this.sessions.has(userId)) {
      this.sessions.set(userId, userSession)
    }
  }

  get(userId: bigint): UserSession | undefined {
    return this.sessions.get(userId)
  }
}
