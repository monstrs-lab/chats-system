import { Module }                          from '@nestjs/common'

import { AuthSessionInfrastructureModule } from '@chats-system/auth-session-infrastructure-module'
import { GatewayInfrastructureModule }     from '@chats-system/gateway-infrastructure-module'
import { SessionInfrastructureModule }     from '@chats-system/session-infrastructure-module'

@Module({
  imports: [
    GatewayInfrastructureModule.register(),
    SessionInfrastructureModule.register(),
    AuthSessionInfrastructureModule.register(),
  ],
})
export class StandaloneServiceEntrypointModule {}
