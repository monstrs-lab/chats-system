import { Module }                          from '@nestjs/common'

import { AuthSessionInfrastructureModule } from '@chats-system/auth-session-infrastructure-module'

@Module({
  imports: [AuthSessionInfrastructureModule.register()],
})
export class AuthSessionServiceEntrypointModule {}
