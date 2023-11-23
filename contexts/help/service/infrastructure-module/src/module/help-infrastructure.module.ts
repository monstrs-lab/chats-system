import type { DynamicModule } from '@nestjs/common'

import { MikroOrmModule }     from '@mikro-orm/nestjs'
import { Module }             from '@nestjs/common'

import * as controllers       from '../controllers/index.js'
import * as entities          from '../entities/index.js'

@Module({})
export class HelpInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: HelpInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [MikroOrmModule.forFeature(Object.values(entities))],
    }
  }
}
