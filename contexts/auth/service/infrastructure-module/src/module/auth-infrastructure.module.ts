import type { DynamicModule } from '@nestjs/common'

import { MikroOrmModule }     from '@mikro-orm/nestjs'
import { Module }             from '@nestjs/common'

import * as controllers       from '../controllers/index.js'
import * as repositories from '../repositories/index.js'
import * as entities          from '../entities/index.js'
import * as usecases          from '../use-cases/index.js'

@Module({})
export class AuthInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: AuthInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [MikroOrmModule.forFeature(Object.values(entities))],
      providers: [...Object.values(repositories), ...Object.values(usecases)],
    }
  }
}
