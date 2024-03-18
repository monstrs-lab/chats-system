import type { DynamicModule }     from '@nestjs/common'

import { MikroOrmModule }         from '@mikro-orm/nestjs'
import { ValidationModule }       from '@monstrs/nestjs-validation'
import { Module }                 from '@nestjs/common'

import { UsersApplicationModule } from '@chats-system/users-application-module'
import { UserRepository }         from '@chats-system/users-application-module'

import * as controllers           from '../controllers/index.js'
import * as entities              from '../entities/index.js'
import * as mappers               from '../mappers/index.js'
import { UserRepositoryImpl }     from '../repositories/index.js'

@Module({})
export class UsersInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: UsersInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        ValidationModule.register(),
        MikroOrmModule.forFeature(Object.values(entities)),
        UsersApplicationModule.register(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: UserRepository,
          useClass: UserRepositoryImpl,
        },
      ],
      exports: [
        {
          provide: UserRepository,
          useClass: UserRepositoryImpl,
        },
      ],
    }
  }
}
