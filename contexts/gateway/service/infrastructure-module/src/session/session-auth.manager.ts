import type { MTProtoAuthKey } from '@monstrs/mtproto-core'

import { Injectable }          from '@nestjs/common'

export interface SessionAuthManagerSessionData {
  sessionId: bigint
  connectionIds: Set<string>
}

export interface SessionAuthManagerSession {
  authKey: MTProtoAuthKey
  sessions: Array<SessionAuthManagerSessionData>
}

@Injectable()
export class SessionAuthManager {
  #sessions: Map<bigint, SessionAuthManagerSession> = new Map()

  addNewSession(authKey: MTProtoAuthKey, sessionId: bigint, connectionId: string): boolean {
    if (this.#sessions.has(authKey.authKeyId)) {
      const sessionData = this.#sessions
        .get(authKey.authKeyId)!
        .sessions.find((sd) => sd.sessionId === sessionId)

      if (sessionData) {
        sessionData.connectionIds.add(connectionId)

        return false
      }

      this.#sessions.get(authKey.authKeyId)!.sessions.push({
        sessionId,
        connectionIds: new Set([connectionId]),
      })

      return true
    }

    this.#sessions.set(authKey.authKeyId, {
      authKey,
      sessions: [
        {
          sessionId,
          connectionIds: new Set([connectionId]),
        },
      ],
    })

    return true
  }

  findSessionConnectionIds(
    authKeyId: bigint,
    sessionId: bigint
  ): { authKey: MTProtoAuthKey; connectionIds: Set<string> } | undefined {
    if (this.#sessions.has(authKeyId)) {
      const { authKey, sessions } = this.#sessions.get(authKeyId)!
      const session = sessions.find((s) => s.sessionId === sessionId)

      if (session) {
        return {
          authKey,
          connectionIds: session.connectionIds,
        }
      }
    }

    return undefined
  }
}
