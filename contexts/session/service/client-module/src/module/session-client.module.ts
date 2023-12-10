import type { DynamicModule }      from '@nestjs/common'

import { Module }                  from '@nestjs/common'

import { SessionClient }           from '../client/index.js'
import { SessionClientCoreModule } from './session-client.core.module.js'

@Module({})
export class SessionClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: SessionClientModule,
      imports: [SessionClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: SessionClientModule,
      providers: [SessionClient],
      exports: [SessionClient],
    }
  }
}
