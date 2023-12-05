import type { DynamicModule }      from '@nestjs/common'

import { Module }                  from '@nestjs/common'

import { UpdatesClient }           from '../client/index.js'
import { UpdatesClientCoreModule } from './update-client.core.module.js'

@Module({})
export class UpdatesClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: UpdatesClientModule,
      imports: [UpdatesClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: UpdatesClientModule,
      providers: [UpdatesClient],
      exports: [UpdatesClient],
    }
  }
}
