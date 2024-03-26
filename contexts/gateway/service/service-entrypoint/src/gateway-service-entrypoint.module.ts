import { Module }                      from '@nestjs/common'

import { AuthKeyClientModule }         from '@chats-system/authkey-client-module'
import { GatewayInfrastructureModule } from '@chats-system/gateway-infrastructure-module'
import { MessagesClientModule }        from '@chats-system/messages-client-module'
import { UsersClientModule }           from '@chats-system/users-client-module'

@Module({
  imports: [
    AuthKeyClientModule.register(),
    UsersClientModule.register(),
    MessagesClientModule.register(),
    GatewayInfrastructureModule.register(),
  ],
})
export class GatewayServiceEntrypointModule {}
