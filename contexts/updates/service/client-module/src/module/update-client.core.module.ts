import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import { createClient }         from '@chats-system/updates-rpc-client'

import { UPDATES_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class UpdatesClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: UpdatesClientCoreModule,
      providers: [
        {
          provide: UPDATES_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: UPDATES_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
