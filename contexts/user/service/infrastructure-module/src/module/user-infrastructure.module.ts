import type { DynamicModule }        from '@nestjs/common'

import { MikroOrmModule }            from '@mikro-orm/nestjs'
import { Module }                    from '@nestjs/common'

import { UserApplicationModule }     from '@chats-system/user-application-module'
import { UserRepository }            from '@chats-system/user-domain-module'
import { UserContactRepository }     from '@chats-system/user-domain-module'
import { UserDomainModule }          from '@chats-system/user-domain-module'

import * as controllers              from '../controllers/index.js'
import * as entities                 from '../entities/index.js'
import * as mappers                  from '../mappers/index.js'
import { UserRepositoryImpl }        from '../repositories/index.js'
import { UserContactRepositoryImpl } from '../repositories/index.js'

@Module({})
export class UserInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: UserInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        MikroOrmModule.forFeature(Object.values(entities)),
        UserApplicationModule.register(),
        UserDomainModule.register(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: UserRepository,
          useClass: UserRepositoryImpl,
        },
        {
          provide: UserContactRepository,
          useClass: UserContactRepositoryImpl,
        },
      ],
      exports: [
        {
          provide: UserRepository,
          useClass: UserRepositoryImpl,
        },
        {
          provide: UserContactRepository,
          useClass: UserContactRepositoryImpl,
        },
      ],
    }
  }
}
