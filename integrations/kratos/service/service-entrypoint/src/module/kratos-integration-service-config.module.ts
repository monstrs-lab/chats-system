import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { UsersClientModule }  from '@chats-system/users-client-module'

@Module({})
export class KratosIntegrationServiceConfigModule {
  static register(): DynamicModule {
    return {
      module: KratosIntegrationServiceConfigModule,
      imports: [UsersClientModule.register()],
    }
  }
}
