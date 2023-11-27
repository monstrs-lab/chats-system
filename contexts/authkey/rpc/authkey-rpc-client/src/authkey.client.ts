import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { AuthKeyService }      from '@chats-system/authkey-rpc'

export const createClient = (options = {}): PromiseClient<typeof AuthKeyService> =>
  createPromiseClient(
    AuthKeyService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.AUTH_KEY_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
