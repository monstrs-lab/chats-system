import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as controllers       from '../controllers/index.js'

@Module({})
export class SessionInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: SessionInfrastructureModule,
      controllers: Object.values(controllers),
    }
  }
}
