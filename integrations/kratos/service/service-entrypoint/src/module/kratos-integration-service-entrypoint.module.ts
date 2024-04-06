import type { DynamicModule }                   from '@nestjs/common'

import { Module }                               from '@nestjs/common'

import { KratosIntegrationServiceConfigModule } from './kratos-integration-service-config.module.js'
import { KratosIntegrationServiceCoreModule }   from './kratos-integration-service-core.module.js'

@Module({})
export class KratosIntegrationServiceEntrypointModule {
  static build(): DynamicModule {
    return {
      module: KratosIntegrationServiceEntrypointModule,
      imports: [
        KratosIntegrationServiceConfigModule.register(),
        KratosIntegrationServiceCoreModule.register(),
      ],
    }
  }
}
