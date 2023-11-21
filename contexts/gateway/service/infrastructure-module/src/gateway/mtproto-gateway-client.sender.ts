import type { WebSocketServer }       from 'ws'

import { MTProtoRawMessage }          from '@monstrs/mtproto-core'
import { MTProtoEncryptedRawMessage } from '@monstrs/mtproto-core'
import { Injectable }                 from '@nestjs/common'

import { SessionAuthManager }         from '../session/index.js'

@Injectable()
export class MTProtoGatewayClientSender {
  #server: WebSocketServer

  constructor(private readonly sessionAuthManager: SessionAuthManager) {}

  setServer(server: WebSocketServer): void {
    this.#server = server
  }

  sendToClient(authKeyId: bigint, sessionId: bigint, message: any): void {
    const session = this.sessionAuthManager.findSessionConnectionIds(authKeyId, sessionId)

    if (session) {
      session.connectionIds.forEach((connectionId) => {
        this.#server.clients.forEach(async (client) => {
          if ((client as any).id === connectionId) {
            const connection = client as any

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
