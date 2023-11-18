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
  #sessions: Map<bigint, SessionAuthManagerSession>

  constructor() {
    this.#sessions = new Map()
  }

  addNewSession(authKey: MTProtoAuthKey, sessionId: bigint, connectionId: string): boolean {
    if (this.#sessions.has(authKey.id)) {
      const sessionData = this.#sessions
        .get(authKey.id)!
        .sessions.find((sd) => sd.sessionId === sessionId)

      if (sessionData) {
        sessionData.connectionIds.add(connectionId)

        return false
      }

      this.#sessions.get(authKey.id)!.sessions.push({
        sessionId,
        connectionIds: new Set([connectionId]),
      })

      return true
    }

    this.#sessions.set(authKey.id, {
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
}
