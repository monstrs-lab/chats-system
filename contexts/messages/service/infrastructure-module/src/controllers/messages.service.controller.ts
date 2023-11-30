/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { GetDialogsRequest, GetHistoryRequest, SendMessageRequest }      from '@chats-system/messages-rpc'
import type { ServiceImpl }            from '@connectrpc/connect'

import { CreateRequestContext }        from '@mikro-orm/core'
import { MikroORM }                    from '@mikro-orm/core'
import { ConnectRpcMethod }            from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }           from '@monstrs/nestjs-connectrpc'
import { Controller }                  from '@nestjs/common'

import { MessagesUseCases }                from '@chats-system/messages-application-module'
import { GetDialogsResponse, GetHistoryResponse }             from '@chats-system/messages-rpc'
import { SendMessageResponse }          from '@chats-system/messages-rpc'
import { MessagesService }                 from '@chats-system/messages-rpc'
import { PeerType } from '@chats-system/core-rpc'

@Controller()
@ConnectRpcService(MessagesService)
export class MessagesServiceController implements ServiceImpl<typeof MessagesService> {
  constructor(
    private readonly messagesUseCases: MessagesUseCases,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    // @ts-expect-error
    const messages = await this.messagesUseCases.createMessage.execute(request.userId, request.peer!, request.message!)

    return new SendMessageResponse({
      messages,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getDialogs(request: GetDialogsRequest): Promise<GetDialogsResponse> {
    const dialogs = await this.messagesUseCases.getDialogs.execute(
      request.userId,
      request.folderId
    )

    return new GetDialogsResponse({
      dialogs
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getHistory(request: GetHistoryRequest): Promise<GetHistoryResponse> {
    const messages = await this.messagesUseCases.getHistory.execute(
      request.userId,
      request.peer!
    )

    return new GetHistoryResponse({
      messages: messages.map(message => ({
        ...message,
        peer: {
          peerType: message.peerType,
          peerId: message.peerId
        },
        from: {
          peerType: PeerType.USER,
          peerId: message.userId
        }
      }))
    })
  }
}
