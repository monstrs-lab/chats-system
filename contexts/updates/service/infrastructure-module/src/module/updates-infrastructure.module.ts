import type { DynamicModule } from '@nestjs/common'

import { MikroOrmModule }     from '@mikro-orm/nestjs'
import { Module }             from '@nestjs/common'

import * as controllers       from '../controllers/index.js'
import * as entities          from '../entities/index.js'

@Module({})
export class UpdatesInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: UpdatesInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [MikroOrmModule.forFeature(Object.values(entities))],
    }
  }
}
