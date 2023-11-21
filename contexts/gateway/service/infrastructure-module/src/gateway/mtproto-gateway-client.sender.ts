import type { MTProtoState }          from '@monstrs/mtproto-core'
import type { WebSocketServer }       from 'ws'
import type { WebSocket }             from 'ws'

import { MTProtoRawMessage }          from '@monstrs/mtproto-core'
import { MTProtoEncryptedRawMessage } from '@monstrs/mtproto-core'
import { Injectable }                 from '@nestjs/common'

import { SessionAuthManager }         from '../session/index.js'

@Injectable()
export class MTProtoGatewayClientSender {
  #server!: WebSocketServer

  constructor(private readonly sessionAuthManager: SessionAuthManager) {}

  setServer(server: WebSocketServer): void {
    this.#server = server
  }

  sendToClient(authKeyId: bigint, sessionId: bigint, message: Buffer): void {
    const session = this.sessionAuthManager.findSessionConnectionIds(authKeyId, sessionId)

    if (session) {
      session.connectionIds.forEach((connectionId) => {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        this.#server.clients.forEach(async (client) => {
          const connection = client as WebSocket & {
            id: string
            state: MTProtoState
          }

          if (connection.id === connectionId) {
            connection.send(
              await connection.state.codec.send(
                new MTProtoRawMessage(
                  new MTProtoEncryptedRawMessage(session.authKey, Buffer.from(message))
                )
              )
            )
          }
        })
      })
    }
  }
}
