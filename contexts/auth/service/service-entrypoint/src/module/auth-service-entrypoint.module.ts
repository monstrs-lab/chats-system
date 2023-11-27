import { Module }                   from '@nestjs/common'

import { AuthInfrastructureModule } from '@chats-system/auth-infrastructure-module'

import { AuthServiceCoreModule }    from './auth-service-core.module.js'

@Module({
  imports: [AuthServiceCoreModule.register(), AuthInfrastructureModule.register()],
})
export class AuthServiceEntrypointModule {}
