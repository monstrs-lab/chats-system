import { Module }                      from '@nestjs/common'

import { UpdatesInfrastructureModule } from '@chats-system/updates-infrastructure-module'

@Module({
  imports: [UpdatesInfrastructureModule.register()],
})
export class UpdatesServiceEntrypointModule {}
