import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import { UsersClientModule }  from '@chats-system/users-client-module'

import * as controllers       from '../controllers/index.js'

@Module({})
export class KratosIntegrationInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: KratosIntegrationInfrastructureModule,
      imports: [UsersClientModule.attach()],
      controllers: Object.values(controllers),
    }
  }
}
