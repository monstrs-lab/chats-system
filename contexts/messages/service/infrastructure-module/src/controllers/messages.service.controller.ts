/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { PartialMessage }     from '@bufbuild/protobuf'
import type { SendMessageRequest } from '@chats-system/messages-rpc'
import type { ServiceImpl }        from '@connectrpc/connect'

import { CreateRequestContext }    from '@mikro-orm/core'
import { MikroORM }                from '@mikro-orm/core'
import { ConnectRpcMethod }        from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }       from '@monstrs/nestjs-connectrpc'
import { Validator }               from '@monstrs/nestjs-validation'
import { Controller }              from '@nestjs/common'
import { CommandBus }              from '@nestjs/cqrs'

import { SendMessageCommand }      from '@chats-system/messages-application-module'
import { SendMessageResponse }     from '@chats-system/messages-rpc'
import { MessagesService }         from '@chats-system/messages-rpc'

import { SendMessagePayload }      from '../payloads/index.js'
import { SendMessageSerializer }   from '../serializers/index.js'

@Controller()
@ConnectRpcService(MessagesService)
export class MessagesServiceController implements ServiceImpl<typeof MessagesService> {
  constructor(
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
}
