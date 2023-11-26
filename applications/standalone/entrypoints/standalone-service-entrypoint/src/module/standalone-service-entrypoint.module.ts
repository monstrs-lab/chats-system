import { Module }                          from '@nestjs/common'

import { AuthInfrastructureModule }        from '@chats-system/auth-infrastructure-module'
import { AuthSessionInfrastructureModule } from '@chats-system/auth-session-infrastructure-module'
import { GatewayInfrastructureModule }     from '@chats-system/gateway-infrastructure-module'
import { HelpInfrastructureModule }        from '@chats-system/help-infrastructure-module'
import { IdGenInfrastructureModule }       from '@chats-system/idgen-infrastructure-module'
import { SessionInfrastructureModule }     from '@chats-system/session-infrastructure-module'
import { UpdatesInfrastructureModule }     from '@chats-system/updates-infrastructure-module'
import { UserInfrastructureModule }        from '@chats-system/user-infrastructure-module'

import { StandaloneServiceCoreModule }     from './standalone-service-core.module.js'

@Module({
  imports: [
    StandaloneServiceCoreModule.register(),
    GatewayInfrastructureModule.register(),
    SessionInfrastructureModule.register(),
    AuthSessionInfrastructureModule.register(),
    IdGenInfrastructureModule.register(),
    HelpInfrastructureModule.register(),
    UpdatesInfrastructureModule.register(),
    AuthInfrastructureModule.register(),
    UserInfrastructureModule.register()
  ],
})
export class StandaloneServiceEntrypointModule {}
