import type { DynamicModule }      from '@nestjs/common'

import { Module }                  from '@nestjs/common'

import { GatewayClient }           from '../client/index.js'
import { GatewayClientCoreModule } from './gateway-client.core.module.js'

@Module({})
export class GatewayClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: GatewayClientModule,
      imports: [GatewayClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: GatewayClientModule,
      providers: [GatewayClient],
      exports: [GatewayClient],
    }
  }
}
