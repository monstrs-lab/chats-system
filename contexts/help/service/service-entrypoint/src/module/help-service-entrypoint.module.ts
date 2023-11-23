import { Module }                   from '@nestjs/common'

import { HelpInfrastructureModule } from '@chats-system/help-infrastructure-module'

import { HelpServiceCoreModule }    from './help-service-core.module.js'

@Module({
  imports: [HelpServiceCoreModule.register(), HelpInfrastructureModule.register()],
})
export class HelpServiceEntrypointModule {}
