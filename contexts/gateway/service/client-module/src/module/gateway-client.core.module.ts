import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import { createClient }         from '@chats-system/gateway-rpc-client'

import { GATEWAY_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class GatewayClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: GatewayClientCoreModule,
      providers: [
        {
          provide: GATEWAY_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: GATEWAY_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
