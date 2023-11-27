import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { UserService }         from '@chats-system/user-rpc'

export const createClient = (options = {}): PromiseClient<typeof UserService> =>
  createPromiseClient(
    UserService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.USER_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
