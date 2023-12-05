/* eslint-disable @typescript-eslint/consistent-type-imports */

import { GetUserDialogsRequest, ReadUserMessagesRequest, ReadUserMessagesResponse }      from '@chats-system/messages-rpc'
import type { GetUserMessagesRequest }     from '@chats-system/messages-rpc'
import type { GetUserPeerMessagesRequest } from '@chats-system/messages-rpc'
import type { SendMessageRequest }         from '@chats-system/messages-rpc'
import type { ServiceImpl }                from '@connectrpc/connect'

import { CreateRequestContext }            from '@mikro-orm/core'
import { MikroORM }                        from '@mikro-orm/core'
import { ConnectRpcMethod }                from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }               from '@monstrs/nestjs-connectrpc'
import { Controller }                      from '@nestjs/common'

import { MessagesUseCases }                from '@chats-system/messages-application-module'
import { GetUserDialogsResponse }          from '@chats-system/messages-rpc'
import { GetUserMessagesResponse }         from '@chats-system/messages-rpc'
import { GetUserPeerMessagesResponse }     from '@chats-system/messages-rpc'
import { SendMessageResponse }             from '@chats-system/messages-rpc'
import { MessagesService }                 from '@chats-system/messages-rpc'
import { PeerType }                        from '@chats-system/messages-rpc'

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
    const { outboxMessage, inboxMessage, ptsCount, pts } =
      await this.messagesUseCases.sendMessage.execute(
        request.userId,
        request.peer!.peerId,
        request.peer!.peerType,
        request.message!.randomId,
        request.message!.message!.date,
        request.message!.message!.message,
        request.message!.message!
      )

    return new SendMessageResponse({
      outboxMessage: {
        ...outboxMessage,
        peer: {
          peerType: outboxMessage.peerType,
          peerId: outboxMessage.peerId,
        },
        from: {
          peerType: PeerType.USER,
          peerId: outboxMessage.userId,
        },
      },
      inboxMessage: {
        ...inboxMessage,
        peer: {
          peerType: inboxMessage.peerType,
          peerId: inboxMessage.peerId,
        },
        from: {
          peerType: PeerType.USER,
          peerId: inboxMessage.userId,
        },
      },
      ptsCount,
      pts,
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getUserDialogs(request: GetUserDialogsRequest): Promise<GetUserDialogsResponse> {
    const dialogs = await this.messagesUseCases.getUserDialogs.execute(
      request.userId,
      request.folderId
    )

    return new GetUserDialogsResponse({
      dialogs: dialogs.map((dialog) => ({
        ...dialog,
        peer: {
          peerType: dialog.peerType,
          peerId: dialog.peerId,
        },
      })),
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getUserMessages(request: GetUserMessagesRequest): Promise<GetUserMessagesResponse> {
    const messages = await this.messagesUseCases.getUserMessages.execute(
      request.userId,
      request.messageIds
    )

    return new GetUserPeerMessagesResponse({
      messages: messages.map((message) => ({
        ...message,
        peer: {
          peerType: message.peerType,
          peerId: message.peerId,
        },
        from: {
          peerType: PeerType.USER,
          peerId: message.userId,
        },
      })),
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async getUserPeerMessages(
    request: GetUserPeerMessagesRequest
  ): Promise<GetUserPeerMessagesResponse> {
    const messages = await this.messagesUseCases.getUserPeerMessages.execute(
      request.userId,
      request.peer!
    )

    return new GetUserPeerMessagesResponse({
      messages: messages.map((message) => ({
        ...message,
        peer: {
          peerType: message.peerType,
          peerId: message.peerId,
        },
        from: {
          peerType: PeerType.USER,
          peerId: message.userId,
        },
      })),
    })
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async readUserMessages(request: ReadUserMessagesRequest): Promise<ReadUserMessagesResponse> {
    const { pts, ptsCount } = await this.messagesUseCases.readUserMessages.execute(request.userId, request.peer!, request.maxId)

    return new ReadUserMessagesResponse({ pts, ptsCount })
  }
}
