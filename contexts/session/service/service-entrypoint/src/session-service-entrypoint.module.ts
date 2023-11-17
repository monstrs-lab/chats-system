import { Module }                      from '@nestjs/common'

import { SessionInfrastructureModule } from '@chats-system/session-infrastructure-module'

@Module({
  imports: [SessionInfrastructureModule.register()],
})
export class SessionServiceEntrypointModule {}
