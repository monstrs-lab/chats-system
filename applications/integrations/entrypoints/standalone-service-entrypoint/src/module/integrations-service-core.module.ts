import type { DynamicModule }                    from '@nestjs/common'

import { Module }                                from '@nestjs/common'

import { KratosIntegrationInfrastructureModule } from '@chats-system/kratos-integration-infrastructure-module'

@Module({})
export class IntegrationsServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: IntegrationsServiceCoreModule,
      imports: [KratosIntegrationInfrastructureModule.register()],
    }
  }
}
