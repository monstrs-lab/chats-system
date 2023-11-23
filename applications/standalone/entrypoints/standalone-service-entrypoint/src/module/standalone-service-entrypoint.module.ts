import { Module }                          from '@nestjs/common'

import { AuthSessionInfrastructureModule } from '@chats-system/auth-session-infrastructure-module'
import { GatewayInfrastructureModule }     from '@chats-system/gateway-infrastructure-module'
import { HelpInfrastructureModule }        from '@chats-system/help-infrastructure-module'
import { SessionInfrastructureModule }     from '@chats-system/session-infrastructure-module'

import { StandaloneServiceCoreModule }     from './standalone-service-core.module.js'

@Module({
  imports: [
    StandaloneServiceCoreModule.register(),
    GatewayInfrastructureModule.register(),
    SessionInfrastructureModule.register(),
    AuthSessionInfrastructureModule.register(),
    HelpInfrastructureModule.register(),
  ],
})
export class StandaloneServiceEntrypointModule {}
