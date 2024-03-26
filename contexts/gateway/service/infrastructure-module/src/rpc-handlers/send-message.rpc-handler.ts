import type { TLRpcMetadata } from '../interfaces/index.js'

import * as Transport         from '@chats-system/transport'
import { MessagesClient }     from '@chats-system/messages-client-module'
import { PeerType }           from '@chats-system/messages-client-module'

import { TLRpcHandler }       from '../decorators/index.js'

@TLRpcHandler(Transport.SendMessage)
export class SendMessageHandler {
  constructor(private readonly client: MessagesClient) {}

  async execute(
    request: Transport.SendMessage,
    metadata: TLRpcMetadata
  ): Promise<Transport.SentMessage> {
    await this.client.sendMessage({
      fromId: metadata.userId,
      randomId: request.randomId,
      peerId: request.peer.userId,
      peerType: PeerType.USER,
      message: request.message,
    })

    return new Transport.SentMessage({})
  }
}
