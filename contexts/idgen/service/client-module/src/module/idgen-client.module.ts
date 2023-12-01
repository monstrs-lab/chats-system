import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { createClient }       from '@chats-system/idgen-rpc-client'

import * as dataloaders       from '../dataloaders/index.js'
import { IdGenClient }        from '../client/index.js'
import { RPC_CLIENT_TOKEN }   from '../constants/index.js'

@Module({})
export class IdGenClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: IdGenClientModule,
      providers: [
        ...Object.values(dataloaders),
        IdGenClient,
        {
          provide: RPC_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [IdGenClient],
    }
  }
}
