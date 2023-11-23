import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { HelpService }         from '@chats-system/help-rpc'

export const createClient = (options = {}): PromiseClient<typeof HelpService> =>
  createPromiseClient(
    HelpService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.HELP_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
