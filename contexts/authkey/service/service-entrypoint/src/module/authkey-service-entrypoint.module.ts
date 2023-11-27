import { Module }                      from '@nestjs/common'

import { AuthKeyInfrastructureModule } from '@chats-system/authkey-infrastructure-module'

import { AuthKeyServiceCoreModule }    from './authkey-service-core.module.js'

@Module({
  imports: [AuthKeyServiceCoreModule.register(), AuthKeyInfrastructureModule.register()],
})
export class AuthKeyServiceEntrypointModule {}
