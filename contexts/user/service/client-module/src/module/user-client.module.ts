import type { DynamicModule }   from '@nestjs/common'

import { Module }               from '@nestjs/common'

import * as dataloaders         from '../dataloaders/index.js'
import { UserClient }           from '../client/index.js'
import { UserClientCoreModule } from './user-client.core.module.js'

@Module({})
export class UserClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: UserClientModule,
      imports: [UserClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: UserClientModule,
      providers: [UserClient, ...Object.values(dataloaders)],
      exports: [UserClient],
    }
  }
}
