import { Module }                      from '@nestjs/common'

import { GatewayInfrastructureModule } from '@chats-system/gateway-infrastructure-module'

@Module({
  imports: [GatewayInfrastructureModule.register()],
})
export class GatewayServiceEntrypointModule {}
