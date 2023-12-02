import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { createClient }       from '@chats-system/user-rpc-client'

import * as dataloaders       from '../dataloaders/index.js'
import { UserClient }         from '../client/index.js'
import { RPC_CLIENT_TOKEN }   from '../constants/index.js'

@Module({})
export class UserClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: UserClientModule,
      providers: [
        ...Object.values(dataloaders),
        UserClient,
        {
          provide: RPC_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [UserClient],
    }
  }
}
