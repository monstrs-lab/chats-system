import type { DynamicModule }    from '@nestjs/common'

import { Module }                from '@nestjs/common'

import * as dataloaders          from '../dataloaders/index.js'
import { IdGenClient }           from '../client/index.js'
import { IdGenClientCoreModule } from './idgen-client.core.module.js'

@Module({})
export class IdGenClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: IdGenClientModule,
      imports: [IdGenClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: IdGenClientModule,
      providers: [IdGenClient, ...Object.values(dataloaders)],
      exports: [IdGenClient],
    }
  }
}
