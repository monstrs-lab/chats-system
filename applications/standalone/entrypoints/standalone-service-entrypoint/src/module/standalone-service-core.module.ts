import type { DynamicModule }          from '@nestjs/common'

import { Module }                      from '@nestjs/common'

import { AuthKeyInfrastructureModule } from '@chats-system/authkey-infrastructure-module'
import { GatewayInfrastructureModule } from '@chats-system/gateway-infrastructure-module'
import { IdGenInfrastructureModule }   from '@chats-system/idgen-infrastructure-module'

@Module({})
export class StandaloneServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: StandaloneServiceCoreModule,
      imports: [
        GatewayInfrastructureModule.register(),
        AuthKeyInfrastructureModule.register(),
        IdGenInfrastructureModule.register(),
      ],
    }
  }
}
