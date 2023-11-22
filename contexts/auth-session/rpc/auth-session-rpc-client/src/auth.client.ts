import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { AuthSessionService }  from '@chats-system/auth-session-rpc'

export const createClient = (options = {}): PromiseClient<typeof AuthSessionService> =>
  createPromiseClient(
    AuthSessionService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.AUTH_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
