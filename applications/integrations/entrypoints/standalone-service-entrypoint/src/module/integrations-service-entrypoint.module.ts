import type { DynamicModule }              from '@nestjs/common'

import { Module }                          from '@nestjs/common'

import { IntegrationsServiceConfigModule } from './integrations-service-config.module.js'
import { IntegrationsServiceCoreModule }   from './integrations-service-core.module.js'

@Module({})
export class IntegrationsServiceEntrypointModule {
  static build(): DynamicModule {
    return {
      module: IntegrationsServiceEntrypointModule,
      imports: [
        IntegrationsServiceConfigModule.register(),
        IntegrationsServiceCoreModule.register(),
      ],
    }
  }
}
