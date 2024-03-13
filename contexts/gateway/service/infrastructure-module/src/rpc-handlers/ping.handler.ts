import type { TLRpcMetadata } from '../interfaces/index.js'

import * as Transport         from '@chats-system/transport'

import { TLRpcHandler }       from '../decorators/index.js'

@TLRpcHandler(Transport.Ping)
export class PingHandler {
  async execute(request: Transport.Ping, metadata: TLRpcMetadata): Promise<Transport.Pong> {
    return new Transport.Pong({
      pingId: request.pingId,
      msgId: metadata.clientMessageId,
    })
  }
}
