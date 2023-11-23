import { Module }                          from '@nestjs/common'

import { AuthSessionInfrastructureModule } from '@chats-system/auth-session-infrastructure-module'

import { AuthSessionServiceCoreModule }    from './auth-session-service-core.module.js'

@Module({
  imports: [AuthSessionServiceCoreModule.register(), AuthSessionInfrastructureModule.register()],
})
export class AuthSessionServiceEntrypointModule {}
