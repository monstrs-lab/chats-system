/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { PartialMessage }       from '@bufbuild/protobuf'
import type { SendMessageRequest }   from '@chats-system/messages-rpc'
import type { ListDialogsRequest }   from '@chats-system/messages-rpc'
import type { ListDialogsResponse }  from '@chats-system/messages-rpc'
import type { ListMessagesRequest }  from '@chats-system/messages-rpc'
import type { ListMessagesResponse } from '@chats-system/messages-rpc'
import type { ServiceImpl }          from '@connectrpc/connect'

import { CreateRequestContext }      from '@mikro-orm/core'
import { MikroORM }                  from '@mikro-orm/core'
import { ConnectRpcMethod }          from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }         from '@monstrs/nestjs-connectrpc'
import { Validator }                 from '@monstrs/nestjs-validation'
import { Controller }                from '@nestjs/common'
import { CommandBus }                from '@nestjs/cqrs'
import { QueryBus }                  from '@nestjs/cqrs'

import { SendMessageCommand }        from '@chats-system/messages-application-module'
import { ListDialogsQuery }          from '@chats-system/messages-application-module'
import { ListMessagesQuery }         from '@chats-system/messages-application-module'
import { FindDialogsByQueryResult }  from '@chats-system/messages-application-module'
import { FindMessagesByQueryResult } from '@chats-system/messages-application-module'
import { SendMessageResponse }       from '@chats-system/messages-rpc'
import { MessagesService }           from '@chats-system/messages-rpc'

import { SendMessagePayload }        from '../payloads/index.js'
import { ListDialogsPayload }        from '../payloads/index.js'
import { ListMessagesPayload }       from '../payloads/index.js'
import { SendMessageSerializer }     from '../serializers/index.js'
import { ListMessagesSerializer }    from '../serializers/index.js'
import { ListDialogsSerializer }     from '../serializers/index.js'

@Controller()
@ConnectRpcService(MessagesService)
export class MessagesServiceController implements ServiceImpl<typeof MessagesService> {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly validator: Validator,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async sendMessage(request: SendMessageRequest): Promise<PartialMessage<SendMessageResponse>> {
    const payload = new SendMessagePayload(request)

    await this.validator.validate(payload)

    const command = new SendMessageCommand(
      payload.randomId,
      payload.fromId,
      payload.peerType,
      payload.peerId,
      payload.message
    )

    await this.commandBus.execute(command)

    return new SendMessageSerializer()
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async listDialogs(request: ListDialogsRequest): Promise<PartialMessage<ListDialogsResponse>> {
    const payload = new ListDialogsPayload(request)

    await this.validator.validate(payload)

    return new ListDialogsSerializer(
      await this.queryBus.execute<ListDialogsQuery, FindDialogsByQueryResult>(
        new ListDialogsQuery(payload.pager, payload.order, payload.query)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async listMessages(request: ListMessagesRequest): Promise<PartialMessage<ListMessagesResponse>> {
    const payload = new ListMessagesPayload(request)

    await this.validator.validate(payload)

    return new ListMessagesSerializer(
      await this.queryBus.execute<ListMessagesQuery, FindMessagesByQueryResult>(
        new ListMessagesQuery(payload.pager, payload.order, payload.query)
      )
    )
  }
}
