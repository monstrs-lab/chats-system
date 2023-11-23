import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { IdGenService }        from '@chats-system/idgen-rpc'

export const createClient = (options = {}): PromiseClient<typeof IdGenService> =>
  createPromiseClient(
    IdGenService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.IDGEN_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
