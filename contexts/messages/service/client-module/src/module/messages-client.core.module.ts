import type { DynamicModule }    from '@nestjs/common'

import { Module }                from '@nestjs/common'

import { createClient }          from '@chats-system/messages-rpc-client'

import { MESSAGES_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class MessagesClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: MessagesClientCoreModule,
      providers: [
        {
          provide: MESSAGES_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: MESSAGES_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
