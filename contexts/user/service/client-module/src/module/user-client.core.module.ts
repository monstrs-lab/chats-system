import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { createClient }       from '@chats-system/user-rpc-client'

import { USER_CLIENT_TOKEN }  from '../constants/index.js'

@Module({})
export class UserClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: UserClientCoreModule,
      providers: [
        {
          provide: USER_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: USER_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
