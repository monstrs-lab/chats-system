import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { AuthService }         from '@chats-system/auth-rpc'

export const createClient = (options = {}): PromiseClient<typeof AuthService> =>
  createPromiseClient(
    AuthService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.AUTH_SERVICE_URL || 'http://0.0.0.0:50052',
      ...options,
    })
  )

export const client = createClient()
