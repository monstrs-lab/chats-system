import type { DynamicModule }    from '@nestjs/common'

import { Module }                from '@nestjs/common'

import { createClient }          from '@chats-system/authkey-rpc-client'

import { AUTH_KEY_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class AuthKeyClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: AuthKeyClientCoreModule,
      providers: [
        {
          provide: AUTH_KEY_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: AUTH_KEY_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
