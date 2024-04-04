import type { PartialMessage }       from '@bufbuild/protobuf'
import type { ListDialogsResponse }  from '@chats-system/messages-rpc-client'
import type { ListMessagesResponse } from '@chats-system/messages-rpc-client'
import type { MessagesService }      from '@chats-system/messages-rpc-client'
import type { PeerType }             from '@chats-system/messages-rpc-client'
import type { SendMessageRequest }   from '@chats-system/messages-rpc-client'
import type { SendMessageResponse }  from '@chats-system/messages-rpc-client'
import type { PromiseClient }        from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                    from '@nestjs/common'
import { Injectable }                from '@nestjs/common'

import { DialogId }                  from '@chats-system/messages-domain-module'

import { MESSAGES_CLIENT_TOKEN }     from '../constants/index.js'

@Injectable()
export class MessagesClient {
  constructor(
    @Inject(MESSAGES_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof MessagesService>
  ) {}

  async sendMessage(request: PartialMessage<SendMessageRequest>): Promise<SendMessageResponse> {
    return this.client.sendMessage(request)
  }

  async listUserDialogs(userId: bigint, take = 100, offset = 0): Promise<ListDialogsResponse> {
    return this.client.listDialogs({
      pager: {
        take,
        offset,
      },
      query: {
        userId: {
          conditions: {
            eq: {
              value: userId,
            },
          },
        },
      },
    })
  }

  async listUserPeerMessages(
    userId: bigint,
    peerType: PeerType,
    peerId: bigint,
    take = 100,
    offset = 0
  ): Promise<ListMessagesResponse> {
    const dialogId = DialogId.create(peerType, userId, peerId)

    return this.client.listMessages({
      pager: {
        take,
        offset,
      },
      query: {
        userId: {
          conditions: {
            eq: {
              value: userId,
            },
          },
        },
        dialogId1: {
          conditions: {
            eq: {
              value: dialogId.a,
            },
          },
        },
        dialogId2: {
          conditions: {
            eq: {
              value: dialogId.b,
            },
          },
        },
      },
    })
  }
}
