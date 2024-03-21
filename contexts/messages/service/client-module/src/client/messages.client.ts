import type { PartialMessage }      from '@bufbuild/protobuf'
import type { MessagesService }     from '@chats-system/messages-rpc-client'
import type { SendMessageRequest }  from '@chats-system/messages-rpc-client'
import type { SendMessageResponse } from '@chats-system/messages-rpc-client'
import type { PromiseClient }       from '@connectrpc/connect' // eslint-disable-line @typescript-eslint/consistent-type-imports

import { Inject }                   from '@nestjs/common'
import { Injectable }               from '@nestjs/common'

import { MESSAGES_CLIENT_TOKEN }    from '../constants/index.js'

@Injectable()
export class MessagesClient {
  constructor(
    @Inject(MESSAGES_CLIENT_TOKEN) protected readonly client: PromiseClient<typeof MessagesService>
  ) {}

  async sendMessage(request: PartialMessage<SendMessageRequest>): Promise<SendMessageResponse> {
    return this.client.sendMessage(request)
  }
}
