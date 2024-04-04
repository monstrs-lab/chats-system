import type { DynamicModule }          from '@nestjs/common'

import { Module }                      from '@nestjs/common'

import { GatewayInfrastructureModule } from '@chats-system/gateway-infrastructure-module'

@Module({})
export class GatewayServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: GatewayServiceCoreModule,
      imports: [GatewayInfrastructureModule.register()],
    }
  }
}
