import type { TLRpcSession }  from '@chats-system/tl-rpc'
import type { TLRpcMetadata } from '@chats-system/tl-rpc'

import { PeerType }           from '@chats-system/messages-rpc-client'
import { TLRpcHandler }       from '@chats-system/tl-rpc'
import { client }             from '@chats-system/messages-rpc-client'
import TL                     from '@chats-system/tl'

@TLRpcHandler(TL.messages.SendMessage)
export class MessagesSendMessageHandler {
  async execute(
    request: TL.messages.SendMessage,
    __: TLRpcSession,
    metadata: TLRpcMetadata
  ): Promise<TL.Updates> {
    await client.sendMessage({
      userId: metadata.userId,
      peer: this.getPeer(request.peer),
      message: {
        ...request,
        message: {
          message: request.message,
          date: Math.floor(Date.now() / 1000),
        },
      },
    })

    return new TL.Updates({
      updates: [],
      users: [],
      chats: [],
      date: Math.floor(Date.now() / 1000),
      seq: 0,
    })
  }

  protected getPeer(inputPeer: TL.TypeInputPeer): {
    peerId: bigint
    peerType: PeerType
    accessHash?: bigint
  } {
    if (inputPeer instanceof TL.InputPeerUser) {
      return {
        peerType: PeerType.USER,
        peerId: inputPeer.userId,
        accessHash: inputPeer.accessHash,
      }
    }

    if (inputPeer instanceof TL.InputPeerChat) {
      return {
        peerType: PeerType.CHAT,
        peerId: inputPeer.chatId,
      }
    }

    throw new Error('Invalid peer type')
  }
}
