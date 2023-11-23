import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { UpdatesService }      from '@chats-system/updates-rpc'

export const createClient = (options = {}): PromiseClient<typeof UpdatesService> =>
  createPromiseClient(
    UpdatesService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.UPDATES_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
