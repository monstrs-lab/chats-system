import type { DynamicModule }       from '@nestjs/common'

import { Module }                   from '@nestjs/common'

import { MessagesClient }           from '../client/index.js'
import { MessagesClientCoreModule } from './messages-client.core.module.js'

@Module({})
export class MessagesClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: MessagesClientModule,
      imports: [MessagesClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: MessagesClientModule,
      providers: [MessagesClient],
      exports: [MessagesClient],
    }
  }
}
