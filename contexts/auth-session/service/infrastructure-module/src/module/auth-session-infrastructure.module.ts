import type { DynamicModule }    from '@nestjs/common'

import { MikroOrmModule }        from '@mikro-orm/nestjs'
import { Module }                from '@nestjs/common'

import * as controllers          from '../controllers/index.js'
import * as entities             from '../entities/index.js'
import { AuthKeyService }        from '../services/index.js'
import { AuthorizationsService } from '../services/index.js'
import { AuthsService }          from '../services/index.js'

@Module({})
export class AuthSessionInfrastructureModule {
  static register(): DynamicModule {
    return {
      module: AuthSessionInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [MikroOrmModule.forFeature(Object.values(entities))],
      providers: [AuthKeyService, AuthorizationsService, AuthsService],
    }
  }
}
