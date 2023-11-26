import { Module }                   from '@nestjs/common'

import { UserInfrastructureModule } from '@chats-system/user-infrastructure-module'

import { UserServiceCoreModule }    from './user-service-core.module.js'

@Module({
  imports: [UserServiceCoreModule.register(), UserInfrastructureModule.register()],
})
export class UserServiceEntrypointModule {}
