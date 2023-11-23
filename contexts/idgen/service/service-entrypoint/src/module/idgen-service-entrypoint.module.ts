import { Module }                    from '@nestjs/common'

import { IdGenInfrastructureModule } from '@chats-system/idgen-infrastructure-module'

import { IdGenServiceCoreModule }    from './idgen-service-core.module.js'

@Module({
  imports: [IdGenServiceCoreModule.register(), IdGenInfrastructureModule.register()],
})
export class IdGenServiceEntrypointModule {}
