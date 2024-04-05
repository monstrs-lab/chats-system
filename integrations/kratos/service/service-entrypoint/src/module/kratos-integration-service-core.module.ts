import type { DynamicModule }                    from '@nestjs/common'

import { Module }                                from '@nestjs/common'

import { KratosIntegrationInfrastructureModule } from '@chats-system/kratos-integration-infrastructure-module'

@Module({})
export class KratosIntegrationServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: KratosIntegrationServiceCoreModule,
      imports: [KratosIntegrationInfrastructureModule.register()],
    }
  }
}
