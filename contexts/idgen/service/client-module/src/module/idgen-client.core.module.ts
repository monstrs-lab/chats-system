import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { createClient }       from '@chats-system/idgen-rpc-client'

import { RPC_CLIENT_TOKEN }   from '../constants/index.js'

@Module({})
export class IdGenClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: IdGenClientCoreModule,
      providers: [
        {
          provide: RPC_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: RPC_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
