import type { DynamicModule }                    from '@nestjs/common'

import { Module }                                from '@nestjs/common'

import { AuthKeyInfrastructureModule }           from '@chats-system/authkey-infrastructure-module'
import { GatewayInfrastructureModule }           from '@chats-system/gateway-infrastructure-module'
import { IdGenInfrastructureModule }             from '@chats-system/idgen-infrastructure-module'
import { KratosIntegrationInfrastructureModule } from '@chats-system/kratos-integration-infrastructure-module'
import { MessagesInfrastructureModule }          from '@chats-system/messages-infrastructure-module'
import { UsersInfrastructureModule }             from '@chats-system/users-infrastructure-module'

@Module({})
export class StandaloneServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: StandaloneServiceCoreModule,
      imports: [
        KratosIntegrationInfrastructureModule.register(),
        GatewayInfrastructureModule.register(),
        AuthKeyInfrastructureModule.register(),
        IdGenInfrastructureModule.register(),
        UsersInfrastructureModule.register(),
        MessagesInfrastructureModule.register(),
      ],
    }
  }
}
