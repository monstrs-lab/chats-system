import { Module }                    from '@nestjs/common'

import { UsersInfrastructureModule } from '@chats-system/users-infrastructure-module'

import { UsersServiceCoreModule }    from './users-service-core.module.js'

@Module({
  imports: [UsersServiceCoreModule.register(), UsersInfrastructureModule.register()],
})
export class UsersServiceEntrypointModule {}
