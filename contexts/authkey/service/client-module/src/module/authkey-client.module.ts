import type { DynamicModule }      from '@nestjs/common'

import { Module }                  from '@nestjs/common'

import { AuthKeyClient }           from '../client/index.js'
import { AuthKeyClientCoreModule } from './authkey-client.core.module.js'

@Module({})
export class AuthKeyClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: AuthKeyClientModule,
      imports: [AuthKeyClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: AuthKeyClientModule,
      providers: [AuthKeyClient],
      exports: [AuthKeyClient],
    }
  }
}
