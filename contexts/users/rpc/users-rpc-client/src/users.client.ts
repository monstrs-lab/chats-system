import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { UsersService }        from '@chats-system/users-rpc'

export const createClient = (options = {}): PromiseClient<typeof UsersService> =>
  createPromiseClient(
    UsersService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.USERS_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
