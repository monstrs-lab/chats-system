import { MicroservisesRegistryModule } from '@monstrs/nestjs-microservices-registry'
import { Module }                      from '@nestjs/common'

import { AuthInfrastructureModule }    from '@chats-system/auth-infrastructure-module'

@Module({
  imports: [MicroservisesRegistryModule.register(), AuthInfrastructureModule.register()],
})
export class AuthServiceEntrypointModule {}
