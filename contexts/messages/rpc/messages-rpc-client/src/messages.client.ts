import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { MessagesService }     from '@chats-system/messages-rpc'

export const createClient = (options = {}): PromiseClient<typeof MessagesService> =>
  createPromiseClient(
    MessagesService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.MESSAGES_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
