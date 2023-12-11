import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import { createClient }         from '@chats-system/session-rpc-client'

import { SESSION_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class SessionClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: SessionClientCoreModule,
      providers: [
        {
          provide: SESSION_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: SESSION_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
