import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { UsersClientModule }  from '@chats-system/users-client-module'

@Module({})
export class IntegrationsServiceConfigModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: IntegrationsServiceConfigModule,
      imports: [UsersClientModule.register()],
    }
  }
}
