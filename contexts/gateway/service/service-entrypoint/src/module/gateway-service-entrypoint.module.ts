import type { DynamicModule }         from '@nestjs/common'

import { Module }                     from '@nestjs/common'

import { GatewayServiceConfigModule } from './gateway-service-config.module.js'
import { GatewayServiceCoreModule }   from './gateway-service-core.module.js'

@Module({})
export class GatewayServiceEntrypointModule {
  static build(): DynamicModule {
    return {
      module: GatewayServiceEntrypointModule,
      imports: [GatewayServiceConfigModule.register(), GatewayServiceCoreModule.register()],
    }
  }
}
