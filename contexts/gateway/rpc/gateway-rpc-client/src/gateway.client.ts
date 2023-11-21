import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { GatewayService }      from '@chats-system/gateway-rpc'

export const createClient = (options = {}): PromiseClient<typeof GatewayService> =>
  createPromiseClient(
    GatewayService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.GATEWAY_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
