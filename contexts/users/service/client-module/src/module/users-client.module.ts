import type { DynamicModule }    from '@nestjs/common'

import { Module }                from '@nestjs/common'

import * as dataloaders          from '../dataloaders/index.js'
import { UsersClient }           from '../client/index.js'
import { UsersClientCoreModule } from './users-client.core.module.js'

@Module({})
export class UsersClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: UsersClientModule,
      imports: [UsersClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: UsersClientModule,
      providers: [UsersClient, ...Object.values(dataloaders)],
      exports: [UsersClient],
    }
  }
}
