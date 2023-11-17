import { Module }                      from '@nestjs/common'

import { AuthInfrastructureModule }    from '@chats-system/auth-infrastructure-module'
import { GatewayInfrastructureModule } from '@chats-system/gateway-infrastructure-module'
import { SessionInfrastructureModule } from '@chats-system/session-infrastructure-module'

@Module({
  imports: [
    GatewayInfrastructureModule.register(),
    SessionInfrastructureModule.register(),
    AuthInfrastructureModule.register(),
  ],
})
export class StandaloneServiceEntrypointModule {}
