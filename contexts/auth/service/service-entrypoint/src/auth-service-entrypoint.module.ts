import { Module }                   from '@nestjs/common'

import { AuthInfrastructureModule } from '@chats-system/auth-infrastructure-module'

@Module({
  imports: [AuthInfrastructureModule.register()],
})
export class AuthServiceEntrypointModule {}
