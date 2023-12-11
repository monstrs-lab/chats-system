import type { DynamicModule }           from '@nestjs/common'

import { Module }                       from '@nestjs/common'

import { AuthInfrastructureModule }     from '@chats-system/auth-infrastructure-module'
import { AuthKeyInfrastructureModule }  from '@chats-system/authkey-infrastructure-module'
import { GatewayInfrastructureModule }  from '@chats-system/gateway-infrastructure-module'
import { HelpInfrastructureModule }     from '@chats-system/help-infrastructure-module'
import { IdGenInfrastructureModule }    from '@chats-system/idgen-infrastructure-module'
import { MessagesInfrastructureModule } from '@chats-system/messages-infrastructure-module'
import { SessionInfrastructureModule }  from '@chats-system/session-infrastructure-module'
import { UpdatesInfrastructureModule }  from '@chats-system/updates-infrastructure-module'
import { UserInfrastructureModule }     from '@chats-system/user-infrastructure-module'

@Module({})
export class StandaloneServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: StandaloneServiceCoreModule,
      imports: [
        GatewayInfrastructureModule.register(),
        AuthKeyInfrastructureModule.register(),
        IdGenInfrastructureModule.register(),
        HelpInfrastructureModule.register(),
        UpdatesInfrastructureModule.register(),
        UserInfrastructureModule.register(),
        AuthInfrastructureModule.register(),
        MessagesInfrastructureModule.register(),
        SessionInfrastructureModule.register(),
      ],
    }
  }
}
