import type { MTProtoCodec }          from '@monstrs/mtproto-core'
import type { WebSocket }             from 'ws'

import { MTProtoRawMessage }          from '@monstrs/mtproto-core'
import { MTProtoEncryptedRawMessage } from '@monstrs/mtproto-core'
import { Injectable }                 from '@nestjs/common'

import { SessionAuthManager }         from '../session/index.js'

type MTProtoConnection = WebSocket & {
  id: string
  codec: MTProtoCodec
}

@Injectable()
export class ConnectionRegistry {
  #connections: Map<string, MTProtoConnection> = new Map()

  constructor(private readonly sessionAuthManager: SessionAuthManager) {}

  addConnection(id: string, connection: MTProtoConnection): void {
    this.#connections.set(id, connection)
  }

  removeConnection(id: string): void {
    this.#connections.delete(id)
  }

  async sendToClient(authKeyId: bigint, sessionId: bigint, message: Buffer): Promise<void> {
    const session = this.sessionAuthManager.findSessionConnectionIds(authKeyId, sessionId)

    if (session) {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      session.connectionIds.forEach(async (connectionId): Promise<void> => {
        const connection = this.#connections.get(connectionId)

        if (connection) {
          connection.send(
            await connection.codec.send(
              await new MTProtoRawMessage(
                new MTProtoEncryptedRawMessage(session.authKey, Buffer.from(message))
              ).encode()
            )
          )
        }
      })
    }
  }
}
