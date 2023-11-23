import { Module }                      from '@nestjs/common'

import { UpdatesInfrastructureModule } from '@chats-system/updates-infrastructure-module'

import { UpdatesServiceCoreModule }    from './updates-service-core.module.js'

@Module({
  imports: [UpdatesServiceCoreModule.register(), UpdatesInfrastructureModule.register()],
})
export class UpdatesServiceEntrypointModule {}
