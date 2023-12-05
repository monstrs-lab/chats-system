import { Module }                       from '@nestjs/common'

import { MessagesInfrastructureModule } from '@chats-system/messages-infrastructure-module'

import { MessagesServiceCoreModule }    from './messages-service-core.module.js'

@Module({
  imports: [MessagesServiceCoreModule.register(), MessagesInfrastructureModule.register()],
})
export class MessagesServiceEntrypointModule {}
