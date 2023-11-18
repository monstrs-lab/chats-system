import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { SessionService }         from '@chats-system/session-rpc'

export const createClient = (options = {}): PromiseClient<typeof SessionService> =>
  createPromiseClient(
    SessionService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.SESSION_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()