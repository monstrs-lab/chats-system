import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { createClient }       from '@chats-system/users-rpc-client'

import { USERS_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class UsersClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: UsersClientCoreModule,
      providers: [
        {
          provide: USERS_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: USERS_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
