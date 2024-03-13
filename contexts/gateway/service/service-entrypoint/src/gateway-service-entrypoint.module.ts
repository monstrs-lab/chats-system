import { Module }                      from '@nestjs/common'

import { AuthKeyClientModule }         from '@chats-system/authkey-client-module'
import { GatewayInfrastructureModule } from '@chats-system/gateway-infrastructure-module'

@Module({
  imports: [AuthKeyClientModule.register(), GatewayInfrastructureModule.register()],
})
export class GatewayServiceEntrypointModule {}
