import type { TLRpcSession }  from '@chats-system/tl-rpc'
import type { TLRpcMetadata } from '@chats-system/tl-rpc'

import { BoolTrue }           from '@chats-system/tl'
import { TLRpcHandler }       from '@chats-system/tl-rpc'
import TL                     from '@chats-system/tl'

import { SessionPort }        from '../ports/index.js'

@TLRpcHandler(TL.messages.SetTyping)
export class MessageSetTypingHandler {
  constructor(private readonly sessionPort: SessionPort) {}

  async execute(
    request: TL.messages.SetTyping,
    __: TLRpcSession,
    metadata: TLRpcMetadata
  ): Promise<InstanceType<typeof BoolTrue>> {
    if (request.peer instanceof TL.InputPeerUser) {
      await this.sessionPort.send(
        request.peer.userId,
        new TL.UpdateShort({
          update: new TL.UpdateUserTyping({
            userId: metadata.userId,
            action: request.action,
          }),
          date: Math.floor(Date.now() / 1000),
        })
      )
    } else {
      throw new Error('Unknown peer')
    }

    return new BoolTrue()
  }
}
