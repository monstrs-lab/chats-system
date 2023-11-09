import { MicroservisesRegistryModule } from '@monstrs/nestjs-microservices-registry'
import { Module }                      from '@nestjs/common'

import { SessionInfrastructureModule } from '@chats-system/session-infrastructure-module'

@Module({
  imports: [MicroservisesRegistryModule.register(), SessionInfrastructureModule.register()],
})
export class SessionServiceEntrypointModule {}
